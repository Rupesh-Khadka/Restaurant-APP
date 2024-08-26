const Schema = require('./schema');

const create = async(req, res) => {
    try {
        const data = await Schema.create({
            ...req.body,
        })
        res.send({
            status: 200,
            message: "Message created sucessfully",
            data: data,
        })
    } catch (error) {
        res.status(500).send("Error in creating message");
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

const remove = async(req, res) => {
    console.log("req.params");
    const data = await Schema.findByIdAndDelete(req.params.id);
    res.send({
        staus: 200,
        message: "Contact deleted sucessfully",
    })
}

module.exports = {
    create,
    getAll,
    remove
}