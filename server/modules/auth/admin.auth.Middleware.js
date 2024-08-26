const jwt = require("jsonwebtoken");
const Schema = require("../admin/schema");

const verifyAdmin = async(req, res, next) => {
    const bearerToken = req.header("Authorization");
    const token = bearerToken.split(" ")[1];

    if (token) {
        try {
            const tokenDetails = jwt.verify(token, "MernRestro");

            console.log(tokenDetails);
            const userDetails = await Schema.findById(tokenDetails.id);

            if (userDetails) {
                req.user = userDetails;
                next();
            } else {
                res.status(500).send("Admin doesnt exist");
            }
        } catch (error) {
            console.log("Error incountered during token verification");
            res.status(500).send("Invalid token");
        }
    } else {
        res.status(500).send("Please login to continue");
    }
};

module.exports = {
    verifyAdmin,
};