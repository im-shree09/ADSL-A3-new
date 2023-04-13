import React from "react";
import "./facultyLogin.css";

function FacultyLogin() {
    return (
        <div className="facultyLogin" style={{ color: "#b7dbf7" }}>
            <h3 className="facultyLoginH3">Instructor ID :</h3>
            <input type="text" />
            <br />
            <h3 className="facultyLoginH3">Password</h3>
            <input type="password" />
            <br />
            <button className="facultyLoginButton">Submit</button>
        </div>
    )
}

export default FacultyLogin;