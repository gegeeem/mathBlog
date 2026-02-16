'use client'

import InteractiveExercise from '@/components/InteractiveExercise'

export default function PitagorinaTeorema() {
  const questions = [
    {
      question: 'Pravougli trougao ima katete 3 cm i 4 cm. Kolika je hipotenuza?',
      correctAnswer: '5',
      options: ['5 cm', '7 cm', '25 cm', '12 cm'],
      type: 'multiple-choice' as const,
    },
    {
      question: 'Hipotenuza je 13 cm, jedna kateta 5 cm. Kolika je druga kateta?',
      correctAnswer: '12',
      type: 'input' as const,
    },
    {
      question: 'Da li je trougao sa stranicama 6, 8, 10 pravougli?',
      correctAnswer: 'Da',
      options: ['Da', 'Ne', 'Ne može se odrediti'],
      type: 'multiple-choice' as const,
    },
    {
      question: 'Kolika je dijagonala kvadrata sa stranicom 5 cm? (zaokruži na 1 decimalu)',
      correctAnswer: '7.1',
      type: 'input' as const,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-orange-700">Pitagorina teorema</h1>
      
      <div className="lesson-content">
        <h2>Šta je Pitagorina teorema?</h2>
        <p>
          Pitagorina teorema je jedna od najpoznatijih teorema u matematici. 
          Opisuje odnos između stranica pravouglog trougla i koristi se u geometriji, 
          fizici, arhitekturi i mnogim drugim oblastima.
        </p>

        <div className="bg-orange-50 p-8 rounded-lg my-6">
          <h3 className="text-center text-2xl font-bold mb-6">Pitagorina teorema</h3>
          <div className="text-center text-3xl font-bold mb-4 text-orange-700">
            a² + b² = c²
          </div>
          <p className="text-center mb-4">gde su:</p>
          <ul className="text-center space-y-2">
            <li><strong>a</strong> i <strong>b</strong> - katete (stranice koje čine pravi ugao)</li>
            <li><strong>c</strong> - hipotenuza (najduža stranica, naspram pravog ugla)</li>
          </ul>
        </div>

        <h2>Delovi pravouglog trougla</h2>
        <div className="bg-white border-4 border-orange-500 p-8 rounded-lg my-6">
          <svg viewBox="0 0 400 300" className="w-full max-w-md mx-auto">
            
            <polygon points="50,250 50,50 350,250" fill="#fef3c7" stroke="#f97316" strokeWidth="4"/>
            
            
            <rect x="50" y="230" width="20" height="20" fill="none" stroke="#f97316" strokeWidth="2"/>
            
            
            <text x="20" y="150" fontSize="24" fill="#7c2d12" fontWeight="bold">a</text>
            <text x="200" y="270" fontSize="24" fill="#7c2d12" fontWeight="bold">b</text>
            <text x="220" y="130" fontSize="24" fill="#dc2626" fontWeight="bold">c</text>
            
            
            <circle cx="50" cy="250" r="5" fill="#f97316"/>
            <circle cx="50" cy="50" r="5" fill="#f97316"/>
            <circle cx="350" cy="250" r="5" fill="#f97316"/>
            
            
            <text x="30" y="270" fontSize="20" fill="#7c2d12">A</text>
            <text x="30" y="40" fontSize="20" fill="#7c2d12">B</text>
            <text x="360" y="270" fontSize="20" fill="#7c2d12">C</text>
            

            <text x="190" y="165" fontSize="16" fill="#dc2626">(hipotenuza)</text>
          </svg>
          <p className="text-center mt-4 text-sm text-gray-600">
            Pravi ugao je kod tačke A. Stranice a i b su katete, c je hipotenuza.
          </p>
        </div>

        <h2>Kako koristimo Pitagorinu teoremu?</h2>
        
        <h3>1. Računanje hipotenuze (c)</h3>
        <p>Kada znamo obe katete, možemo naći hipotenuzu:</p>
        
        <div className="example">
          <h3>Primer: Katete su a = 3 cm i b = 4 cm. Kolika je hipotenuza?</h3>
          <div className="bg-white p-6 border-2 border-blue-500 rounded-lg my-4">
            <p className="font-bold mb-3">Rešenje:</p>
            <div className="space-y-2">
              <p>1. Koristimo formulu: c² = a² + b²</p>
              <p>2. Uvrštavamo: c² = 3² + 4²</p>
              <p>3. Računamo: c² = 9 + 16 = 25</p>
              <p>4. Izvlačimo koren: c = √25 = 5</p>
              <p className="font-bold text-blue-700 text-xl mt-4">Hipotenuza je 5 cm ✓</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded mt-4">
            <p className="font-bold">Provera:</p>
            <p>3² + 4² = 9 + 16 = 25</p>
            <p>5² = 25</p>
            <p>25 = 25 ✓ Tačno!</p>
          </div>
        </div>

        <h3>2. Računanje katete (a ili b)</h3>
        <p>Kada znamo hipotenuzu i jednu katetu, možemo naći drugu katetu:</p>
        
        <div className="example">
          <h3>Primer: Hipotenuza je c = 13 cm, kateta a = 5 cm. Kolika je kateta b?</h3>
          <div className="bg-white p-6 border-2 border-green-500 rounded-lg my-4">
            <p className="font-bold mb-3">Rešenje:</p>
            <div className="space-y-2">
              <p>1. Formula: a² + b² = c²</p>
              <p>2. Rešavamo za b²: b² = c² - a²</p>
              <p>3. Uvrštavamo: b² = 13² - 5²</p>
              <p>4. Računamo: b² = 169 - 25 = 144</p>
              <p>5. Izvlačimo koren: b = √144 = 12</p>
              <p className="font-bold text-green-700 text-xl mt-4">Kateta b je 12 cm ✓</p>
            </div>
          </div>
        </div>

        <h2>Pitagorine trojke</h2>
        <p>
          Pitagorine trojke su skupovi od tri prirodna broja koji zadovoljavaju Pitagorinu teoremu. 
          Ove brojeve je korisno zapamtiti jer često dolaze u zadacima!
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold mb-2 text-purple-700">3, 4, 5</p>
            <p className="text-sm">3² + 4² = 5²</p>
            <p className="text-sm">9 + 16 = 25 ✓</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold mb-2 text-purple-700">5, 12, 13</p>
            <p className="text-sm">5² + 12² = 13²</p>
            <p className="text-sm">25 + 144 = 169 ✓</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold mb-2 text-purple-700">8, 15, 17</p>
            <p className="text-sm">8² + 15² = 17²</p>
            <p className="text-sm">64 + 225 = 289 ✓</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold mb-2 text-purple-700">7, 24, 25</p>
            <p className="text-sm">7² + 24² = 25²</p>
            <p className="text-sm">49 + 576 = 625 ✓</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold mb-2 text-purple-700">6, 8, 10</p>
            <p className="text-sm">2 × (3, 4, 5)</p>
            <p className="text-sm">36 + 64 = 100 ✓</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold mb-2 text-purple-700">9, 12, 15</p>
            <p className="text-sm">3 × (3, 4, 5)</p>
            <p className="text-sm">81 + 144 = 225 ✓</p>
          </div>
        </div>

        <div className="important">
          <p><strong>Napomena:</strong> Ako je (a, b, c) Pitagorina trojka, onda je i (ka, kb, kc) Pitagorina trojka za bilo koji prirodan broj k!</p>
        </div>

        <h2>Primena u praksi</h2>
        
        <div className="example">
          <h3>1. Dijagonala pravougaonika</h3>
          <p>Pravougaonik ima stranice 6 cm i 8 cm. Kolika je njegova dijagonala?</p>
          <div className="bg-white p-4 border-2 rounded my-3">
            <p>d² = 6² + 8² = 36 + 64 = 100</p>
            <p>d = √100 = 10 cm</p>
          </div>

          <h3>2. Visina merdevina</h3>
          <p>Merdevi ne dužine 5 m stoje 3 m od zida. Koliko visoko dosežu?</p>
          <div className="bg-white p-4 border-2 rounded my-3">
            <p>h² + 3² = 5²</p>
            <p>h² = 25 - 9 = 16</p>
            <p>h = √16 = 4 m</p>
          </div>

          <h3>3. Dijagonala kvadrata</h3>
          <p>Kvadrat ima stranicu 7 cm. Kolika je dijagonala?</p>
          <div className="bg-white p-4 border-2 rounded my-3">
            <p>d² = 7² + 7² = 49 + 49 = 98</p>
            <p>d = √98 ≈ 9.9 cm</p>
          </div>
        </div>

        <h2>Provera da li je trougao pravougli</h2>
        <p>Ako za stranice trougla a, b, c (gde je c najduža) važi a² + b² = c², onda je trougao pravougli.</p>

        <div className="example">
          <h3>Primer: Da li je trougao sa stranicama 6, 8, 10 pravougli?</h3>
          <div className="bg-white p-4 border-2 rounded my-3">
            <p>Proveravamo: 6² + 8² = 10²</p>
            <p>36 + 64 = 100</p>
            <p>100 = 100 ✓</p>
            <p className="font-bold text-green-700 mt-2">DA, trougao je pravougli!</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <h3 className="font-bold mb-2">💡 Saveti:</h3>
          <ul>
            <li>Uvek označi šta tražiš (a, b ili c)</li>
            <li>Hipotenuza je UVEK najduža stranica</li>
            <li>Proveri rezultat tako što uvrsti š nazad u formulu</li>
            <li>Zapamti osnovne Pitagorine trojke (3-4-5, 5-12-13)</li>
            <li>Koristi kalkulator za kvadratne korene ako broj nije pun kvadrat</li>
          </ul>
        </div>
      </div>

      <InteractiveExercise 
        questions={questions}
        title="Proveri svoje znanje - Pitagorina teorema"
      />

      <div className="mt-8 p-6 bg-orange-50 rounded-lg border-2 border-orange-500">
        <h3 className="text-xl font-bold mb-3 text-orange-800">📝 Dodatne vežbe</h3>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Katete su 9 cm i 12 cm. Kolika je hipotenuza?</li>
          <li>Hipotenuza je 25 cm, jedna kateta 7 cm. Kolika je druga?</li>
          <li>Da li je trougao sa stranicama 5, 6, 7 pravougli?</li>
          <li>Kolika je dijagonala pravougaonika dimenzija 15 × 20 cm?</li>
          <li>Kvadrat ima dijagonalu 10 cm. Kolika mu je stranica?</li>
        </ol>
      </div>
    </div>
  )
}
