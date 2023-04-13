const router = require("express").Router();
const connection = require("../db");

const databaseName = "DEPARTMENT";

router.get("/", (req, res) => {
    try {
        connection.query("SELECT * FROM " + databaseName, (err, result) => {
            if (err) {
                res.status(400).send(err.message);
                return;
            }
            console.log(result);
            if (result) {
                const arrayToSend = [];
                for (let i = 0; i < result.length; i++) {
                    arrayToSend.push({
                        dept_name: result[i].dept_name,
                        budget: result[i].budget,
                        YOE: result[i].YOE
                    });
                }
                res.status(200).send(arrayToSend);
            } else {
                res.status(200).send([]);
            }
        });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.post("/", (req, res) => {
    console.log(req.body);
    try {
        if (req.body.dept_name && req.body.budget && req.body.YOE) {
            const query = "INSERT INTO " + databaseName + " (dept_name, budget, YOE) VALUES(?,?,?)";
            connection.query(query, [req.body.dept_name, req.body.budget, req.body.YOE], (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err.message);
                    return;
                }
                console.log(result);
                res.status(200).send("Department inserted successfully " + req.body.dept_name);
            });
        } else {
            throw new Error("Improper data");
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
});


router.patch("/:dept_name", (req, res) => {
    try {
        const query = "UPDATE " + databaseName + " SET budget=?, YOE=? WHERE dept_name=?";
        connection.query(query, [req.body.budget, req.body.YOE, req.params.dept_name], (err, result) => {
            if (err) {
                res.status(400).send(err.message);
                return;
            }
            console.log(result);
            res.status(200).send("Department Updated successfully " + req.params.dept_name);
        });
    } catch (err) {
        res.status(400).send(err.message);
    }
})

router.delete("/:departmentId", (req, res) => {
    try {
        connection.query("DELETE FROM " + databaseName + " WHERE id= ?", [req.params.departmentId], (err, result) => {
            if (err) {
                res.status(400).send(err.message);
                return;
            }
            console.log(result);
        });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;