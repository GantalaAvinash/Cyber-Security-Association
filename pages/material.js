import React from "react";
import MaterialPage from "../Academicpages/materialpage";
import styles from "../styles";
const material = () => {
  return (
    <div className={`${styles.innerWidth} bg-primary-black overflow-hidden content-center flex justify-around ...`}>
      <MaterialPage />
    </div>
  );
};

export default material;