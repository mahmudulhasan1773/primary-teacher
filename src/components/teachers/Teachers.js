import React, { useEffect, useState } from "react";
import Teacher from "../teacher/Teacher";
import "./teachers.css";
const Teachers = () => {
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);
  return (
    <div className="teachers">
      These are all Teachers
      <div className="teacher-container">
        {teacher.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher}></Teacher>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
