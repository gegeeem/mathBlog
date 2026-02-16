'use client'

import Math from '@/components/Math'
import InteractiveExercise from '@/components/InteractiveExercise'

export default function PrirodniBrojevi() {
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
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Prirodni brojevi</h1>
      
      <div className="lesson-content">
        <h2>Šta su prirodni brojevi?</h2>
        <p>
          Prirodni brojevi su brojevi koje koristimo za brojanje: 1, 2, 3, 4, 5... 
          Oni počinju od broja 1 i nastavljaju se beskonačno.
        </p>

        <div className="example">
          <h3>Primeri prirodnih brojeva:</h3>
          <ul>
            <li>1, 2, 3, 4, 5 - mali prirodni brojevi</li>
            <li>10, 20, 100, 1.000 - veći prirodni brojevi</li>
            <li>1.234.567 - milion dvesta trideset četiri hiljade petsto šezdeset sedam</li>
          </ul>
        </div>

        <div className="important">
          <p><strong>Važno:</strong> Broj 0 NIJE prirodan broj! Prirodni brojevi počinju od 1.</p>
        </div>

        <h2>Pisanje i čitanje prirodnih brojeva</h2>
        <p>
          Prirodne brojeve pišemo ciframa: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. 
          Svaka cifra u broju ima svoju vrednost koja zavisi od njenog položaja.
        </p>

        <h3>Poziciona vrednost cifara</h3>
        <p>U broju 3.456:</p>
        <ul>
          <li>Cifra 6 je na mestu jedinica (vrednost 6)</li>
          <li>Cifra 5 je na mestu desetica (vrednost 50)</li>
          <li>Cifra 4 je na mestu stotica (vrednost 400)</li>
          <li>Cifra 3 je na mestu hiljada (vrednost 3.000)</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h3 className="text-center mb-4">Vizuelizacija broja 3.456</h3>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-blue-200 p-4 rounded">
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm mt-2">Hiljade</div>
              <div className="text-xs text-gray-600">3.000</div>
            </div>
            <div className="bg-blue-200 p-4 rounded">
              <div className="text-3xl font-bold">4</div>
              <div className="text-sm mt-2">Stotice</div>
              <div className="text-xs text-gray-600">400</div>
            </div>
            <div className="bg-blue-200 p-4 rounded">
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm mt-2">Desetice</div>
              <div className="text-xs text-gray-600">50</div>
            </div>
            <div className="bg-blue-200 p-4 rounded">
              <div className="text-3xl font-bold">6</div>
              <div className="text-sm mt-2">Jedinice</div>
              <div className="text-xs text-gray-600">6</div>
            </div>
          </div>
        </div>

        <h2>Upoređivanje prirodnih brojeva</h2>
        <p>
          Da bismo uporedili dva prirodna broja, prvo gledamo koji ima više cifara. 
          Ako imaju isti broj cifara, poredimo ih cifru po cifru s leva na desno.
        </p>

        <div className="example">
          <h3>Primer 1:</h3>
          <p>Uporedi brojeve 457 i 89.</p>
          <p><strong>Rešenje:</strong> Broj 457 ima 3 cifre, a broj 89 ima 2 cifre. Dakle, 457 {'>'} 89.</p>
          
          <h3>Primer 2:</h3>
          <p>Uporedi brojeve 1.234 i 1.243.</p>
          <p><strong>Rešenje:</strong> Oba broja imaju 4 cifre. Prve dve cifre su iste (1 i 2). 
          Treća cifra: 3 {'<'} 4, dakle 1.234 {'<'} 1.243.</p>
        </div>

        <h2>Zaokruživanje prirodnih brojeva</h2>
        <p>
          Zaokruživanje koristimo kada nam nije potrebna potpuna tačnost. 
          Brojeve možemo zaokružiti na desetice, stotice, hiljade, itd.
        </p>

        <div className="example">
          <h3>Pravilo zaokruživanja:</h3>
          <ul>
            <li>Ako je cifra manja od 5 → zaokružujemo NA DOLE</li>
            <li>Ako je cifra 5 ili veća → zaokružujemo NA GORE</li>
          </ul>
          
          <h3>Primeri:</h3>
          <p>Zaokruži broj 347 na desetice:</p>
          <p>Gledamo cifru na mestu jedinica: 7 ≥ 5 → zaokružujemo na gore</p>
          <p><strong>Rezultat:</strong> 347 ≈ 350</p>
          
          <p className="mt-4">Zaokruži broj 832 na stotice:</p>
          <p>Gledamo cifru na mestu desetica: 3 {'<'} 5 → zaokružujemo na dole</p>
          <p><strong>Rezultat:</strong> 832 ≈ 800</p>
        </div>

        <h2>Primena u svakodnevnom životu</h2>
        <p>
          Prirodne brojeve koristimo svakodnevno:
        </p>
        <ul>
          <li>🏫 Brojanje učenika u razredu</li>
          <li>💰 Novac (cene proizvoda)</li>
          <li>📅 Brojevi u kalendaru</li>
          <li>🏃 Brojanje koraka, bodova u igri</li>
          <li>📚 Brojevi strana u knjizi</li>
        </ul>
      </div>

      <InteractiveExercise 
        questions={questions}
        title="Proveri svoje znanje - Prirodni brojevi"
      />

      <div className="mt-8 p-6 bg-green-50 rounded-lg border-2 border-green-500">
        <h3 className="text-xl font-bold mb-3 text-green-800">📝 Dodatne vežbe</h3>
        <p className="mb-3">Pokušaj da samostalno rešiš sledeće zadatke:</p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Napiši sve prirodne brojeve između 97 i 105.</li>
          <li>Zaokruži broj 6.847 na hiljade.</li>
          <li>Koji broj je veći: 9.999 ili 10.001?</li>
          <li>Napiši broj "deset hiljada petsto dvadeset tri" ciframa.</li>
          <li>Koja je poziciona vrednost cifre 7 u broju 17.342?</li>
        </ol>
      </div>
    </div>
  )
}
