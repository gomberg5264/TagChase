const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const passport = require('passport');
const register = require('./routes/register');
const login = require('./routes/login');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

const app = express();

//middleware
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

//connect to mongodb
mongoose.connect("mongodb+srv://tagchaseAdmin:admin123@cluster0-5etjy.mongodb.net/User?retryWrites=true&w=majority")
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routes
app.get('/', (req, res) => {
    res.send('It is working');
});

app.post('/register', (req,res) => {register.handleRegister(req,res)});

app.post('/login', passport.authenticate("local"), (req,res) => {login.handleLogin(req,res)});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));