/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import poketmon from './test.jpg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['새로고침 없이','스무스하게 렌더링하려면', 'state 사용하자' ]);
  let [카운트, 카운트변경] = useState(0);

  function 제목변경(){
    var newArr = [...글제목]; //deep copy
    newArr[0]= "변경해버리기"
    글제목변경(newArr)
  }
  
  
  return (
    <div className="App">
      <div className ='black-nav'>
        <div style={{color : 'blue', fontSize : '30px'}} >Test Blog</div>
      </div>
      <img src={ poketmon } />
      <div className = "list">
      <button onClick={ 제목변경 }> 눌러주세용 </button>
        <h3>{ 글제목[0] } <span onClick = { ()=>{카운트변경(카운트+1)} }>🥰</span> {카운트}</h3>
        <p>5월 11일 발행</p>
        <hr/>
      </div>

      <div className = "list">
        <h3>{ 글제목[1] }</h3>
        <p>5월 12일 발행</p>
        <hr/>
      </div>

      <div className = "list">
        <h3>{ 글제목[2] }</h3>
        <p>5월 13일 발행</p>
        <hr/>
      </div> 
      {/* <Modal></Modal> */}
      <Modal />


    </div> //return div
  );
} //Function 

function Modal(){
  return(
      <div className = "modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
} //Modal fun
export default App;
