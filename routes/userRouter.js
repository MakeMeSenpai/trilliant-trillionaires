const router = require("express").Router();
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")



router.post("/register", async (req, res) => {
    try {
        let { email, password, passwordCheck, displayName } = req.body;

        // validate 
        if (!email || !password || !passwordCheck)
            return res
                .status(400)
                .json({ msg: "Not all fields have been entered" })

        // checks if password > 5 characters
        if (password.length < 5)
            return res
                .status(400)
                .json({ msg: "The password needs to be atleast 5 charachters long" })

        // checks if password and password check are same
        if (password != passwordCheck)
            return res
                .status(400)
                .json({ msg: "Please enter the same password twice" })


        // checks for existing user
        const existingUser = await User.findOne({ email: email })
        if (existingUser)
            return res
                .status(400)
                .json({ msg: "An account with this email already exists" })

        // if no display name display user email
        if (!displayName) displayName = email;

        //encrpyt password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        console.log(passwordHash)

        // save the user
        const newUser = new User({
            email,
            password: passwordHash,
            displayName
        });

        // saves constructed newUser to database
        const savedUser = await newUser.save()
        res.json(savedUser);


    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        //validate 
        if (!email || !password)
            return res
                .status(400)
                .json({ msg: "Not all fields have been entered" })

        // checks if password belongs to user 
        // finds user
        const user = await User.findOne({ email: email });
        // checks user 
        if (!user)
            return res
                .status(400)
                .json({ msg: "No account with this email has been registered" })

        // match and compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res
                .status(400)
                .json({ msg: "Invalid Credentials" })

        // assigns jwt token to specific user
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                displayName: user.displayName,
            },
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



router.delete("/delete", auth, async (req, res) => {
    try {
        // finds user by id an deletes user
        const deletedUser = await User.findByIdAndDelete(req.user);
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// checks token is valid
router.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token)
            return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET)
        if (!verified)
            return res.json(false);

        const user = await User.findById(verified.id);
        if (!user)
            return res.json(false);

        return res.json(true)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

})



module.exports = router;