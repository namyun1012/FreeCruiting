import React, { useEffect, useState } from "react";
import axios from 'axios';

// Sample data for tabs and posts
const TABS = [
  { id: "project", label: "Project" },
  { id: "study", label: "Study" },
  { id: "review", label: "Review" },
];

// 임시 Data
const POSTS = {
  project: [
    { id: 1, title: "Breaking News: React is Awesome!" , author : "me"},
    { id: 2, title: "How React Changed the Web" },
  ],
  study: [
    { id: 1, title: "Top 10 Football Moments" },
    { id: 2, title: "Olympic Highlights 2024" },
  ],
  review: [
    { id: 1, title: "AI Revolution in 2024" },
    { id: 2, title: "Top JavaScript Frameworks" },
  ],
};

// 임시로 정해놓은 URL
const api = axios.create({
  baseURL: 'http://localhost:8080'
});


function TabbedBoard() {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  
  // 처음 TAB에 필요한 Data를 받아옴
  useEffect(() => {
    api.get(`/api/v1/posts?type=${activeTab}`)
    .then(response => {
        setPosts(response.data);
        POSTS[activeTab] = posts;
    })
    .catch(error => console.error(error));
  }, []); 

  // 눌렀을 시 해당 data를 받아옴, 이미 받아왔을 시 안 받아 옴
  const handleTabClick = (id) => {
    setActiveTab(id);

    // 저장된 DATA 가 없을 시에 받아오기.
    if(POSTS[activeTab].length === 0) {
    // 해당 type의 데이터 가져오기
      api.get(`/api/v1/posts?type=${id}`)
        .then(response => {
            setPosts(response.data);
            POSTS[activeTab] = posts;
        })
        .catch(error => console.error(error));
    }
  };


  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>게시글</h1>

      {/* Tab Navigation */}
      <div style={{ display: "flex", borderBottom: "2px solid #ddd" }}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              border: "none",
              background: activeTab === tab.id ? "#007bff" : "#f8f9fa",
              color: activeTab === tab.id ? "white" : "#000",
              fontWeight: activeTab === tab.id ? "bold" : "normal",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ marginTop: "20px" }}>
        {POSTS[activeTab].map((post) => (
          <div
            key={post.id}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
              marginBottom: "10px",
            }}
          >
            <h3>{post.title}</h3>
            <h3>{post.author}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabbedBoard;
