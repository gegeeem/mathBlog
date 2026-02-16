'use client'
import Math from '@/components/Math'
import InteractiveExercise from '@/components/InteractiveExercise'

export default function SabiranjeOduzimanje() {
  const questions = [
    {
      question: 'Koliko je 456 + 237?',
      correctAnswer: '693',
      type: 'input' as const,
    },
    {
      question: 'Koliko je 800 - 345?',
      correctAnswer: '455',
      type: 'input' as const,
    },
    {
      question: 'Ana ima 125 dinara, dobila je još 75 dinara. Koliko sada ima?',
      correctAnswer: '200',
      options: ['150', '175', '200', '250'],
      type: 'multiple-choice' as const,
    },
    {
      question: 'U korpi je bilo 45 jabuka. Prodato je 28 jabuka. Koliko ih je ostalo?',
      correctAnswer: '17',
      type: 'input' as const,
    },
    {
      question: 'Šta je rezultat: 1.234 + 5.678?',
      correctAnswer: '6.912',
      options: ['6.812', '6.912', '7.012', '6.902'],
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

        <div className="example">
          <h3>Primer:</h3>
          <p className="text-2xl text-center my-4">
            234 + 156 = 390
          </p>
          <p className="text-center">
            <span className="text-blue-600">234</span> i <span className="text-blue-600">156</span> su sabirci<br/>
            <span className="text-green-600">390</span> je zbir
          </p>
        </div>

        <h3>Sabiranje "u glavi" (usmeno sabiranje)</h3>
        <p>Za manje brojeve možemo sabirati u glavi:</p>
        <ul>
          <li>25 + 15 = 40 (20 + 10 = 30, pa 5 + 5 = 10, ukupno 40)</li>
          <li>47 + 23 = 70 (40 + 20 = 60, pa 7 + 3 = 10, ukupno 70)</li>
        </ul>

        <h3>Sabiranje "u kolonama" (pismeno sabiranje)</h3>
        <p>Za veće brojeve koristimo sabiranje u kolonama. Brojeve pišemo jedan ispod drugog tako da jedinice budu ispod jedinica, desetice ispod desetica, itd.</p>

        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h3 className="text-center mb-4">Primer: 456 + 237</h3>
          <div className="font-mono text-2xl text-center space-y-2">
            <div className="flex justify-center gap-4">
              <span className="text-gray-400">S</span>
              <span className="text-gray-400">D</span>
              <span className="text-gray-400">J</span>
            </div>
            <div className="flex justify-center gap-4">
              <span>4</span>
              <span>5</span>
              <span>6</span>
            </div>
            <div className="flex justify-center gap-4">
              <span className="mr-2">+</span>
              <span>2</span>
              <span>3</span>
              <span>7</span>
            </div>
            <div className="border-t-2 border-gray-400 w-48 mx-auto"></div>
            <div className="flex justify-center gap-4">
              <span>6</span>
              <span>9</span>
              <span>3</span>
            </div>
          </div>
          <div className="mt-4 text-sm space-y-1">
            <p>1. Sabiramo jedinice: 6 + 7 = 13 (pišemo 3, pamtimo 1)</p>
            <p>2. Sabiramo desetice: 5 + 3 + 1 = 9</p>
            <p>3. Sabiramo stotice: 4 + 2 = 6</p>
            <p className="font-bold text-green-600">Rezultat: 693</p>
          </div>
        </div>

        <div className="important">
          <p><strong>Pravilo prenosa:</strong> Kada zbir cifara na nekom mestu bude 10 ili više, pišemo samo cifru jedinica, a cifru desetica "prenosimo" (dodajemo) na sledeće mesto.</p>
        </div>

        <h2>Svojstva sabiranja</h2>
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">1. Komutativnost</h4>
            <p>Redosled sabiranja nije bitan:</p>
            <p className="text-center text-lg mt-2">5 + 3 = 3 + 5 = 8</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">2. Asocijativnost</h4>
            <p>Možemo grupisati kako želimo:</p>
            <p className="text-center text-lg mt-2">(2 + 3) + 4 = 2 + (3 + 4) = 9</p>
          </div>
        </div>

        <h2>Oduzimanje prirodnih brojeva</h2>
        <p>
          Oduzimanje je suprotna operacija od sabiranja. Broj koji oduzimamo nazivamo <strong>umanjilac</strong>, 
          broj koji oduzimamo od njega je <strong>umanjenik</strong>, a rezultat je <strong>razlika</strong>.
        </p>

        <div className="example">
          <h3>Primer:</h3>
          <p className="text-2xl text-center my-4">
            567 - 234 = 333
          </p>
          <p className="text-center">
            <span className="text-blue-600">567</span> je umanjenik<br/>
            <span className="text-blue-600">234</span> je umanjilac<br/>
            <span className="text-green-600">333</span> je razlika
          </p>
        </div>

        <h3>Oduzimanje "u kolonama"</h3>
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h3 className="text-center mb-4">Primer: 543 - 217</h3>
          <div className="font-mono text-2xl text-center space-y-2">
            <div className="flex justify-center gap-4">
              <span className="text-gray-400">S</span>
              <span className="text-gray-400">D</span>
              <span className="text-gray-400">J</span>
            </div>
            <div className="flex justify-center gap-4">
              <span>5</span>
              <span>4</span>
              <span>3</span>
            </div>
            <div className="flex justify-center gap-4">
              <span className="mr-2">-</span>
              <span>2</span>
              <span>1</span>
              <span>7</span>
            </div>
            <div className="border-t-2 border-gray-400 w-48 mx-auto"></div>
            <div className="flex justify-center gap-4">
              <span>3</span>
              <span>2</span>
              <span>6</span>
            </div>
          </div>
          <div className="mt-4 text-sm space-y-1">
            <p>1. Ne možemo oduzeti 7 od 3, pa "pozajmljujemo" 1 iz desetica</p>
            <p>2. 13 - 7 = 6 (pišemo 6)</p>
            <p>3. 3 - 1 = 2 (jer smo pozajmili 1), 2 - 1 = 2</p>
            <p>4. 5 - 2 = 3</p>
            <p className="font-bold text-green-600">Rezultat: 326</p>
          </div>
        </div>

        <h2>Provera tačnosti</h2>
        <p>Oduzimanje možemo proveriti sabiranjem:</p>
        <div className="example">
          <p>Ako je 543 - 217 = 326, onda mora biti 326 + 217 = 543 ✓</p>
        </div>

        <h2>Primena u svakodnevnom životu</h2>
        <ul>
          <li>💰 Kupovina: "Imam 500 dinara, kupujem nešto za 235 dinara. Koliko mi ostaje?"</li>
          <li>🎂 Rođendani: "Marko ima 12 godina, a Ana 8. Koliko godina je Marko stariji?"</li>
          <li>📏 Rastojanja: "Škola je udaljena 800m, prešao sam 350m. Koliko još treba?"</li>
          <li>🎮 Igrice: "Imao sam 450 poena, osvojio još 275. Sada imam koliko?"</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <h3 className="font-bold mb-2">💡 Saveti za brže računanje:</h3>
          <ul>
            <li>Pokušaj da zaokružiš brojeve: 298 + 156 ≈ 300 + 150 = 450</li>
            <li>Koristi "lakše" brojeve: 47 + 23 = (50 - 3) + 23 = 50 + 20 = 70</li>
            <li>Uvek proveri rezultat približnom procenom</li>
          </ul>
        </div>
      </div>

      <InteractiveExercise 
        questions={questions}
        title="Proveri svoje znanje - Sabiranje i oduzimanje"
      />

      <div className="mt-8 p-6 bg-green-50 rounded-lg border-2 border-green-500">
        <h3 className="text-xl font-bold mb-3 text-green-800">📝 Dodatne vežbe</h3>
        <p className="mb-3">Pokušaj da samostalno rešiš:</p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>1.234 + 5.678 = ?</li>
          <li>9.000 - 3.456 = ?</li>
          <li>U autobusu je bilo 47 putnika. Ušlo je još 28, a izašlo 15. Koliko je sada putnika?</li>
          <li>Proveri: Da li je 752 - 348 = 404?</li>
          <li>Zaokruži brojeve pa proceni: 3.987 + 2.012 ≈ ?</li>
        </ol>
      </div>
    </div>
  )
}
