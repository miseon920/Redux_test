import React from "react";
import { useSelector } from "react-redux"; //1.리덕스사용하기
import Sub from "./Sub";
import "./dark.scss";

const App = () => {
  const { changeMode } = useSelector((it) => it); //2.리덕스사용하기
  console.log("app", changeMode);
  return (
    <div className={`App ${changeMode ? "dark" : ""}`}>
      <Sub />
    </div>
  );
};

export default App;
/*
npm install redux //리덕스 코어깔기
npm install @reduxjs/toolkit

npm i sass react-redux @reduxjs/toolkit
*/
