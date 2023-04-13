import axios from "axios";
import { useEffect, useState } from "react";
import "./AllFaculty.css";
import Sidebar from "../sidebar/sidebar";
function AllFaculty() {
  const [allRows, setAllRows] = useState([]);
  function SingleRow(props) {
    return (
      <>
        <tr>
          <td>{props.data.id}</td>
          <td>{props.data.name}</td>
          <td>{props.data.dept_name}</td>
          <td>{props.data.salary}</td>
        </tr>
      </>
    );
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/faculties")
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
    <div style={{ textAlign: "center" }} className="allFacultySingleRow">
      <Sidebar />
      <h1 style={{ fontFamily: "verdana" }}>All Instructor Record</h1>
      <table
        style={{ textAlign: "center", marginLeft: "30%", marginRight: "25%" }}
      >
        <tr className="allFacultySingleRowHeader">
          <td>Instructor Id</td>
          <td>Name</td>
          <td>Department</td>
          <td>Salary</td>
        </tr>
        {allRows}
      </table>
    </div>
  );
}

export default AllFaculty;
