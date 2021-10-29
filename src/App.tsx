import React, { useState } from 'react'
import QuestionCard from './components/QuestionCard'
import { Difficulity, fetchQuizQuestion } from './API'
const TOTAL_QUESTIONS = 10
function App() {
  console.log(fetchQuizQuestion(TOTAL_QUESTIONS, Difficulity.EASY))

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setnumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () => {}

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}

  const nextQuestion = () => {}
  return (
    <div>
      <h1>Quiz App</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score: </p>
      <p>Loading....</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  )
}

export default App
