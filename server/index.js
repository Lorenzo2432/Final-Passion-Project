require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 8080;
const mongoUri = process.env.URI;
const User = require("./Models/user")

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.set('useNewUrlParser', true);
//Connecting to mongoDB
mongoose.connect(mongoUri,{ useNewUrlParser: true, 
    useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error',console.error.bind(
    console, 'Could not connect to MongoDB...'));
db.once('open', () =>{
    console.log('Connection established with MongoDB');
});
// basic endpoint
app.get('/', (req,res)=> {
    res.status(200).send({
        status: 200,
        msg: "Server OK"
        });
});

app.get('/getusers', (req,res) => {
    User.find({}, (err,doc) => {
        if (err) {
            res.status(500).send({
                status: 500, 
                message: "No Users Found"
            })
        }
        return res.status(200).send(doc)
    }) 
})

app.post('/create-user', (req,res) => {
    const incomingData = req.body;
    const newUser = new User(incomingData);
    newUser.save((err,doc) => {
    if (err) {
        res.status(500).send({
            err: err,
            message: "Server Error Occured"
        });
    } 
        res.status(200).send({
        message: 'User Created',
        document: doc
        });
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
});