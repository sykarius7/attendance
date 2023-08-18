import "./TeacherDetails.css";
import { useNavigate } from "react-router-dom";
import { read, utils } from "xlsx";
import { useStudentDataContext } from "./StudentDataContext";

export default function TeacherDetails() {
  const navigate = useNavigate();
  const { studentData, setStudentData } = useStudentDataContext(); // Use your context here

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = async (e) => {
        const content = e.target.result;
        const workbook = read(content, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = utils.sheet_to_json(sheet);
        console.log("Parsed Data:", parsedData);

        setStudentData(parsedData);
        console.log("Student Data Context:", studentData);
      };

      reader.readAsBinaryString(file);
    }
  };

  function home() {
    navigate("/");
  }

  return (
    <div className="teacher-details-container">
      <h1 className="header"> All STUDENT DETAILS</h1>
      <label className="upload-button">
        Upload
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
      </label>
      <button className="exit-button" onClick={home}>
        Exit
      </button>
      {studentData.length > 0 ? (
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
            {studentData.map((student) => (
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
        <h1 className="excel">UPLOAD THE EXCEL FILE</h1>
      )}
    </div>
  );
}
