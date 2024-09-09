const Schema = require("./schema");

const getAll = async(req, res) => {
    try {
        const data = await Schema.find({ user: req.user._id }).populate({
            path: 'foodItem',
            select: 'image title description category person price'
        }); // finding the user and displaying the data under the current users
        res.send({
            status: 200,
            message: "Favourites retrived sucessfully",
            data: data,
        });
    } catch (error) {
        res.status(500).send("Error in retriving Favourites");
    }
};

const create = async(req, res) => {
    try {
        const favouriteData = {
            foodItem: req.body.foodItem,
            user: req.user._id,
        }
        const data = await Schema.create(favouriteData);
        res.send({
            status: 200,
            message: "Added to Favourite sucessfully",
            data: data,
        });
    } catch (error) {
        res.status(500).send("Error in Adding to Favourite");
    }
};

const remove = async(req, res) => {
    try {
        const { id } = req.params;
        await Schema.findOneAndDelete({ _id: id, user: req.user._id });
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