import "./App.css";
import Home from "./components/home/home";
import RegisterStudent from "./components/RegisterStudent/RegisterStudent";
import FacultyRegister from "./components/RegisterFaculty/FacultyRegister";
import AllStudents from "./components/GetRequests/AllStudents";
import AllFaculty from "./components/GetRequests/AllFaculty";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import StudentView from "./components/StudentView";
import NewCourse from "./components/Courses/NewCourse";
import NewDepartment from "./components/Department/NewDepartment";
import ViewCourses from "./components/Courses/ViewCourses";
import ViewDepartments from "./components/Department/ViewDepartments";
import Landing from "./components/landing/landingPage";
import StudentLogin from "./components/studentLogin/studentLogin";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/studentLogin" element={<StudentLogin />}></Route>
          <Route exact path="/instructorLogin" element={<Login />}></Route>
          <Route
            exact
            path="/RegisterStudent"
            element={<RegisterStudent />}
          ></Route>
          <Route
            exact
            path="/FacultyRegister"
            element={<FacultyRegister />}
          ></Route>
          <Route exact path="/AllStudents" element={<AllStudents />}></Route>
          <Route exact path="/AllFaculty" element={<AllFaculty />}></Route>
          <Route exact path="/NewCourse" element={<NewCourse />}></Route>
          <Route
            exact
            path="/NewDepartment"
            element={<NewDepartment />}
          ></Route>
          <Route
            exact
            path="/StudentView/:studId"
            element={<StudentView />}
          ></Route>
          <Route exact path="/ViewCourses" element={<ViewCourses />}></Route>
          <Route
            exact
            path="/ViewDepartments"
            element={<ViewDepartments />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
