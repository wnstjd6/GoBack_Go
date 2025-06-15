import React from "react";
import { Routes, Route } from "react-router-dom";
import Go from "./goback/main";
import Start from "./Gpage/start";
import Second from './Gpage/second';
import Third from './Gpage/third';
import Fourth from './Gpage/fourth';
import Fifith from './Gpage/fifith';

import './App.css'; // 스타일시트 추가
function App() {
  return (
    <Routes>
      <Route path="/" element={<Go />} />
      <Route path="/start" element={<Start />} />
      <Route path="/second" element={<Second />} />
      <Route path="/third" element={<Third />} />
      <Route path="/fourth" element={<Fourth />} />
      <Route path="/fifith" element={<Fifith />} />
      <Route path="*" element={<Go />} /> {/* 잘못된 경로 처리 */}
    </Routes>
  );
}

export default App;