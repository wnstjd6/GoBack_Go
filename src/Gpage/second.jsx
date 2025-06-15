import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기
import './start.css';
import heartEmpty from '../Gpage/Vector.svg'; // 빈 하트 이미지
import heartFull from '../Gpage/Vector(1).svg'; // 채워진 하트 이미지
import middle from '../Gpage/StartHeart.svg'; // 중간 하트 이미지
import next from '../Gpage/계속하기.svg'; // 계속하기 버튼 이미지
import love from '../Gpage/Love Letter.svg';


function FourthPage() {
  const [person, setPerson] = useState('');
  const [like, setLike] = useState('');
  const [progress, setProgress] = useState(20);
  const [step] = useState(2 );
  const navigate = useNavigate(); // useNavigate 훅 사용
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(40);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!person.trim() || !like.trim()) {
        alert('성격과 좋아하는 것을 입력해주세요.'); // 성격과 좋아하는 것이 비어있을 때 경고 메시지
        return;
    } else {
      navigate('/third'); // 다음 페이지로 이동
    }
  };

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
        <h2 className="form-title">2. 성격과 좋아하는 것을 알려주세요</h2>
        <div className="form-group">
          <label htmlFor="name">성격</label>
          <input
            type="text"
            id="name"
            placeholder="외향적인, 밝은, 잘 웃는, 허당미가 있는 "
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">좋아하는 것</label>
          <textarea
            id="age"
            className="age-input"
            placeholder="고양이, 노래 듣기, 한강 따라 산책 하기, 맛있는 거 먹기, 바다, 치즈 케이크"
            value={like}
             onInput={e => {
                e.target.style.height = 'auto'; // 높이 초기화
                e.target.style.height = e.target.scrollHeight + 'px'; // 내용에 맞게 높이 조절
             }}
            onChange={e => setLike(e.target.value)}//실시간으로 입력값 업데이트
            autoComplete="off" // 저번에 입력한 값이 자동으로 채워지는 것을 방지
            required
          />    
        </div>
        <button type="submit" className="submit-btn">
          <img src={next} alt="다음으로" />
        </button>
        <p className="form-footer">안심하세요! 정보는 안전하게 보호됩니다. <img src={love} alt="퍈지" className='love-img'/></p>
      </form>
    </div>
  );
}

export default FourthPage;