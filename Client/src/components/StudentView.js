import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./StudentView.css";

function StudentView() {
  const { studId } = useParams();
  const [data, setData] = useState({
    s_id: "",
    name: "",
    dept_name: "",
    totCred: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:5000/students/" + studId)
      .then((res) => {
        console.log("Res", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);
  return (
    <div className="StudentViewCss" style={{ textAlign: "center" }}>
      <table style={{ margin: "10% auto" }}>
        <tr>
          <td className="StudentViewCssHeader">Student ID : </td>
          <td>{data.s_id}</td>
        </tr>

        <tr>
          <td className="StudentViewCssHeader">Name : </td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td className="StudentViewCssHeader">Department : </td>
          <td>{data.dept_name}</td>
        </tr>
        <tr>
          <td className="StudentViewCssHeader">Total Credits : </td>
          <td>{data.totCred}</td>
        </tr>
      </table>
    </div>
  );
}

export default StudentView;
