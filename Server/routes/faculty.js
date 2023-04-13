const router = require("express").Router();
const connection = require("../db");

const databaseName = "INSTRUCTOR";

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
                        id: result[i].id,
                        name: result[i].name,
                        dept_name: result[i].dept_name,
                        salary: result[i].salary
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
    console.log("Wow");
    console.log(req.body);
    try {
        if (req.body.id && req.body.password && req.body.name && req.body.dept_name && req.body.salary) {
            const query = "INSERT INTO " + databaseName + " (id ,password , name, dept_name, salary) VALUES(?,?,?,?,?)";
            connection.query(query, [req.body.id, req.body.password, req.body.name, req.body.dept_name, req.body.salary], (err, result) => {
                if (err) {
                    res.status(400).send(err.message);
                    return;
                }
                console.log(result);
                res.status(200).send("Faculty Inserted with id " + req.body.id);
            });
        } else {
            throw new Error("Incorrect data");
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
});


router.patch("/:id", (req, res) => {
    try {
        const query = "UPDATE " + databaseName + " SET password =?, name=? , dept_name=?, salary=? WHERE id=?";
        connection.query(query, [req.body.password, req.body.name, req.body.dept_name, req.body.salary, req.params.id], (err, result) => {
            if (err) {
                res.status(400).send(err.message);
                return;
            }
            console.log(result);
            res.status(200).send("Faculty Updated with id " + req.params.id);
        });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.delete("/:facultyId", (req, res) => {
    try {
        connection.query("DELETE FROM " + databaseName + " WHERE id= ?", [req.params.facultyId], (err, result) => {
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