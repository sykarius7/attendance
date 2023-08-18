import "./TeacherDetails.css";
import dummyData from "./dummyData";
import { useNavigate } from "react-router-dom";
export default function TeacherDetails() {
  function home() {
    navigate("/");
  }
  const navigate = useNavigate();
  return (
    <div className="teacher-details-container">
      <h1 className="header"> All STUDENT DETAILS</h1>
      <button className="exit-button" onClick={home}>
        Exit
      </button>
      {dummyData.length > 0 ? (
        <table className="student-table">
          <thead>
            <tr>
              <th>USN</th>
              <th>IA1</th>
              <th>IA2</th>
              <th>IA3</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((student) => (
              <tr key={student.usn}>
                <td>{student.usn}</td>
                <td>{student.ia1}</td>
                <td>{student.ia2}</td>
                <td>{student.ia3}</td>
                <td>{student.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No student data available.</p>
      )}
    </div>
  );
}
