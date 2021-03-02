const router = require("express").Router();
const { UserModel } = require("../models"); 

router.post("/register", async (req, res) => {

        let { email, password } = req.body.user;

        UserModel.create({
            email,
            password
        });

    // UserModel.create ({
    //     email: req.body.user.email,
    //     password: req.body.user.password
    // });

    res.send("This is our user/register endpoint!");

    // res.status(201).json({
    //     message:"User successfully registered"
    // });
});

module.exports = router;
 



