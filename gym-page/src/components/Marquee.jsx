import React from "react";
import "./Marquee.css";

const Marquee = () => {
  const items = [
    { icon: "💪", text: "BEAST MODE ACTIVATED" },
    { icon: "🔥", text: "SWEAT IS JUST FAT CRYING" },
    { icon: "⚡", text: "YOUR ONLY LIMIT IS YOU" },
    { icon: "🏆", text: "STRONGER THAN YESTERDAY" },
    { icon: "⭐", text: "GRIND NOW SHINE LATER" },
    { icon: "🚀", text: "LEVEL UP YOUR LIFE" },
    { icon: "👑", text: "BE YOUR OWN HERO" },
    { icon: "🎯", text: "CONSISTENCY IS KEY" },
    { icon: "💥", text: "TURN YOUR PAIN INTO POWER" },
  ];

  return (
    <div className="marquee-container">
      <div className="marquee">
        {items.map((item, index) => (
          <span key={index} className="marquee-item">
            <span className="marquee-icon">{item.icon}</span>
            <span className="marquee-text">{item.text}</span>
          </span>
        ))}
        {items.map((item, index) => (
          <span key={`duplicate-${index}`} className="marquee-item">
            <span className="marquee-icon">{item.icon}</span>
            <span className="marquee-text">{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;