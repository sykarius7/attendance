import { useState, useEffect } from "react";
import dummyData from "./dummyData";
import { useUsnContext } from "./UsnContext";
import "./StudentDetails.css";
import { useNavigate } from "react-router-dom";

export default function StudentDetails() {
  function home() {
    navigate("/");
  }
  const navigate = useNavigate();
  const { usn } = useUsnContext();
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(() => {
    const findStudentByUSN = () => {
      const student = dummyData.find((student) => student.usn === usn);
      if (student) {
        setStudentInfo(student);
      } else {
        setStudentInfo(null);
      }
    };

    findStudentByUSN();
  }, [usn]);

  return (
    <div className="student-details-container">
      <h1>STUDENT DETAILS</h1>
      <button className="exit-button1" onClick={home}>
        Exit
      </button>
      {studentInfo ? (
        <table className="student-table">
          <thead>
            <tr>
              <th>USN</th>
              <th>IA1</th>
              <th>IA2</th>
              <th>IA3</th>
              <th>ATTENDANCE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{studentInfo.usn}</td>
              <td>{studentInfo.ia1}</td>
              <td>{studentInfo.ia2}</td>
              <td>{studentInfo.ia3}</td>
              <td>{studentInfo.attendance}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h1 className="error">No student found with the entered USN</h1>
      )}
    </div>
  );
}
