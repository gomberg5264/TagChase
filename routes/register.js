const passport = require("passport");
const User = require("../models/user.model");

const handleRegister = (req, res) => {
    const { username, name, email, password } = req.body;

    User.register(new User({username: username, name: name, email: email}), password, (err,user) => {
        if(err) {
            return res.status(400).json('unable to register');
        }
        passport.authenticate("local")(req,res, () => {
            res.redirect(`/home/${username}`);
        })
    })

}

module.exports = {
    handleRegister: handleRegister
};