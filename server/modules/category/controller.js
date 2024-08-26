const Schema = require("./schema");

const getAll = async(req, res) => {
    try {
        const data = await Schema.find().populate();
        res.send({
            status: 200,
            message: "Category retrived sucessfully",
            data: data,
        });
    } catch (error) {
        res.status(500).send("Error in retriving data");
    }
};

const getById = async(req, res) => {
    try {
        console.log(req.params);
        const data = await Schema.findById(req.params.id);
        res.send({
            status: 200,
            message: "Category Id data retrived sucessfully",
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
            message: "Category created sucessfully",
            data: data,
        });
    } catch (error) {
        res.status(500).send("Error in creating category");
    }
};

const remove = async(req, res) => {
    try {
        console.log(req.params);
        const data = await Schema.findByIdAndDelete(req.params.id);
        res.send({
            status: 200,
            message: "[Data deleted sucessfully",
        });
    } catch (error) {
        res.status(500).send("Error in deleting the data");
    }
};

const edit = async(req, res) => {
    try {
        let data = await Schema.findByIdAndUpdate(req.parmas.id, req.body, {
            new: true,
        });
        res.send({
            status: 200,
            message: "Category updated sucessfully",
            data: data,
        });
    } catch (error) {
        res.status(500).send("Error in updating data");
    }
};

module.exports = {
    create,
    getAll,
    getById,
    remove,
    edit,
};