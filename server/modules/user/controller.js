const Schema = require('./schema');

const create = async(req, res) => {
    try {
        const data = await Schema.create({
            ...req.body,
        })
        res.send({
            status: 200,
            message: "User created sucessfully",
            data: data,
        })
    } catch (error) {
        res.status(500).send("Error in creating data");
    }
}


// Read
const getAll = async(req, res) => {
    const data = await Schema.find();

    res.send({
        status: 200,
        message: "Data retreived successfully",
        data: data,
    });
};

const getById = async(req, res) => {
    console.log(req.params);

    const data = await Schema.findById(req.params.id);

    res.send({
        status: 200,
        message: "Data retreived successfully",
        data: data,
    });
};

// Update (Put)
const updateOne = async(req, res) => {
    let data = await Schema.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.send({
        status: 200,
        message: "Data updated successfully",
        data: data,
    });
};

// Delete
const deleteOne = async(req, res) => {
    const data = await Schema.findByIdAndDelete(req.params.id);
    res.send({
        status: 200,
        message: "Data deleted successfully",
    });
};


module.exports = {
    create,
    getAll,
    getById,
    deleteOne,
    updateOne
}