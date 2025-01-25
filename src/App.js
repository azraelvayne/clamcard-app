import React from "react";
import ClowCardApp from "./ClowCardApp"; // 引入庫洛牌應用

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #fffefb, #f5f4f1)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "'Comic Sans MS', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#d4eaf7",
          fontFamily: "'Dancing Script', cursive",
        }}
      >
        庫洛牌占卜
      </h1>
      <ClowCardApp />
    </div>
  );
}

export default App;
