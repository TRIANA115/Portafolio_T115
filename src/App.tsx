import React, { useState, useEffect } from "react";
import MovingBackground from "./components/MovingBackground";

function App() {
  const [text, setText] = useState("");
  const fullText = "HOLA MUNDO";
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <MovingBackground>
      <div style={{ 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh"
      }}>
        <div style={{ 
          fontSize: "3rem", 
          fontWeight: "bold",
          fontFamily: "monospace",
          color: "#00ff00",
          textShadow: "0 0 10px #00ff00",
          border: "2px solid #00ff00",
          padding: "20px 40px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: "5px",
          position: "relative",
          overflow: "hidden"
        }}>
          {text}<span style={{ opacity: Math.random() > 0.5 ? 1 : 0 }}>_</span>
        </div>
      </div>
    </MovingBackground>
  );
}

export default App;
