'use client'

import Math from '@/components/Math'
import InteractiveExercise from '@/components/InteractiveExercise'


export default function SusedniUglovi() {
  const questions = [
    {
      question: 'Koji je najmanji prirodan broj?',
      correctAnswer: '1',
      type: 'input' as const,
    },
    {
      question: 'Koliko je 347 + 256?',
      correctAnswer: '603',
      type: 'input' as const,
    },
    {
      question: 'Kako se čita broj 5.342?',
      correctAnswer: 'pet hiljada trista četrdeset dva',
      options: [
        'pet hiljada trista četrdeset dva',
        'petsto trideset četrdeset dva',
        'pet hiljada tristočetrdeset',
        'pet miliona trista četrdeset dva',
      ],
      type: 'multiple-choice' as const,
    },
    {
      question: 'Koji broj je veći: 1.234 ili 1.243?',
      correctAnswer: '1.243',
      options: ['1.234', '1.243', 'Jednaki su', 'Ne mogu se porediti'],
      type: 'multiple-choice' as const,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Sabiranje i oduzimanje</h1>
      
      <div className="lesson-content">
        <h2>Sabiranje prirodnih brojeva</h2>
        <p>
          Sabiranje je osnovna matematička operacija kojom spajamo dva ili više brojeva u jedan zbir. 
          Brojeve koje sabiramo nazivamo <strong>sabirci</strong>, a rezultat nazivamo <strong>zbir</strong>.
        </p>
      </div>
      </div>
    )
}
