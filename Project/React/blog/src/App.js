import React, { useState } from 'react';
import logo from './logo.svg';
import poketmon from './test.jpg';
import './App.css';

function App() {
  let [글제목1, 글제목변경1] = useState('새로고침 없이');
  let [글제목2, 글제목변경2] = useState('스무스하게 렌더링하려면');
  let [글제목3, 글제목변경4] = useState('state 사용하자');
  
  return (
    <div className="App">
      <div className ='black-nav'>
        <div style={{color : 'blue', fontSize : '30px'}} >Test Blog</div>
      </div>
      <img src={ poketmon } />
      <div className = "list">
        <h3>{ 글제목1 }</h3>
        <p>5월 11일 발행</p>
        <hr/>
      </div>

      <div className = "list">
        <h3>{ 글제목2 }</h3>
        <p>5월 12일 발행</p>
        <hr/>
      </div>

      <div className = "list">
        <h3>{ 글제목3 }</h3>
        <p>5월 13일 발행</p>
        <hr/>
      </div>

      
      
    </div>
  );
}

export default App;
