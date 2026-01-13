import React from "react";
import "./network-bg.css";

const NetworkBackground = () => {
  return (
    <svg
      className="polygon-network"
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* GROUP */}
      <g className="mesh" filter="url(#softGlow)">
        {/* Lines */}
        <polyline points="50,120 200,80 350,140 500,60 700,120 900,80" />
        <polyline points="80,300 200,80 420,260 700,120 920,260" />
        <polyline points="100,500 300,420 420,260 600,440 820,360" />
        <polyline points="50,120 80,300 100,500" />
        <polyline points="200,80 300,420" />
        <polyline points="350,140 420,260 500,60" />
        <polyline points="600,440 700,120 820,360" />
        <polyline points="420,260 700,120" />
        <polyline points="50,120 200,80 350,140 500,60 700,120 900,80" />
        <polyline points="80,300 200,80 420,260 700,120 920,260" />
        <polyline points="100,500 300,420 420,260 600,440 820,360" />
        <polyline points="50,120 80,300 100,500" />
        <polyline points="200,80 300,420" />
        <polyline points="350,140 420,260 500,60" />
        <polyline points="600,440 700,120 820,360" />
        <polyline points="420,260 700,120" />

        {/* Nodes */}
        <circle cx="200" cy="80" r="4" />
        <circle cx="350" cy="140" r="4" />
        <circle cx="500" cy="60" r="4" />
        <circle cx="700" cy="120" r="4" />
        <circle cx="80" cy="300" r="4" />
        <circle cx="420" cy="260" r="4" />
        <circle cx="600" cy="440" r="4" />
        <circle cx="300" cy="420" r="4" />
        <circle cx="820" cy="360" r="4" />
        <circle cx="280" cy="50" r="4" />
        <circle cx="320" cy="110" r="4" />
        <circle cx="510" cy="20" r="4" />
        <circle cx="840" cy="170" r="4" />
        <circle cx="40" cy="260" r="4" />
        <circle cx="450" cy="210" r="4" />
        <circle cx="640" cy="410" r="4" />
        <circle cx="310" cy="470" r="4" />
        <circle cx="800" cy="340" r="4" />
      </g>
    </svg>
  );
};

export default NetworkBackground;
