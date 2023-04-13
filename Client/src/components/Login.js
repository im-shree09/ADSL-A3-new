import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", fontFamily: "verdana" }}>
      <h1 style={{ fontFamily: "verdana" }}>Login As Instructor</h1>
      <div className="facultyLogin" style={{ backgroundColor: "#3fb1fc" }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(event.target.facultyId.value);
            axios
              .post("http://localhost:5000/login/faculty", {
                username: event.target.facultyId.value,
                password: event.target.password.value,
              })
              .then((res) => {
                console.log("Res", res);
                navigate("/Home");
              })
              .catch((err) => {
                alert("Invalid Credentials");
                console.log("Err", err);
              });
          }}
        >
          <h3 className="facultyLoginH3">Instructor ID :</h3>
          <input type="text" name="facultyId" />
          <br />
          <h3 className="facultyLoginH3">Password</h3>
          <input type="password" name="password" />
          <br />
          <button className="facultyLoginButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
