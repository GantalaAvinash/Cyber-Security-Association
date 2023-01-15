import React from "react";
import CoursesPage from "../Academicpages/coursespage";
import styles from "../styles";
const courses = () => {
  return (
    <div className={`${styles.innerWidth} bg-primary-black overflow-hidden content-center flex justify-around ...`}>
      <CoursesPage />
    </div>
  );
};

export default courses;