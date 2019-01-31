const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;
// declare axios for making http requests
const axios = require('axios');
// const API = 'https://jsonplaceholder.typicode.com';
/* GET api listing. */

router.get('/:posts/:_id', function (req, res) {
    var _id = req.params._id;
    db.collection('swen').findOne({ "_id": ObjectId(_id) }, (err, results) => { res.send(results) });
});

router.get('/', (req, res) => {
    res.send('api works');
});

const ObjectId = require('mongodb').ObjectID;

var db;
MongoClient.connect('mongodb://swen:swen123@ds147450.mlab.com:47450/swen', { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err)
    db = database.db('swen');
});

// Get all posts
router.get('/posts', (req, res) => {
    db.collection('swen').find().toArray((err, results) => { res.send(results) });
});


var db;
MongoClient.connect('mongodb://swen:swen123@ds147450.mlab.com:47450/swen', { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err)
    db = database.db('foodapp');
});

router.get('/authuser/:username/:password', (req, res2) => {
    var username = req.params.username;
    var password = req.params.password;
    db.collection('swen').findOne({ "name": username }, {
        password: 1, role: 1,
        _id: 0
    }, function (err, result) {
        if (result == null) res2.send([{ "auth": false }]);
        else {
            bcrypt.compare(password, result.password, function (err, res) {
                if (res) {
                    res2.send([{ "auth": true, "role": result.role }]);
                } else {
                    res2.send([{ "auth": false }]);
                }
            });
        }
    });
});
router.get('/reguser/:name/:password/:role', (req, res) => {
    bcrypt.hash(req.params.password, BCRYPT_SALT_ROUNDS, function (err, hash) {
        db.collection('swen').save({
            "name": req.params.name, "password":
                hash, "role": req.params.role
        }, (err, result) => {
        });
    });
})

router.get('/addHawker/:name/:address/:people/:rating/:phone/:email/:coverImage', (req, res) => {
    db.collection('swen').save({
        "name": req.params.name, "address": req.params.address, "people": req.params.people, "rating": req.params.rating, "phone": req.params.phone, "email": req.params.email, "coverImage": req.params.coverImage
    }, (err, result) => {
    });

})

router.route('/:posts/:_id').put(function (req, res) {
    db.collection('swen').updateOne
        ({ "_id": ObjectId(req.params._id) }, { $set: req.body });
    // res.redirect("/");
});

// delete post based on id
router.route('/posts/:_id').delete(function(req, res) {
    db.collection('swen').deleteOne( {"_id": ObjectId(req.params._id)}
   );
//    res.redirect("/");
   });

module.exports = router;




