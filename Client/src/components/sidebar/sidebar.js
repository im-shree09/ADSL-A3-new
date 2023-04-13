import { useState } from "react";
import "./sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        class="w3-sidebar w3-bar-block w3-border-right"
        style={{ display: isOpen ? "block" : "none", backgroundColor: "#d1d3ff" }}
        id="mySidebar"
      >
        <button
          onClick={() => {
            console.log("closed");
            setIsOpen(false);
          }}
          class="w3-bar-item w3-large"
        >
          Close &times;
        </button>
        <a href="/Home" class="w3-bar-item w3-button">
          Home
        </a>
        <a href="/RegisterStudent" class="w3-bar-item w3-button">
          Register Student
        </a>
        <a href="/FacultyRegister" class="w3-bar-item w3-button">
          Register Faculty
        </a>
        <a href="/NewCourse" class="w3-bar-item w3-button">
          Add New Course
        </a>
        <a href="/NewDepartment" class="w3-bar-item w3-button">
          Add New Department
        </a>

        <a href="/AllStudents" class="w3-bar-item w3-button">
          All Student Records
        </a>
        <a href="/AllFaculty" class="w3-bar-item w3-button">
          All Faculty Records
        </a>
        <a href="/ViewCourses" class="w3-bar-item w3-button">
          All Courses
        </a>
        <a href="/ViewDepartments" class="w3-bar-item w3-button">
          All Departments
        </a>
        <a href="/" class="w3-bar-item w3-button">
          Logout
        </a>
      </div>

      <div class="w3-teal">
        <button
          class="w3-button w3-teal w3-xlarge"
          onClick={() => {
            console.log("open");
            setIsOpen(true);
          }}
          style={{ display: "inline-block" }}
        >
          ☰
        </button>
        <div
          style={{
            height: "30px",
            display: "inline-block",
            width: "95%",
            padding: "0%",
          }}
          class="w3-container"
        >
          <h1 style={{ textAlign: "center", padding: "0%" }}>
            Walchand College Of Engineering, Sangli
          </h1>
        </div>
      </div>

      {/* <div class="w3-container">
        <p>This is Dummy content</p>
        <p>This is Dummy content</p>
        <p>This is Dummy content</p>
      </div> */}
    </div>
  );
}

export default Sidebar;
