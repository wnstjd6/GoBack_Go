import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기
import './start.css';
import heartEmpty from '../Gpage/Vector.svg'; // 빈 하트 이미지
import heartFull from '../Gpage/Vector(1).svg'; // 채워진 하트 이미지
import middle from '../Gpage/StartHeart.svg'; // 중간 하트 이미지
import next from '../Gpage/계속하기.svg'; // 계속하기 버튼 이미지
import love from '../Gpage/Love Letter.svg';


function FifithPage() {
  const [person, setPerson] = useState('');
  const [progress, setProgress] = useState(80);
  const [step] = useState(5);
  // const navigate = useNavigate(); // useNavigate 훅 사용
  const [confessType, setConfessType] = useState('만나서 직접');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!person.trim()) {
        alert('썸탄 기간을 입력해주세요.'); // 성격과 좋아하는 것이 비어있을 때 경고 메시지
        return;
    } else {
      // navigate('/third'); // 결과창으로 만들어야 함
    }
  };

  return (  
    <div className="start-container">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%`, transition: 'width 1s ease-in-out' }}
        ></div>
        
        <div className="progress-heart-wrapper">
           <img src={heartEmpty} alt="." className="progress-heart-empty" />
           <img
          src={heartFull}
          alt="채워진 하트"
          className={"progress-heart full"}
        />
        </div>
      
        <span className="progress-text">{step}/5</span>
      </div>
      <img src={middle} alt="middle" className="middle-image" />
      <form className="form-box1  " onSubmit={handleSubmit}>
        <h2 className="form-title">5. 기간과 원하는 고백 방식을 알려주세요</h2>
        <div className="form-group">
          <label htmlFor="name">썸 탄 기간</label>
          <input
            type="text"
            id="name"
            placeholder="2주"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">고백 방식</label>
            <div className="radio-group">
            <label>
              <input
                type="radio"
                name="confessType"
                value="만나서 직접"
                checked={confessType === '만나서 직접'}
                onChange={e => setConfessType(e.target.value)}
              />
              만나서 직접
            </label>
            <label>
              <input
                type="radio"
                name="confessType"
                value="전화 걸기"
                checked={confessType === '전화 걸기'}
                onChange={e => setConfessType(e.target.value)}
              />
              전화 걸기
            </label>
            <label>
              <input
                type="radio"
                name="confessType"
                value="DM / 카톡"
                checked={confessType === 'DM / 카톡'}
                onChange={e => setConfessType(e.target.value)}
              />
              DM / 카톡
            </label>
          </div>
        </div>
        <button type="submit" className="submit-btn1">
          <img src={next} alt="다음으로" />
        </button>
        <p className="form-footer">안심하세요! 정보는 안전하게 보호됩니다. <img src={love} alt="퍈지" className='love-img'/></p>
      </form>
    </div>
  );
}

export default FifithPage;