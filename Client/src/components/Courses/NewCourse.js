import axios from "axios";
import React, { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import "./NewCourse.css";
function NewCourse() {
  const [finalData, setFinalData] = useState({
    course_id: "",
    title: "",
    credits: "",
    dept_name: "",
  });
  function handleClick(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/courses", finalData)
      .then((res) => {
        console.log(res.data, "data received sucess");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Sidebar />
      <div className="newCourse" style={{ backgroundColor: "#3fb1fc" }}>
        <h1 style={{ color: "GrayText" }}>Add New Course</h1>
        <h3 className="newCourseH3">Course ID :</h3>
        <input
          type="text"
          onChange={(event) => {
            const tempObj = { ...finalData };
            tempObj.course_id = event.target.value;
            setFinalData(tempObj);
          }}
        />
        <br />
        <h3 className="newCourseH3">Department Name :</h3>
        <input
          type="text"
          onChange={(event) => {
            const tempObj = { ...finalData };
            tempObj.dept_name = event.target.value;
            setFinalData(tempObj);
          }}
        />
        <br />
        <h3 className="newCourseH3">Title :</h3>
        <input
          type="text"
          onChange={(event) => {
            const tempObj = { ...finalData };
            tempObj.title = event.target.value;
            setFinalData(tempObj);
          }}
        />
        <br />
        <h3 className="newCourseH3">Credits :</h3>
        <input
          type="number"
          onChange={(event) => {
            const tempObj = { ...finalData };
            tempObj.credits = event.target.value;
            setFinalData(tempObj);
          }}
        />
        <br />
        <br />
        <button className="newCourseButton" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewCourse;
