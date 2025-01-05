import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css'; // CSS 파일 가져오기
import TabbedBoard from './TabbedBoard';

function Main() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="main-container">
      <h1 className="main-header">FreeCruiting</h1>
      {/* 프로필 버튼 */}
      <button className="profile-button" onClick={goToProfile}>
        {/* 프로필에 들어갈 글자 */}
        Me
      </button>
      <main>
        <TabbedBoard />
      </main>
    </div>
  );
}

export default Main;
