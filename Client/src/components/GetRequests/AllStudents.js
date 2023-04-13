import axios from "axios";
import react, { useEffect, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import "./AllStudents.css";
function AllStudents() {
  const [allRows, setAllRows] = useState([]);
  function SingleRow(props) {
    return (
      <>
        <tr>
          <td>{props.data.s_id}</td>
          <td>{props.data.name}</td>
          <td>{props.data.dept_name}</td>
          <td>{props.data.totCred}</td>
        </tr>
      </>
    );
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((res) => {
        console.log("Res", res.data);

        for (let i = 0; i < res.data.length; i++) {
          setAllRows((arr) => arr.concat(<SingleRow data={res.data[i]} />));
        }
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }} className="allStudentSingleRow">
      <Sidebar />
      <h1 style={{ fontFamily: "verdana" }}>All Students Record</h1>
      <table
        style={{ textAlign: "center", marginLeft: "25%", marginRight: "25%" }}
      >
        <tr className="allStudentSingleRowHeader">
          <td>Student Id</td>
          <td>Name</td>
          <td>Department</td>
          <td>Total Credits</td>
        </tr>
        {allRows}
      </table>
    </div>

    
  );
}

export default AllStudents;
