import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile'); // '/profile' 페이지로 이동
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
      <button onClick={goToProfile} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Profile
      </button>
    </header>
  );
}

export default Header;