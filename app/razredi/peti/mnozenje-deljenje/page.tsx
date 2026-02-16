'use client'

import InteractiveExercise from '@/components/InteractiveExercise'

export default function MnozenjeDeljenje() {
  const questions = [
    {
      question: 'Koliko je 7 × 8?',
      correctAnswer: '56',
      type: 'input' as const,
    },
    {
      question: 'Koliko je 144 ÷ 12?',
      correctAnswer: '12',
      type: 'input' as const,
    },
    {
      question: 'U kutiji je 6 redova sa po 8 keksa. Koliko je ukupno keksa?',
      correctAnswer: '48',
      options: ['42', '46', '48', '54'],
      type: 'multiple-choice' as const,
    },
    {
      question: '15 × 4 = ?',
      correctAnswer: '60',
      type: 'input' as const,
    },
    {
      question: '100 podeljeno sa 5 je:',
      correctAnswer: '20',
      options: ['15', '20', '25', '30'],
      type: 'multiple-choice' as const,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Množenje i deljenje</h1>
      
      <div className="lesson-content">
        <h2>Množenje prirodnih brojeva</h2>
        <p>
          Množenje je skraćeno sabiranje jednakih sabiraka. Umesto da saberemo isti broj više puta, 
          koristimo množenje. Brojeve koje množimo nazivamo <strong>činioci</strong>, 
          a rezultat nazivamo <strong>proizvod</strong>.
        </p>

        <div className="example">
          <h3>Primer:</h3>
          <p>Umesto: 5 + 5 + 5 + 5 = 20</p>
          <p>Pišemo: 4 × 5 = 20</p>
          <p className="mt-2 text-sm text-gray-600">(čitamo: "četiri puta pet jednako dvadeset")</p>
        </div>

        <h3>Tablica množenja (mali tablički)</h3>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg my-6">
          <div className="grid grid-cols-11 gap-1 text-center text-sm">
            <div className="font-bold bg-blue-200 p-2 rounded">×</div>
            {[1,2,3,4,5,6,7,8,9,10].map(n => (
              <div key={n} className="font-bold bg-blue-200 p-2 rounded">{n}</div>
            ))}
            
            {[1,2,3,4,5,6,7,8,9,10].map(row => (
              <>
                <div key={`row-${row}`} className="font-bold bg-blue-200 p-2 rounded">{row}</div>
                {[1,2,3,4,5,6,7,8,9,10].map(col => (
                  <div key={`${row}-${col}`} className="bg-white p-2 rounded hover:bg-yellow-100 transition">
                    {row * col}
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>

        <div className="important">
          <p><strong>Važno:</strong> Nauči tablicu množenja napamet! To će ti mnogo pomoći u svim daljim računanjima.</p>
        </div>

        <h3>Svojstva množenja</h3>
        <div className="grid md:grid-cols-3 gap-4 my-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">1. Komutativnost</h4>
            <p className="text-sm">Redosled nije bitan:</p>
            <p className="text-center text-lg mt-2">3 × 5 = 5 × 3</p>
            <p className="text-center">= 15</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">2. Asocijativnost</h4>
            <p className="text-sm">Grupisanje nije bitno:</p>
            <p className="text-center text-lg mt-2">(2 × 3) × 4</p>
            <p className="text-center">= 2 × (3 × 4)</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">3. Distributivnost</h4>
            <p className="text-sm">Raspodelimo:</p>
            <p className="text-center text-lg mt-2">3 × (4 + 5)</p>
            <p className="text-center">= 3×4 + 3×5</p>
          </div>
        </div>

        <h3>Množenje većih brojeva</h3>
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h3 className="text-center mb-4">Primer: 23 × 4</h3>
          <div className="font-mono text-2xl text-center space-y-2">
            <div className="flex justify-center gap-4">
              <span>2</span>
              <span>3</span>
            </div>
            <div className="flex justify-center gap-4">
              <span className="mr-4">×</span>
              <span></span>
              <span>4</span>
            </div>
            <div className="border-t-2 border-gray-400 w-32 mx-auto"></div>
            <div className="flex justify-center gap-4">
              <span>9</span>
              <span>2</span>
            </div>
          </div>
          <div className="mt-4 text-sm space-y-1">
            <p>1. Množimo jedinice: 3 × 4 = 12 (pišemo 2, pamtimo 1)</p>
            <p>2. Množimo desetice: 2 × 4 = 8, dodajemo 1 = 9</p>
            <p className="font-bold text-green-600">Rezultat: 92</p>
          </div>
        </div>

        <h2>Deljenje prirodnih brojeva</h2>
        <p>
          Deljenje je suprotna operacija od množenja. Delimo nešto na jednake delove. 
          Broj koji delimo nazivamo <strong>deljenik</strong>, broj kojim delimo je <strong>delilac</strong>, 
          a rezultat je <strong>količnik</strong>.
        </p>

        <div className="example">
          <h3>Primer:</h3>
          <p className="text-2xl text-center my-4">
            20 ÷ 4 = 5
          </p>
          <p className="text-center">
            <span className="text-blue-600">20</span> je deljenik<br/>
            <span className="text-blue-600">4</span> je delilac<br/>
            <span className="text-green-600">5</span> je količnik
          </p>
          <p className="mt-4 text-center text-sm">To znači: "20 podeljeno na 4 jednaka dela daje 5"</p>
        </div>

        <h3>Deljenje bez ostatka</h3>
        <p>Kada broj može da se podeli tačno, kažemo da je deljenje <strong>bez ostatka</strong>.</p>
        
        <div className="bg-green-50 p-4 rounded-lg my-4">
          <h4 className="font-bold mb-2">Primeri deljenja bez ostatka:</h4>
          <ul>
            <li>24 ÷ 6 = 4 (provera: 4 × 6 = 24 ✓)</li>
            <li>35 ÷ 7 = 5 (provera: 5 × 7 = 35 ✓)</li>
            <li>100 ÷ 10 = 10 (provera: 10 × 10 = 100 ✓)</li>
          </ul>
        </div>

        <h3>Deljenje sa ostatkom</h3>
        <p>Kada broj ne može da se podeli tačno, ostaje <strong>ostatak</strong>.</p>
        
        <div className="bg-yellow-50 p-4 rounded-lg my-4">
          <h4 className="font-bold mb-2">Primeri deljenja sa ostatkom:</h4>
          <ul>
            <li>17 ÷ 5 = 3 (ostatak 2) jer 5×3 = 15, i ostaje 17-15 = 2</li>
            <li>23 ÷ 4 = 5 (ostatak 3) jer 4×5 = 20, i ostaje 23-20 = 3</li>
            <li>50 ÷ 7 = 7 (ostatak 1) jer 7×7 = 49, i ostaje 50-49 = 1</li>
          </ul>
        </div>

        <div className="important">
          <p><strong>Pravilo:</strong> Ostatak mora uvek biti manji od delioca!</p>
        </div>

        <h3>Provera deljenja</h3>
        <p>Deljenje proveravamo formulom:</p>
        <div className="bg-blue-100 p-4 rounded-lg text-center text-xl my-4">
          Deljenik = Količnik × Delilac + Ostatak
        </div>

        <div className="example">
          <p>Provera za 17 ÷ 5 = 3 (ostatak 2):</p>
          <p>17 = 3 × 5 + 2</p>
          <p>17 = 15 + 2</p>
          <p>17 = 17 ✓ Tačno!</p>
        </div>

        <h2>Primena u svakodnevnom životu</h2>
        <ul>
          <li>🍕 <strong>Množenje:</strong> "U 5 kutija je po 8 pica. Koliko je ukupno?" → 5 × 8 = 40 pica</li>
          <li>🍫 <strong>Deljenje:</strong> "24 čokolade treba podeliti na 6 dece. Koliko svako dobija?" → 24 ÷ 6 = 4</li>
          <li>💰 <strong>Množenje:</strong> "Sveska košta 50 din. Koliko koštaju 7 sveski?" → 7 × 50 = 350 din</li>
          <li>🚗 <strong>Deljenje:</strong> "Prešli smo 360 km za 4 sata. Koliko km po satu?" → 360 ÷ 4 = 90 km/h</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <h3 className="font-bold mb-2">💡 Trikovi za brže računanje:</h3>
          <ul>
            <li><strong>Množenje sa 10:</strong> Dodaj 0 na kraju (25 × 10 = 250)</li>
            <li><strong>Množenje sa 5:</strong> Podeli sa 2 pa množi sa 10 (16 × 5 = 8 × 10 = 80)</li>
            <li><strong>Deljenje sa 10:</strong> Ukloni 0 sa kraja (240 ÷ 10 = 24)</li>
            <li><strong>Deljenje sa 5:</strong> Podeli sa 10 pa množi sa 2 (80 ÷ 5 = 8 × 2 = 16)</li>
          </ul>
        </div>
      </div>

      <InteractiveExercise 
        questions={questions}
        title="Proveri svoje znanje - Množenje i deljenje"
      />

      <div className="mt-8 p-6 bg-green-50 rounded-lg border-2 border-green-500">
        <h3 className="text-xl font-bold mb-3 text-green-800">📝 Dodatne vežbe</h3>
        <p className="mb-3">Pokušaj da samostalno rešiš:</p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Napiši sve proizvode tablice množenja za broj 7</li>
          <li>25 × 12 = ?</li>
          <li>144 ÷ 12 = ?</li>
          <li>Podeli 47 sa 6. Koliki je količnik i ostatak?</li>
          <li>Proveri: Da li je 8 × 9 = 9 × 8?</li>
          <li>U školi ima 8 razreda sa po 24 učenika. Koliko je ukupno učenika?</li>
        </ol>
      </div>
    </div>
  )
}
