const router = require("express").Router();
const connection = require("../db");

const databaseName = "COURSE";

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
                        title: result[i].title,
                        course_id: result[i].course_id,
                        dept_name: result[i].dept_name,
                        credits: result[i].credits
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
    try {
        if (req.body.course_id && req.body.title && req.body.credits && req.body.dept_name) {
            const query = "INSERT INTO " + databaseName + " (course_id ,title , credits , dept_name) VALUES(?,?,?,?)";
            connection.query(query, [req.body.course_id, req.body.title, req.body.credits, req.body.dept_name], (err, result) => {
                if (err) {
                    res.status(400).send(err.message);
                    return;
                }
                console.log(result);
                res.status(200).send("Course Inserted with id " + req.body.course_id);
            });
        } else {
            throw new Error("Incorrect data");
        }
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});


router.patch("/:id", (req, res) => {
    try {
        const query = "UPDATE " + databaseName + " SET title= ?, credits= ?, dept_name=? where course_id=?";
        connection.query(query, [req.body.title, req.body.credits, req.body.dept_name, req.params.id], (err, result) => {
            if (err) {
                res.status(400).send(err.message);
                return;
            }
            console.log(result);
            res.status(200).send("Course Updated with id " + req.body.course_id);
        })
    } catch (err) {
        res.status(400).send(err.message);
    }
})

router.delete("/:courseId", (req, res) => {
    try {
        connection.query("DELETE FROM " + databaseName + " WHERE id= ?", [req.params.courseId], (err, result) => {
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