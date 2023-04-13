const express = require("express");
const connection = require("./db");
const app = express();
const cors = require("cors");

const department = require("./routes/department");
const student = require("./routes/student");
const faculty = require("./routes/faculty");
const course = require("./routes/course");
const login = require("./routes/login");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  "Access-Control-Allow-Origin": "*",
  origin: ["http://localhost:3000"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/departments", department);
app.use("/students", student);
app.use("/courses", course);
app.use("/faculties", faculty);
app.use("/login", login);

if (connection) {
  var myQuery = "";

  // myQuery = "DROP TABLE CLASSROOM";
  // connection.query(myQuery, function (err, result) {
  //   if (err) {
  //     console.log("Error", err);
  //     return;
  //   } else console.log("Classroom table dropped successfully!");
  // });

  // Creating Classroom Table
  myQuery =
    "CREATE TABLE IF NOT EXISTS CLASSROOM(building varchar(50) ,room_no INTEGER, capacity INTEGER, PRIMARY KEY(building, room_no))";
  connection.query(myQuery, function (err, result) {
    if (err) {
      console.log("Error", err);
      return;
    } else console.log("Classroom table created successfully!");
  });

  // myQuery = "DROP TABLE DEPARTMENT";
  // connection.query(myQuery, function (err, result) {
  //   if (err) {
  //     console.log("Error", err);
  //     return;
  //   } else console.log("Department table dropped successfully!");
  // });

  // Creating Department table
  myQuery =
    "CREATE TABLE IF NOT EXISTS DEPARTMENT(dept_name varchar(50) PRIMARY KEY,budget INTEGER, YOE varchar(30))";
  connection.query(myQuery, function (err, result) {
    if (err) {
      console.log("Error", err);
      return;
    } else console.log("Department table created successfully!");
  });

  // Creating Course table
  myQuery =
    "CREATE TABLE IF NOT EXISTS COURSE(course_id varchar(50) PRIMARY KEY,title varchar(50), credits INTEGER, dept_name varchar(50))";
  connection.query(myQuery, function (err, result) {
    if (err) {
      console.log("Error", err);
      return;
    } else console.log("Course table created successfully!");
  });


  // myQuery = "DROP TABLE INSTRUCTOR";
  // connection.query(myQuery, function (err, result) {
  //   if (err) {
  //     console.log("Error", err);
  //     return;
  //   } else console.log("Instructor table dropped successfully!");
  // });

  // Creating Instructor Table
  myQuery =
    "CREATE TABLE IF NOT EXISTS INSTRUCTOR(id varchar(50) PRIMARY KEY,password varchar(50), name varchar(50), dept_name varchar(50), salary float(20))";
  connection.query(myQuery, function (err, result) {
    if (err) {
      console.log("Error", err);
      return;
    } else console.log("Instructor table created successfully!");
  });

  // myQuery = "DROP TABLE SECTION";
  // connection.query(myQuery, function (err, result) {
  //   if (err) {
  //     console.log("Error", err);
  //     return;
  //   } else console.log("Section table dropped successfully!");
  // });

  // Creating Section Table
  myQuery =
    "CREATE TABLE IF NOT EXISTS SECTION(course_id varchar(50),sec_id varchar(50), semester INTEGER, year INTEGER, building varchar(50), room_no INTEGER, time_slot_id varchar(50), PRIMARY KEY(course_id, sec_id, semester, year))";
  connection.query(myQuery, function (err, result) {
    if (err) {
      console.log("Error", err);
      return;
    } else console.log("Section table created successfully!");
  });

  // myQuery = "DROP TABLE STUDENT";
  // connection.query(myQuery, function (err, result) {
  //   if (err) {
  //     console.log("Error", err);
  //     return;
  //   } else console.log("Student table dropped successfully!");
  // });

  // Creating Student table
  myQuery =
    "CREATE TABLE IF NOT EXISTS STUDENT(s_id varchar(50) PRIMARY KEY, password varchar(50),name varchar(50),dept_name varchar(50),totCred INTEGER)";
  connection.query(myQuery, function (err, result) {
    if (err) {
      console.log("Error", err);
      return;
    } else console.log("Student table created successfully!");
  });

  // Creating new Faculty table if doesn't exist
//   myQuery =
//     "CREATE TABLE IF NOT EXISTS FACULTY(f_id varchar(10) PRIMARY KEY, password varchar(50),name varchar(50),course_id varchar(50),dept_name varchar(50),salary DOUBLE)";
//   connection.query(myQuery, function (err, result) {
//     if (err) {
//       console.log("Error", err);
//       return;
//     } else console.log("Faculty table created successfully!");
//   });
}

app.get("/", (req, res) => {
  res.send("Welcome to University Portal for ADS Lab !!!");
});

app.listen(5000, () => {
  console.log("Started at port no 5000");
});

/*
Department = {dept_name,building,budget}
Student = {s_id,name,dept_name,tot_cred}
Faculty = {f_id,name,course_id,dept_name,salary}
Course = {course_id,title,dept_name,credits}
*/

//postman...

// {
//     "s_id":"12",
//     "password":"pass",
//     "name":"ABC",
//     "dept_name":"CSE",
//     "totCred":10
// }

// {
//     "course_id":"CS12",
//     "title":"ADSL",
//     "credits":10,
//     "dept_name":"CSE"
// }

// {
//     "dept_name":"CSE",
//     "budget":2022,
//     "YOE":1995
// }
