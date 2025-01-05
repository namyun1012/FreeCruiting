import React, { useState, useEffect } from 'react';
import './Profile.css';

function Profile() {
  const [userData, setUserData] = useState({ name: '', parties: [] });

  useEffect(() => {
    // 더미 데이터 대신 API를 호출하는 로직
    setTimeout(() => {
      setUserData({
        name: 'John Doe',
        parties: ['Party A', 'Party B', 'Party C'],
      });
    }, 500); // API 호출 지연 시뮬레이션
  }, []);

  const { name, parties } = userData;

  return (
    <div className="profile-container-full">
      <header className="profile-header-full">
        <h1>👤 내 프로필</h1>
        <p><strong>계정 이름:</strong> {name || '로딩 중...'}</p>
      </header>
      <section className="party-section-full">
        <h2>📋 내가 속한 파티</h2>
        {parties.length > 0 ? (
          <ul className="party-list-full">
            {parties.map((party, index) => (
              <li key={index} className="party-item-full">
                {party}
              </li>
            ))}
          </ul>
        ) : (
          <p>속한 파티가 없습니다.</p>
        )}
      </section>
    </div>
  );
}

export default Profile;
