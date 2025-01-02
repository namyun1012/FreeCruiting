import React, { useState } from "react";

// Sample data for tabs and posts
const TABS = [
  { id: "project", label: "Project" },
  { id: "study", label: "Study" },
  { id: "review", label: "Review" },
];

const POSTS = {
  project: [
    { id: 1, title: "Breaking News: React is Awesome!" },
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

function TabbedBoard() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>게시글</h1>

      {/* Tab Navigation */}
      <div style={{ display: "flex", borderBottom: "2px solid #ddd" }}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabbedBoard;
