'use client'

import { useState } from 'react'
import Math from './Math'

interface Question {
  question: string
  correctAnswer: string | number
  options?: string[]
  type?: 'multiple-choice' | 'input'
}

interface InteractiveExerciseProps {
  questions: Question[]
  title?: string
}

export default function InteractiveExercise({ questions, title = 'Vežba' }: InteractiveExerciseProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const handleSubmit = () => {
    const question = questions[currentQuestion]
    const answer = question.type === 'multiple-choice' ? selectedOption : userAnswer
    const isCorrect = answer.toString().trim() === question.correctAnswer.toString().trim()

    if (isCorrect) {
      setScore(score + 1)
    }

    setShowFeedback(true)

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setUserAnswer('')
        setSelectedOption('')
        setShowFeedback(false)
      } else {
        setCompleted(true)
      }
    }, 2000)
  }

  const restart = () => {
    setCurrentQuestion(0)
    setUserAnswer('')
    setSelectedOption('')
    setShowFeedback(false)
    setScore(0)
    setCompleted(false)
  }

  if (completed) {
    const percentage = ((score / questions.length) * 100)
    return (
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold mb-4">🎉 Završio/la si vežbu!</h3>
        <p className="text-2xl mb-4">
          Tačno odgovorenih: {score} / {questions.length} ({percentage}%)
        </p>
        {percentage >= 80 ? (
          <p className="text-xl mb-6">Odlično! 🌟</p>
        ) : percentage >= 60 ? (
          <p className="text-xl mb-6">Dobro! Nastavi da vežbaš! 👍</p>
        ) : (
          <p className="text-xl mb-6">Pokušaj ponovo! 💪</p>
        )}
        <button
          onClick={restart}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
        >
          Pokušaj ponovo
        </button>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const isMultipleChoice = question.type === 'multiple-choice' || question.options

  return (
    <div className="bg-white border-2 border-blue-500 p-8 rounded-lg shadow-lg my-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-blue-700">{title}</h3>
        <span className="text-gray-600">
          Pitanje {currentQuestion + 1} / {questions.length}
        </span>
      </div>

      <div className="mb-6">
        <p className="text-xl mb-4">{question.question}</p>

        {isMultipleChoice && question.options ? (
          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOption(option)}
                disabled={showFeedback}
                className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                  selectedOption === option
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-300'
                } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={showFeedback}
            placeholder="Unesi odgovor..."
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        )}
      </div>

      {showFeedback && (
        <div
          className={`p-4 rounded-lg mb-4 ${
            (isMultipleChoice ? selectedOption : userAnswer).toString().trim() ===
            question.correctAnswer.toString().trim()
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {(isMultipleChoice ? selectedOption : userAnswer).toString().trim() ===
          question.correctAnswer.toString().trim() ? (
            <p className="font-semibold">✅ Tačno!</p>
          ) : (
            <p className="font-semibold">
              ❌ Netačno. Tačan odgovor je: {question.correctAnswer}
            </p>
          )}
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={
          showFeedback || (isMultipleChoice ? !selectedOption : !userAnswer.trim())
        }
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Proveri odgovor
      </button>

      <div className="mt-4 flex gap-2">
        {questions.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 flex-1 rounded ${
              idx < currentQuestion
                ? 'bg-green-500'
                : idx === currentQuestion
                ? 'bg-blue-500'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
