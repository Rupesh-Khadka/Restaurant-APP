const Schema = require("./schema");
const CustomerDetails = require("./schemaCustomer");
const Menu = require("../menu/schema");

const getAll = async(req, res) => {
    try {
        const data = await Schema.find()
            .populate({
                path: "items.item",
                select: "price",
            })
            .populate({
                path: "customer",
                select: "name address email number",
            });
        res.send({
            status: 200,
            message: "Order retrieved successfully",
            data: data,
        });
    } catch (error) {
        res.status(500).json({ message: "Error in retrieving data" });
    }
};

const getById = async(req, res) => {
    try {
        console.log(req.params);
        const data = await Schema.findById(req.params.id)
            .populate({
                path: "items.item",
                select: "price",
            })
            .populate({
                path: "customer",
                select: "name address email number",
            });
        if (data) {
            res.send({
                status: 200,
                message: "Order Id data retrived sucessfully",
                data: data,
            });
        } else {
            res.status(201).json({ message: "The order doesnotexists" });
        }
    } catch (error) {
        res.status(500).send("Error in retriving order");
    }
};

const create = async(req, res) => {
    try {
        const { items, customer, status, createdAt } = req.body; // req data from items
        if (!customer ||
            !customer.name ||
            !customer.address ||
            !customer.email ||
            !customer.number
        ) {
            return res
                .status(400)
                .json({ message: "Missing required customer fields." });
        }

        console.log("Customer email:", customer.email);
        console.log("Customer number:", customer.number);

        let checkCustomer = await CustomerDetails.findOne({
            // check if the customer email and number exixt or not
            $or: [{ number: customer.number }, { email: customer.email }], // $or:[] helps to check multiple condotion in mongodb
        });
        if (!checkCustomer) {
            //If the id is not present
            checkCustomer = new CustomerDetails(customer);
            try {
                await CustomerDetails.save();
            } catch (error) {
                console.error("Error saving customer:", error);
                return res.status(500).json({ message: "Error creating customer" });
            }
        }
        const calculateTotal = await Promise.all(
            items.map(async(item) => {
                ///items from Schema
                const menuItem = await Menu.findById(item.item); // item from the schema
                if (menuItem) {
                    const total = menuItem.price * item.quantity; // calculate the total for Item
                    return {
                        //  Passing the item quantity and total to item from schema
                        item: item.item, //Item Id
                        title: menuItem.title,
                        quantity: item.quantity,
                        total,
                    };
                }
                throw new Error("Menu item not found"); // If no menu item is found
            })
        );
        const totalAmount = calculateTotal.reduce(
            (sum, item) => sum + item.total,
            0
        ); // taking item and sum to add and item.total to access total else 0
        const newOrder = new Schema({
            //Iniciate new order
            items: calculateTotal,
            totalAmount,
            customer: checkCustomer._id, //Use customer id
            status,
            createdAt,
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ message: error.message });
    }
};

const remove = async(req, res) => {
    try {
        console.log(req.params);
        const data = await Schema.findByIdAndDelete(req.params.id);
        res.send({
            status: 200,
            message: "Items deleted sucessfully",
        });
    } catch (error) {
        res.status(500).send("Error in deleting the data");
    }
};

const edit = async(req, res) => {
    try {
        const data = await Schema.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.send({
            status: 200,
            message: "Items updated sucessfully",
            data: data,
        });
    } catch (error) {
        res.status(500).send("Error in updating data");
    }
};

module.exports = {
    getAll,
    getById,
    create,
    remove,
    edit,
};