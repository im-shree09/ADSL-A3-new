const router = require("express").Router();
const connection = require("../db");

router.post("/faculty", (req, res) => {
    try {
        const databaseName = "INSTRUCTOR", username = req.body.username, password = req.body.password;
        const query = "SELECT * FROM " + databaseName + " WHERE id=?";
        console.log(query, username);
        connection.query(query, [username], (err, result) => {
            if (err) {
                res.status(400).send(err.message);
                return;
            }
            console.log(result);
            if (result) {
                if (result.length == 0)
                    res.status(400).send({ message: "Username does not exists" });
                else {
                    if (result[0].password === password.trim())
                        res.status(200).send({ loggedIn: true });
                    else
                        res.status(400).send({ message: "Username and password does not match" });
                }
            }
        });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.post("/student", (req, res) => {
    try {
        const databaseName = "STUDENT", username = req.body.username, password = req.body.password;
        const query = "SELECT * FROM " + databaseName + " WHERE s_id=?";
        connection.query(query, [username], (err, result) => {
            if (err) {
                res.status(400).send(err.message);
                return;
            }
            console.log(result);
            if (result) {
                if (result.length == 0)
                    res.status(400).send({ message: "Username does not exists" });
                else {
                    if (result[0].password === password.trim())
                        res.status(200).send({ loggedIn: true });
                    else
                        res.status(400).send({ message: "Username and password does not match" });
                }
            }
        });
    } catch (err) {
        res.status(400).send(err.message);
    }
});


module.exports = router;