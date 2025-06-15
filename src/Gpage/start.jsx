import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기
import './start.css';
import heartEmpty from '../Gpage/Vector.svg'; // 빈 하트 이미지
import heartFull from '../Gpage/Vector(1).svg'; // 채워진 하트 이미지
import middle from '../Gpage/StartHeart.svg'; // 중간 하트 이미지
import next from '../Gpage/계속하기.svg'; // 계속하기 버튼 이미지
import love from '../Gpage/Love Letter.svg';


function StartPage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // useNavigate 훅 사용
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(20);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Age: ${age}`);
    if (step < 5) {
      setStep(step + 1);  
      setProgress((step + 1) * 20);
    }
  };

  const handleNext = () => {
    if(!name.trim() || !age.trim()){
      alert('이름과 나이를 입력해주세요.'); // 이름과 나이가 비어있을 때 경고 메시지
      return;
    }
  navigate('/second'); // 다음 페이지로 이동
  }

  return (  
    <div className="start-container">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%`, transition: 'width 1s ease-in-out' }}
        ></div>
        
        <img
          src={progress === 100 ? heartFull : heartEmpty}
          alt="heart"
          className="progress-heart"
        />
        <span className="progress-text">{step}/5</span>
      </div>
      <img src={middle} alt="middle" className="middle-image" />
      <form className="form-box" onSubmit={handleSubmit}>
        <h2 className="form-title">1. 당신의 이름과 나이를 알려주세요</h2>
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            placeholder="김자바"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">나이</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="1"
            className="age-input"
            placeholder="나이를 입력하세요"
            required
          />
        </div>
        <button type="submit" className="submit-btn" onClick={handleNext}>
          <img src={next} alt="다음으로" />
        </button>
        <p className="form-footer">안심하세요! 정보는 안전하게 보호됩니다. <img src={love} alt="퍈지" className='love-img'/></p>
      </form>
    </div>
  );
}

export default StartPage;