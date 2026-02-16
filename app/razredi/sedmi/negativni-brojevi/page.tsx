'use client'

import InteractiveExercise from '@/components/InteractiveExercise'

export default function NegativniBrojevi() {
  const questions = [
    {
      question: 'Koliko je (-5) + (+3)?',
      correctAnswer: '-2',
      type: 'input' as const,
    },
    {
      question: 'Koliko je (+7) - (-4)?',
      correctAnswer: '11',
      options: ['3', '11', '-11', '-3'],
      type: 'multiple-choice' as const,
    },
    {
      question: 'Koliko je (-3) × (-4)?',
      correctAnswer: '12',
      options: ['-12', '12', '-7', '7'],
      type: 'multiple-choice' as const,
    },
    {
      question: 'Koliko je (-20) ÷ (+4)?',
      correctAnswer: '-5',
      type: 'input' as const,
    },
    {
      question: 'Koji broj je veći: -8 ili -3?',
      correctAnswer: '-3',
      options: ['-8', '-3', 'Jednaki su', 'Ne mogu se porediti'],
      type: 'multiple-choice' as const,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">Negativni brojevi</h1>
      
      <div className="lesson-content">
        <h2>Šta su negativni brojevi?</h2>
        <p>
          Do sada smo radili sa prirodnim brojevima (1, 2, 3...) i nulom. 
          Ali šta kada temperatura padne ispod nule? Ili kada si u minusu na računu?
          Za to nam trebaju <strong>negativni brojevi</strong>!
        </p>

        <div className="bg-purple-50 p-6 rounded-lg my-6">
          <h3 className="text-center mb-4">Brojevna prava</h3>
          <div className="relative">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg">
              {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map(num => (
                <div key={num} className="text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold
                    ${num === 0 ? 'bg-yellow-400 text-black' : 
                      num < 0 ? 'bg-red-400 text-white' : 
                      'bg-blue-400 text-white'}`}>
                    {num}
                  </div>
                  <div className="text-xs mt-1">
                    {num === 0 ? 'Nula' : num < 0 ? 'Negativan' : 'Pozitivan'}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <span className="text-2xl">←</span> Manji brojevi | Veći brojevi <span className="text-2xl">→</span>
            </div>
          </div>
        </div>

        <div className="example">
          <h3>Primeri negativnih brojeva iz života:</h3>
          <ul>
            <li>🌡️ Temperatura: -5°C (pet stepeni ispod nule)</li>
            <li>💰 Dugovi: -200 dinara (dužan si 200 dinara)</li>
            <li>🏔️ Nadmorska visina: -5m (pet metara ispod nivoa mora)</li>
            <li>🏛️ Istorija: 100. godina pre nove ere = godina -100</li>
          </ul>
        </div>

        <h2>Suprotni brojevi</h2>
        <p>
          Svaki broj ima svoj suprotni broj. Suprotni brojevi su jednako udaljeni od nule, 
          ali se nalaze sa različitih strana.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg my-4">
          <h4 className="font-bold mb-2">Primeri suprotnih brojeva:</h4>
          <ul>
            <li>Suprotni broj od +5 je -5</li>
            <li>Suprotni broj od -8 je +8</li>
            <li>Suprotni broj od 0 je 0 (nula je suprotna sama sebi!)</li>
          </ul>
        </div>

        <h2>Upoređivanje celih brojeva</h2>
        <p>Na brojevnoj pravoj, broj koji je više desno je uvek veći.</p>

        <div className="important">
          <p><strong>Važno pravilo:</strong></p>
          <ul>
            <li>Svaki pozitivan broj je veći od nule</li>
            <li>Svaki negativan broj je manji od nule</li>
            <li>Svaki pozitivan broj je veći od svakog negativnog broja</li>
            <li>Od dva negativna broja, veći je onaj koji je bliži nuli</li>
          </ul>
        </div>

        <div className="example">
          <h3>Primeri upoređivanja:</h3>
          <ul>
            <li>-3 {'>'} -8 (jer je -3 bliže nuli)</li>
            <li>5 {'>'} -100 (pozitivan je uvek veći od negativnog)</li>
            <li>-1 {'<'} 0 (negativan je uvek manji od nule)</li>
            <li>0 {'>'} -5 (nula je veća od svakog negativnog broja)</li>
          </ul>
        </div>

        <h2>Sabiranje celih brojeva</h2>
        
        <h3>1. Sabiranje dva broja istog znaka</h3>
        <p>Sabiramo njihove apsolutne vrednosti i stavljamo zajednički znak.</p>
        
        <div className="bg-green-50 p-4 rounded-lg my-4">
          <p><strong>Primer 1:</strong> (+5) + (+3) = +8</p>
          <p><strong>Primer 2:</strong> (-5) + (-3) = -8</p>
        </div>

        <h3>2. Sabiranje dva broja različitih znakova</h3>
        <p>Oduzimamo manji od većeg (po apsolutnoj vrednosti) i stavljamo znak većeg broja.</p>
        
        <div className="bg-green-50 p-4 rounded-lg my-4">
          <p><strong>Primer 1:</strong> (+8) + (-3) = +5 (jer je 8-3=5, znak većeg je +)</p>
          <p><strong>Primer 2:</strong> (-8) + (+3) = -5 (jer je 8-3=5, znak većeg je -)</p>
          <p><strong>Primer 3:</strong> (+5) + (-5) = 0 (suprotni brojevi daju 0)</p>
        </div>

        <h2>Oduzimanje celih brojeva</h2>
        <p>
          Ključno pravilo: <strong>Oduzimanje broja = Sabiranje njegovog suprotnog broja</strong>
        </p>

        <div className="bg-blue-100 p-6 rounded-lg my-6 text-center">
          <p className="text-2xl font-bold mb-3">a - b = a + (-b)</p>
          <p className="text-sm">Oduzimanje pretvaramo u sabiranje!</p>
        </div>

        <div className="example">
          <h3>Primeri oduzimanja:</h3>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border-l-4 border-purple-500">
              <p><strong>(+7) - (+3)</strong></p>
              <p>= (+7) + (-3) = +4 ✓</p>
            </div>
            <div className="bg-white p-3 rounded border-l-4 border-purple-500">
              <p><strong>(+5) - (-2)</strong></p>
              <p>= (+5) + (+2) = +7 ✓</p>
              <p className="text-sm text-gray-600">Minus puta minus daje plus!</p>
            </div>
            <div className="bg-white p-3 rounded border-l-4 border-purple-500">
              <p><strong>(-4) - (-6)</strong></p>
              <p>= (-4) + (+6) = +2 ✓</p>
            </div>
            <div className="bg-white p-3 rounded border-l-4 border-purple-500">
              <p><strong>(-3) - (+5)</strong></p>
              <p>= (-3) + (-5) = -8 ✓</p>
            </div>
          </div>
        </div>

        <h2>Množenje celih brojeva</h2>
        <p>Prvo množimo apsolutne vrednosti, zatim određujemo znak proizvoda:</p>

        <div className="bg-yellow-50 p-6 rounded-lg my-6">
          <h3 className="font-bold mb-3">Pravila znakova kod množenja:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded">
              <p className="text-2xl text-center mb-2">(+) × (+) = (+)</p>
              <p className="text-sm text-center">Plus puta plus je plus</p>
              <p className="text-center mt-2">(+3) × (+4) = +12</p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="text-2xl text-center mb-2">(-) × (-) = (+)</p>
              <p className="text-sm text-center">Minus puta minus je plus</p>
              <p className="text-center mt-2">(-3) × (-4) = +12</p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="text-2xl text-center mb-2">(+) × (-) = (-)</p>
              <p className="text-sm text-center">Plus puta minus je minus</p>
              <p className="text-center mt-2">(+3) × (-4) = -12</p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="text-2xl text-center mb-2">(-) × (+) = (-)</p>
              <p className="text-sm text-center">Minus puta plus je minus</p>
              <p className="text-center mt-2">(-3) × (+4) = -12</p>
            </div>
          </div>
        </div>

        <div className="important">
          <p><strong>Zapamti:</strong> Proizvod dva broja ISTOG znaka je POZITIVAN, a proizvod dva broja RAZLIČITIH znakova je NEGATIVAN.</p>
        </div>

        <h2>Deljenje celih brojeva</h2>
        <p>Pravila za znakove kod deljenja su ista kao i kod množenja!</p>

        <div className="example">
          <h3>Primeri deljenja:</h3>
          <ul>
            <li>(+12) ÷ (+3) = +4</li>
            <li>(-12) ÷ (-3) = +4 (isti znaci → plus)</li>
            <li>(+12) ÷ (-3) = -4 (različiti znaci → minus)</li>
            <li>(-12) ÷ (+3) = -4 (različiti znaci → minus)</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <h3 className="font-bold mb-2">💡 Saveti za rad sa negativnim brojevima:</h3>
          <ul>
            <li>Koristi brojevnu pravu za vizuelizaciju</li>
            <li>Oduzimanje pretvori u sabiranje suprotnog broja</li>
            <li>Kod množenja/deljenja: isti znaci = +, različiti znaci = -</li>
            <li>Uvek proveri da li rezultat ima smisla (npr. temperatura -100°C je moguća, ali vrlo retka)</li>
          </ul>
        </div>
      </div>

      <InteractiveExercise 
        questions={questions}
        title="Proveri svoje znanje - Negativni brojevi"
      />

      <div className="mt-8 p-6 bg-purple-50 rounded-lg border-2 border-purple-500">
        <h3 className="text-xl font-bold mb-3 text-purple-800">📝 Dodatne vežbe</h3>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Računaj: (-8) + (-5) = ?</li>
          <li>Računaj: (+10) - (-7) = ?</li>
          <li>Računaj: (-6) × (+3) = ?</li>
          <li>Računaj: (-24) ÷ (-4) = ?</li>
          <li>Poređaj od najmanjeg ka najvećem: 5, -3, 0, -7, 2, -1</li>
          <li>Napiši suprotne brojeve za: 12, -5, 0, -18</li>
        </ol>
      </div>
    </div>
  )
}
