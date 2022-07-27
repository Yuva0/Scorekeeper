import { useEffect, useState } from 'react'

export default function ScoreKeeper () {
  const [score, setScore] = useState(0)

  useEffect(() => {
    if(localStorage.getItem("score")){
      setScore(localStorage.getItem("score"));
    }

  },[]);

  function setScoreHandler(increment){
    if(increment){
      const newScore = parseInt(score + 1);
      setScore((prevScore) => (prevScore + 1));
      localStorage.setItem("score", newScore);
    }
    else{
      const newScore = parseInt(score - 1);
      setScore((prevScore) => (prevScore - 1));
      localStorage.setItem("score", newScore);
    }
  };

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScoreHandler(true)}>+</button>
      <button onClick={() => setScoreHandler(false)}>-</button>
    </div>
  )
}
