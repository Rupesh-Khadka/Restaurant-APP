const Schema = require("../admin/schema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const adminSignup = async(req, res) => {
    try {
        const incomingData = {
            ...req.body,
        };
        const encryptedPassword = await bcrypt.hash(incomingData.password, 10);

        incomingData.password = encryptedPassword;

        const data = await Schema.create(incomingData);
        res.send({
            status: 200,
            message: "Admin Data created successfully",
            data: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error creating data");
    }
};

const adminLogin = async(req, res) => {
    try {
        const userDetails = await Schema.findOne({
            email: req.body.email,
        });

        if (userDetails) {
            const isPasswordSame = await bcrypt.compare(
                req.body.password,
                userDetails.password
            );

            if (isPasswordSame) {
                const tokenDetails = {
                    id: userDetails._id,
                    email: userDetails.email,
                };

                const expiryDetails = {
                    expiresIn: "1d",
                };

                const token = jwt.sign(tokenDetails, "MernRestro", expiryDetails);

                res.send({
                    status: 200,
                    message: "Admin Logged in successfully",
                    data: {
                        details: {
                            id: userDetails._id,
                            email: userDetails.email,
                            firstName: userDetails.firstName,
                            lastName: userDetails.lastName,
                            userName: userDetails.userName,
                        },
                        token: token,
                    },
                });
            } else {
                res.status(500).send("Incorrect Password");
            }
        } else {
            res.status(500).send("Admin doesnt exist with the provided email");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error loggin in");
    }
};

module.exports = {
    adminSignup,
    adminLogin,
};