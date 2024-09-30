const Schema = require("./schema");
const Menu = require("../menu/schema");

const getAll = async(req, res) => {
    try {
        const data = await Schema.find()
            .populate({
                path: "items.item",
                select: "title price",
            })
            .populate({
                path: "customer",
                select: "name email number address  ",
            });
        res.send({
            status: 200,
            message: "Order retrieved successfully",
            data: data,
        });
    } catch (error) {
        console.error("Error retrieving all orders:", error);
        res.status(500).json({ message: "Error in retrieving data" });
    }
};

const getAllUser = async(req, res) => {
    try {
        const data = await Schema.find({ user: req.user._id })
            .populate({
                path: "items.item",
                select: "title price",
            })
            .populate({
                path: "customer",
                select: "name email number address  ",
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

        const calculateTotal = await Promise.all(
            items.map(async(item) => {
                ///items from Schema
                const menuItem = await Menu.findById(item.item); // item from the schema
                if (menuItem) {
                    const total = menuItem.price * item.quantity; // calculate the total for Item
                    return {
                        //  Passing the item quantity and total to item from schema
                        item: item.item, //Item Id
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

        const orderCount = await Schema.countDocuments(); // Count existing orders
        const orderNumber = `MR${String(orderCount + 1).padStart(2, '0')}`; // Generate a unique order number

        const newOrder = new Schema({
            //Iniciate new order
            user: req.user._id,
            orderNumber,
            items: calculateTotal,
            totalAmount,
            customer,
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
        const { status } = req.body;
        const data = await Schema.findByIdAndUpdate(
            req.params.id, { status }, {
                new: true,
            }
        );
        res.send({
            status: 200,
            message: "Order Status  updated sucessfully",
            data: data,
        });
    } catch (error) {
        res.status(500).send("Error in updating data");
    }
};

module.exports = {
    getAll,
    getAllUser,
    getById,
    create,
    remove,
    edit,
};