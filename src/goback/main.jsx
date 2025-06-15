import React from "react";
import "../goback/main.css";
import title from './Group 26.svg';
import { useNavigate } from "react-router-dom";
import low from './main_heartDown.svg';
import high from './mainheartUp.svg';

function Go() {

    const navigate = useNavigate();
  const handleStart = () => {
    navigate('/start'); // 시작하기 버튼 클릭 시 '/start' 경로로 이동
  }
  return (
    <div className="go-container">
      {/* 위에서 내려오는 하트 */}
      <img src={high} alt="위 하트" className="highlight highlight-top" />
      <div className="go-content">
        <img src={title} alt="편지" className="title"/>
        <button className="go-btn start" onClick={handleStart}>시작하기</button>
        <button className="go-btn cancel">편지보기</button>
      </div>
      {/* 아래에서 올라오는 하트 */}
      <img src={low} alt="아래 하트" className="highlight highlight-bottom" />
    </div>
  );
}

export default Go;