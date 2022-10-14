import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { up, change, create } from "./store"; //up 함수 뽑아오기

//변수가져오기, 함수수정해보기
const Sub = () => {
  const { word, createInput } = useSelector((state) => state); //console.log(word); //initialState을 가져옴
  const dispatch = useDispatch(); //actions로 정의함 함수 불러오기
  //console.log(numup);
  console.log(createInput);

  return (
    <div>
      sunny {word}
      <button onClick={() => dispatch(up())}>account</button>
      {/*뽑아온 함수 실행 */}
      <button onClick={() => dispatch(change())}>chage mode</button>
      <button onClick={() => dispatch(create("sunny"))}>value confirm</button>
    </div>
  );
};

export default Sub;
