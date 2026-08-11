import { useState } from "react";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import StudentCards from "./components/StudentCards";

const App = () => {
  const [studentCards, setStudentCards] = useState([]);
  const [updatedData, setUpdatedData] = useState(null);

  console.log(updatedData);

  const total = studentCards.reduce((acc, student) => {
    return acc + Number(student.price);
  }, 0);

  const activeStudents = studentCards.filter((student) => {
    return student.status === "active";
  });

  const deleteStudent = (id) => {
    let filterData = studentCards.filter((student, index) => {
      console.log(student);

      return index !== id;
    });
    setStudentCards(filterData);
  };

  return (
    <div className="text-5xl gap-10 p-10">
      <NavBar total={total} activeStudent={activeStudents} studentCards={studentCards} />

      <div className="mt-10 flex">
        <Form
          updatedData={updatedData}
          setUpdatedData={setUpdatedData}
          studentCards={studentCards}
          setStudentCards={setStudentCards}
        />

        <div>
          {studentCards.map((student, idx) => {
            return (
              <StudentCards
                setUpdatedData={setUpdatedData}
                deleteStudent={deleteStudent}
                index={idx}
                key={idx}
                student={student}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
