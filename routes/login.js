const handleLogin = (req,res) => {
    res.redirect(`/home/${req.user.username}`);
};

module.exports = {
    handleLogin: handleLogin
}
   