import React, { useState } from "react";

const clowCards = [
  { name: "The Glow", description: "Emits a gentle light.", effect: "Provides illumination and comfort." },
  { name: "The Song", description: "Mimics songs and voices.", effect: "Amplifies harmony and emotional expression." },
  { name: "The Earthy", description: "Controls earth elements.", effect: "Grounds and stabilizes energies." },
  { name: "The Voice", description: "Takes and returns voices.", effect: "Enhances clarity and communication." },
  { name: "The Return", description: "Allows time travel to the past.", effect: "Reflects on past lessons." },
  { name: "The Storm", description: "Creates storms.", effect: "Invokes change and renewal." },
];

export default function ClowCardApp() {
  const [selectedCard, setSelectedCard] = useState(null);

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * clowCards.length);
    setSelectedCard(clowCards[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>庫洛牌占卜</h1>
      <button onClick={drawCard} style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}>
        抽一張卡
      </button>
      {selectedCard && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            borderRadius: "15px",
            background: "linear-gradient(to bottom, #d4eaf7, #b6ccd8)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            width: "300px",
          }}
        >
          <h2 style={{ fontSize: "2rem", color: "#3b3c3d" }}>{selectedCard.name}</h2>
          <p style={{ fontSize: "1.2rem", color: "#313d44" }}>{selectedCard.description}</p>
          <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#00668c" }}>
            Effect: {selectedCard.effect}
          </p>
        </div>
      )}
    </div>
  );
}