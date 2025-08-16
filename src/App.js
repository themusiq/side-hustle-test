import React, { useState } from "react";

const questions = [
  { q: "나는 계획보단 실행이 먼저다.", score: 3 },
  { q: "돈보다 시간 자율성이 더 중요하다.", score: 2 },
  { q: "누가 시키는 것보다 내가 스스로 하는 게 좋다.", score: 3 },
  { q: "아이디어가 떠오르면 바로 메모한다.", score: 2 },
  { q: "단기 이익보단 장기적 흐름을 본다.", score: 1 },
  { q: "나는 새로운 시도를 자주 한다.", score: 3 }
];

const getResult = (total) => {
  if (total <= 6) return ["💭 망상형", "아이디어는 많지만 실행은 부족한 타입"];
  if (total <= 9) return ["🛑 회피형", "시작을 망설이는 안전 추구형"];
  if (total <= 12) return ["🪤 준비형", "준비는 철저하나 완벽주의에 가까움"];
  if (total <= 15) return ["🚶 실행형", "바로 실천에 옮기는 부업형 인간"];
  return ["🔥 전략형", "기획력과 실행력 모두 뛰어난 전략가 타입"];
};

function App() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (point) => {
    setScore(score + point);
    setStep(step + 1);
  };

  if (step >= questions.length) {
    const [title, desc] = getResult(score);
    return (
      <div style={{ padding: 20, fontFamily: "sans-serif" }}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button onClick={() => { setStep(0); setScore(0); }}>다시하기</button>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h3>{q.q}</h3>
      {[1, 2, 3, 4].map(i => (
        <button key={i} onClick={() => handleAnswer(i)} style={{ margin: 5 }}>
          {i}점
        </button>
      ))}
    </div>
  );
}

export default App;