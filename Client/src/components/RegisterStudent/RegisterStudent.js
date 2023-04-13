import React, { useState } from "react";
import "./RegisterStudent.css";
import Sidebar from "../sidebar/sidebar";
import axios from "axios";

function RegisterStudent() {
  const [finalData, setFinalData] = useState({
    name: "",
    s_id: "",
    password: "",
    dept_name: "",
    totCred: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/students", finalData)
      .then((res) => {
        console.log(res.data, "data sent success");
      })
      .catch((err) => {
        console.log("Flg", err);
      });
  }
  return (
    <div>
      <Sidebar />
      <div className="studentRegister" style={{ backgroundColor: "#FFFF00" }}>
        <form action="">
          <h1 style={{ color: "GrayText" }}>Register Student</h1>
          <h3 className="studentH3">Student Name :</h3>
          <input
            type="text"
            onChange={(event) => {
              const tempObj = { ...finalData };
              tempObj.name = event.target.value;
              setFinalData(tempObj);
              // finalData.name = event.target.value;
            }}
          />
          <br />
          <h3 className="studentH3">Student ID :</h3>
          <input
            type="text"
            onChange={(event) => {
              const tempObj = { ...finalData };
              tempObj.s_id = event.target.value;
              setFinalData(tempObj);
              // finalData.s_id = event.target.value;
            }}
          />
          <br />
          <h3 className="studentH3">Password :</h3>
          <input
            type="password"
            onChange={(event) => {
              const tempObj = { ...finalData };
              tempObj.password = event.target.value;
              setFinalData(tempObj);
              // finalData.password = event.target.value;
            }}
          />
          <br />
          <h3 className="studentH3">Department Name :</h3>
          <input
            type="text"
            onChange={(event) => {
              const tempObj = { ...finalData };
              tempObj.dept_name = event.target.value;
              setFinalData(tempObj);
              // finalData.dept_name = event.target.value;
            }}
          />
          <br />
          <h3 className="studentH3">Total Credit :</h3>
          <input
            type="number"
            onChange={(event) => {
              const tempObj = { ...finalData };
              tempObj.totCred = event.target.value;
              setFinalData(tempObj);
              // finalData.totCred = event.target.value;
            }}
          />
          <br />
          <br />
          <button
            className="registerButton"
            style={{ margin: "10px" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default RegisterStudent;
