'use client'

import InteractiveExercise from '@/components/InteractiveExercise'

export default function Razlomci() {
  const questions = [
    {
      question: 'Koji deo torte je pojedeno ako je od 8 jednakih delova pojedeno 3?',
      correctAnswer: '3/8',
      options: ['3/8', '8/3', '3/5', '5/8'],
      type: 'multiple-choice' as const,
    },
    {
      question: 'Skrati razlomak 12/16 (napiši kao a/b)',
      correctAnswer: '3/4',
      type: 'input' as const,
    },
    {
      question: 'Koji razlomak je veći: 2/3 ili 3/4?',
      correctAnswer: '3/4',
      options: ['2/3', '3/4', 'Jednaki su', 'Ne mogu se porediti'],
      type: 'multiple-choice' as const,
    },
    {
      question: 'Proširi razlomak 2/5 brojem 3 (napiši kao a/b)',
      correctAnswer: '6/15',
      type: 'input' as const,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-700">Razlomci</h1>
      
      <div className="lesson-content">
        <h2>Šta su razlomci?</h2>
        <p>
          Razlomak je broj koji predstavlja deo neke celine. Sastoji se od dva dela:
        </p>
        
        <div className="bg-green-50 p-6 rounded-lg my-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-green-700 mb-4">
              <span className="border-b-4 border-green-700 pb-2">3</span>
              <div className="my-2"></div>
              <span>4</span>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-lg">Brojilac (3)</p>
                <p className="text-sm">Koliko delova uzimamo</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-lg">Imenilac (4)</p>
                <p className="text-sm">Na koliko delova je celina podeljena</p>
              </div>
            </div>
          </div>
        </div>

        <div className="example">
          <h3>Primer iz života:</h3>
          <p>Pizza je podeljena na 8 jednakih delova. Pojeo si 3 dela.</p>
          <p>To znači da si pojeo <strong>3/8</strong> (tri osmina) pizze.</p>
          
          <div className="grid grid-cols-8 gap-1 my-4">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div 
                key={i} 
                className={`h-16 rounded ${i <= 3 ? 'bg-red-400' : 'bg-yellow-400'} border-2 border-gray-600`}
              >
                <div className="text-center text-white font-bold mt-4">
                  {i <= 3 ? '✗' : '○'}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600">
            Crveno = pojedeno (3 dela), Žuto = ostalo (5 delova)
          </p>
        </div>

        <h2>Vrste razlomaka</h2>
        <div className="grid md:grid-cols-3 gap-4 my-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Pravi razlomak</h4>
            <p className="text-sm mb-2">Brojilac {'<'} Imenilac</p>
            <p className="text-2xl text-center">3/4</p>
            <p className="text-sm text-center mt-2">(manji od 1)</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Nepravi razlomak</h4>
            <p className="text-sm mb-2">Brojilac ≥ Imenilac</p>
            <p className="text-2xl text-center">7/4</p>
            <p className="text-sm text-center mt-2">(veći ili jednak 1)</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Mešovit broj</h4>
            <p className="text-sm mb-2">Ceo broj + razlomak</p>
            <p className="text-2xl text-center">1¾</p>
            <p className="text-sm text-center mt-2">(= 7/4)</p>
          </div>
        </div>

        <h2>Skraćivanje razlomaka</h2>
        <p>
          Razlomak skraćujemo tako što brojilac i imenilac podelimo istim brojem (njihovim zajedničkim deliocem).
          Razlomak je <strong>nesvodljiv</strong> kada brojilac i imenilac nemaju zajedničkih delilaca osim 1.
        </p>

        <div className="example">
          <h3>Primer: Skrati razlomak 12/16</h3>
          <div className="bg-white p-4 border-2 border-green-500 rounded-lg my-4">
            <p>1. Tražimo najveći zajednički delilac (NZD) brojeva 12 i 16</p>
            <p className="ml-4">Delioci broja 12: 1, 2, 3, 4, 6, 12</p>
            <p className="ml-4">Delioci broja 16: 1, 2, 4, 8, 16</p>
            <p className="ml-4 font-bold">NZD(12, 16) = 4</p>
            
            <p className="mt-4">2. Delimo brojilac i imenilac sa 4:</p>
            <p className="text-center text-2xl my-3">
              12 ÷ 4 = 3<br/>
              16 ÷ 4 = 4
            </p>
            
            <p className="text-center text-xl font-bold text-green-700">
              12/16 = 3/4 ✓
            </p>
          </div>
        </div>

        <h2>Proširivanje razlomaka</h2>
        <p>
          Razlomak proširujemo tako što brojilac i imenilac pomnožimo istim brojem. 
          Vrednost razlomka se ne menja!
        </p>

        <div className="example">
          <h3>Primer: Proširi razlomak 2/3 brojem 5</h3>
          <div className="bg-white p-4 border-2 border-blue-500 rounded-lg my-4">
            <p className="text-center text-2xl my-3">
              2 × 5 = 10<br/>
              3 × 5 = 15
            </p>
            
            <p className="text-center text-xl font-bold text-blue-700">
              2/3 = 10/15 ✓
            </p>
          </div>
        </div>

        <div className="important">
          <p><strong>Važno:</strong> Skraćivanje i proširivanje ne menjaju vrednost razlomka, već samo njegov oblik!</p>
          <p className="mt-2">2/3 = 4/6 = 6/9 = 8/12 = 10/15 (svi imaju istu vrednost!)</p>
        </div>

        <h2>Upoređivanje razlomaka</h2>
        <p>Da bismo uporedili razlomke, moramo ih svesti na zajednički imenilac.</p>

        <div className="example">
          <h3>Primer: Koji razlomak je veći: 2/3 ili 3/4?</h3>
          <div className="bg-white p-4 border-2 border-purple-500 rounded-lg my-4">
            <p>1. Tražimo zajednički imenilac (najmanji zajednički sadržalac - NZS)</p>
            <p className="ml-4">NZS(3, 4) = 12</p>
            
            <p className="mt-3">2. Proširujemo oba razlomka na imenilac 12:</p>
            <p className="ml-4">2/3 = 8/12 (proširili sa 4)</p>
            <p className="ml-4">3/4 = 9/12 (proširili sa 3)</p>
            
            <p className="mt-3">3. Upoređujemo:</p>
            <p className="text-center text-xl font-bold text-purple-700">
              8/12 {'<'} 9/12, dakle 2/3 {'<'} 3/4 ✓
            </p>
          </div>
        </div>

        <h2>Primena u svakodnevnom životu</h2>
        <ul>
          <li>🍕 Deljenje pizze, torte ili bilo čega na delove</li>
          <li>⏰ Vreme: "pola sata" = 1/2 sata = 30 minuta</li>
          <li>💰 Novac: "četvrtina cene" = 1/4 cene</li>
          <li>📊 Procenat uspešnosti (npr. 3 od 4 tačna = 3/4 = 75%)</li>
          <li>🍰 Recepti: "2/3 šolje brašna"</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <h3 className="font-bold mb-2">💡 Saveti:</h3>
          <ul>
            <li>Uvek skrati razlomak do kraja (dok ne postane nesvodljiv)</li>
            <li>Za upoređivanje, svedi na zajednički imenilac</li>
            <li>Zapamti: 1/2 = 2/4 = 3/6 = 4/8 = 5/10</li>
            <li>Razlomak možeš proveriti deljenjem: 3/4 = 3 ÷ 4 = 0,75</li>
          </ul>
        </div>
      </div>

      <InteractiveExercise 
        questions={questions}
        title="Proveri svoje znanje - Razlomci"
      />

      <div className="mt-8 p-6 bg-green-50 rounded-lg border-2 border-green-500">
        <h3 className="text-xl font-bold mb-3 text-green-800">📝 Dodatne vežbe</h3>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Skrati razlomke: 18/24, 20/30, 15/45</li>
          <li>Proširi razlomak 3/7 brojem 4</li>
          <li>Uporedi: 5/6 i 7/8 (koji je veći?)</li>
          <li>Pretvori nepravi razlomak 11/4 u mešovit broj</li>
          <li>Koja je polovina od 3/4?</li>
        </ol>
      </div>
    </div>
  )
}
