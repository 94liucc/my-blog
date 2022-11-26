import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Home = () => {
  const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const [currentText, setCurrentText] = useState("");
  const data = "Today is the best day ever.";
  const dataArray = data.split("");
  const computeLength = (str: string) => {
    let bytesCount = 0;
    for (let i = 0; i < str.length; i++) {
      let c = str.charAt(i);
      if (/^[\u0000-\u00ff]$/.test(c)) {
        //匹配双字节
        bytesCount += 1;
      } else {
        bytesCount += 2;
      }
    }
    return bytesCount;
  };
  useEffect(() => {
    if (currentText.length === dataArray.length) return;
    const timeout = setTimeout(() => {
      setCurrentText(currentText + dataArray[currentText.length]);
      clearTimeout(timeout);
    }, 100);
  }, [currentText, dataArray]);

  return (
    <Container>
      <svg width={computeLength(currentText) * 36} height="200" className="">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" style={{ stopColor: "red", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "blue", stopOpacity: 0.6 }}
            />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="80"
          fill="url(#grad)"
          style={{ fontSize: "80px", fontWeight: "bold" }}
        >
          {currentText}
        </text>
      </svg>
    </Container>
  );
};
