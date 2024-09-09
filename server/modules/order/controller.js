const Schema = require("./schema");

const getAll = async(req, res) => {
    try {
        const data = await Schema.find().populate("category");
        res.send({
            status: 200,
            message: "Items retrived sucessfully",
            data: data,
        });
    } catch (error) {
        res.status(500).send("Error in retriving data");
    }
};

const getById = async(req, res) => {
    try {
        console.log(req.params);
        const data = await Schema.findById(req.params.id).populate("category");
        res.send({
            status: 200,
            message: "Items Id data retrived sucessfully",
            data: data,
        });
    } catch (error) {
        res.status(500).send("Error in retriving data");
    }
};

const create = async(req, res) => {
    try {
        const data = await Schema.create({
            ...req.body,
        });
        res.send({
            status: 200,
            message: "Items created sucessfully",
            data: data,
        });
    } catch (error) {
        res.status(500).send("Error in creating items");
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