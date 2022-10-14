import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const word = createSlice({
  //1.재료만들기
  name: "sunny",
  initialState: 1,
  reducers: {
    //함수관리
    up: (state) => state + 1,
  },
});

export const { up } = word.actions;
//함수가 객체라서 {}로 받아오며 다른곳에서 쓸수잇게 정의함
//export { up }; //다른곳에 쓰게 추출

const changeMode = createSlice({
  name: "다크모드",
  initialState: false,
  reducers: {
    change: (state) => !state,
  },
});

export const { change } = changeMode.actions;

const createInput = createSlice({
  name: "포함한 값받기",
  initialState: [],
  reducers: {
    create: (state, action) => {
      state.push(action.payload);
    },
    //console.log(state, action.payload)
    // return { ...state, ...action.payload };
  },
});

export const { create } = createInput.actions;

export const store = configureStore({
  //2.재료담기★
  reducer: {
    word: word.reducer,
    changeMode: changeMode.reducer,
    createInput: createInput.reducer,
  },
});

export default store;

/** https://ko.redux.js.org/introduction/getting-started/*/
