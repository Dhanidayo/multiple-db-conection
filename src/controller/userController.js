const db1 = require("../modelsandconnections/db1");
const db2 = require("../modelsandconnections/db2");

const express = require('express');
const router = express.Router();

const day = 7;

//POST REQUEST
router.post('/addUser', (req, res) => {
    if (day === 7) {
        let newUser = new db1(req.body);
        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        })
    } else {
        let newUser = new db2(req.body);
        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        })
    }
})

//GET REQUEST
router.get('/', (req, res) => {
    if (day === 7) {
        let user = new db1({
            name: "first",
            phoneNumber: "444-4400"
        })
        user.save();
       return res.send(true);
    } else {
        let user = new db2({
            name: "second",
            phoneNumber: "555-5511"
        })
        user.save();
        return res.send(false);
    }
})

module.exports = router;