import React, { useState } from "react";
import "./App.css";

export default function App() {
  const questions = [
    {
      questionText: "In what US city are the baseball team the White Sox based?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "Cincinnati", isCorrect: false },
        { answerText: "Chicago", isCorrect: true },
        { answerText: "Kansas", isCorrect: false },
      ],
    },
    {
      questionText: "What position did Babe Ruth begin his career playing?",
      answerOptions: [
        { answerText: "Catcher", isCorrect: false },
        { answerText: "Pitcher", isCorrect: true },
        { answerText: "Outfield", isCorrect: false },
        { answerText: "Designated Hitter", isCorrect: false },
      ],
    },
    {
      questionText: "What is the nickname of the baseball team based in the US city of Toronto?",
      answerOptions: [
        { answerText: "Blue Jays", isCorrect: true },
        { answerText: "Angels", isCorrect: false },
        { answerText: "Red Sox", isCorrect: false },
        { answerText: "Astros", isCorrect: false },
      ],
    },
    {
      questionText: "When Shohei Ohtani was born ?",
      answerOptions: [
        { answerText: "3 July 1994", isCorrect: false },
        { answerText: "4 July 1994", isCorrect: false },
        { answerText: "6 July 1994", isCorrect: false },
        { answerText: "5 July 1994", isCorrect: true },
      ],
    },
    {
      questionText: "What division are major league baseball team the Chicago Cubs in?",
      answerOptions: [
        { answerText: "Central", isCorrect: true },
        { answerText: "North", isCorrect: false },
        { answerText: "West", isCorrect: false },
        { answerText: "East", isCorrect: false },
      ],
    },
    {
      questionText: "What team lost a record 113 games in 2003?",
      answerOptions: [
        { answerText: "Philadhelpia Philies", isCorrect: false },
        { answerText: "LA Dodgers", isCorrect: false },
        { answerText: "New York Yankees", isCorrect: true },
        { answerText: "San Fransisco Giants", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);
  const handleClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      alert("CONGRATS!!");
    }
  };

  const [showScore, setShowScore] = useState(false);

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>MLB QUIZ {currentQuestion + 1}</span> of {questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((data) => (
              <button onClick={() => handleClick(data.isCorrect)}>{data.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
