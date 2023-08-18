import "./Teacher.css";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Teacher() {
  const [teacherID, setTeacherID] = useState("");
  function home() {
    navigate("/");
  }
  function login() {
    navigate("/TeacherDetails");
  }
  const navigate = useNavigate();
  return (
    <div className="teacher-body">
      <div className="overlay1"></div>
      <form className="form">
        <div
          className="gradient1"
          style={{
            backgroundImage: "linear-gradient(50deg, #800080,transparent)",
          }}
        ></div>
        <div className="title1">Enter Your FacultyID</div>

        <div className="usn1">
          <label htmlFor="usn">FacultyID</label>
          <input
            className="inputbox"
            id="usn"
            name="usn"
            type="usn"
            placeholder="Enter your FacultyID"
            value={teacherID}
            onChange={(e) => setTeacherID(e.target.value)}
          ></input>
        </div>

        <div>
          <Button
            size="lg"
            color="secondary"
            variant="contained"
            type="submit"
            sx={{ mr: 3 }}
            onClick={login}
          >
            Log In
          </Button>
          <Button
            size="lg"
            color="secondary"
            variant="contained"
            onClick={home}
          >
            Home
          </Button>
        </div>
      </form>
    </div>
  );
}
