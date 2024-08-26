const Schema = require("./schema");
const Favorite = require("./schema");

const getAll = async(req, res) => {
    try {
        const data = await Favorite.find({ user: req.user._id }).populate(
            "foodItem"
        );
        res.send({
            status: 200,
            message: "Items retrived sucessfully",
            data: data,
        });
    } catch (error) {
        res.status(500).send("Error in retriving data");
    }
};

const create = async(req, res) => {
    try {
        const { foodItem } = req.body;
        const data = new Favorite({ user: req.user._id, foodItem });
        await data.save();
        res.send({
            status: 200,
            message: "Added to favorites successfully",
            data: data,
        });
    } catch (error) {
        console.error("Error adding favorite:", error);
        res.status(500).send("Error adding favorite");
    }
};

const remove = async(req, res) => {
    try {
        const { id } = req.params;
        await Favorite.findOneAndDelete({ _id: id, user: req.user._id });
        res.send({
            status: 200,
            message: "Favorite removed successfully",
        });
    } catch (error) {
        console.error("Error removing favorite:", error);
        res.status(500).send("Error removing favorite");
    }
};

module.exports = {
    getAll,
    create,
    remove,
};