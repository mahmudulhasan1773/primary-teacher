import React from "react";

const Teacher = ({ teacher }) => {
  return (
    <div>
      name: {teacher.name}
      <p> salary : {teacher.salary}</p>
      <img src={teacher.image} alt="timage" />
    </div>
  );
};

export default Teacher;
