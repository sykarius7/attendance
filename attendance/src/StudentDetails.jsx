import { useState, useEffect } from "react";
import { useStudentDataContext } from "./StudentDataContext"; // Import the StudentDataContext
import { useUsnContext } from "./UsnContext";
import "./StudentDetails.css";
import { useNavigate } from "react-router-dom";

export default function StudentDetails() {
  function home() {
    navigate("/");
  }
  const navigate = useNavigate();
  const { usn } = useUsnContext();
  const { studentData } = useStudentDataContext(); // Use the studentData from context
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(() => {
    const findStudentByUSN = () => {
      const student = studentData.find((student) => student.usn === usn); // Use studentData instead of dummyData
      if (student) {
        setStudentInfo(student);
      } else {
        setStudentInfo(null);
      }
    };

    findStudentByUSN();
  }, [usn, studentData]); // Include studentData in the dependency array

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
