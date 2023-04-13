const router = require("express").Router();
const connection = require("../db");

const databaseName = "STUDENT";

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
            s_id: result[i].s_id,
            name: result[i].name,
            dept_name: result[i].dept_name,
            totCred: result[i].totCred,
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

  // console.log(req.body);

  try {
    if (
      req.body.s_id &&
      req.body.password &&
      req.body.name &&
      req.body.dept_name &&
      req.body.totCred
    ) {
      const query =
        "INSERT INTO " +
        databaseName +
        " (s_id, password, name, dept_name, totCred) VALUES(?,?,?,?,?)";
      connection.query(
        query,
        [
          req.body.s_id,
          req.body.password,
          req.body.name,
          req.body.dept_name,
          req.body.totCred,
        ],
        (err, result) => {
          if (err) {
            res.status(400).send(err.message);
            return;
          }
          console.log(result);
          res.status(200).send("Student Inserted with id " + req.body.s_id);
        }
      );
    } else {
      throw new Error("Incorrect data");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

router.get("/:id", (req, res) => {
  try {
    const query = "SELECT * FROM " + databaseName + " WHERE s_id= ?";
    connection.query(query, [req.params.id], (err, result) => {
      if (err) {
        res.status(400).send(err.message);
        return;
      }
      console.log(result);
      if (result) {
        const data = {
          s_id: result[0].s_id,
          name: result[0].name,
          dept_name: result[0].dept_name,
          totCred: result[0].totCred,
        };
        res.status(200).send(data);
      } else {
        throw new Error(" Student Not Found");
      }
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.patch("/:id", (req, res) => {
  try {
    const query =
      "UPDATE " +
      databaseName +
      " SET password =?, name=?, dept_name=?, totalCred=? WHERE s_id=?";
    connection.query(
      query,
      [
        req.body.password,
        req.body.name,
        req.body.dept_name,
        req.body.totCred,
        req.params.id,
      ],
      (err, result) => {
        if (err) {
          res.status(400).send(err.message);
          return;
        }
        console.log(result);
        res.status(200).send("Student Updated with id " + req.params.id);
      }
    );
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete("/:studentId", (req, res) => {
  try {
    connection.query(
      "DELETE FROM " + databaseName + " WHERE id= ?",
      [req.params.studentId],
      (err, result) => {
        if (err) {
          res.status(400).send(err.message);
          return;
        }
        console.log(result);
      }
    );
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
