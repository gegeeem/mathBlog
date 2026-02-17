import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const razredi = [
    {
      broj: 'peti',
      naziv: '5. razred',
      opis: 'Prirodni brojevi, četiri računske operacije, geometrijske figure',
      boja: 'bg-blue-500',
    },
    {
      broj: 'sesti',
      naziv: '6. razred',
      opis: 'Razlomci, decimalni brojevi, proporcija i razmera',
      boja: 'bg-green-500',
    },
    {
      broj: 'sedmi',
      naziv: '7. razred',
      opis: 'Negativni brojevi, algebarske operacije, jednačine',
      boja: 'bg-purple-500',
    },
    {
      broj: 'osmi',
      naziv: '8. razred',
      opis: 'Kvadratni koreni, linearne funkcije, geometrija',
      boja: 'bg-orange-500',
    },
  ]
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-blue-700">
          Matematika za osnovnu školu
        </h1>
        <p className="text-xl text-gray-600">
          Interaktivne lekcije sa primerima i vežbama
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {razredi.map((razred) => (
          <Link
            key={razred.broj}
            href={`/razredi/${razred.broj}`}
            className={`${razred.boja} text-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all`}
          >
            <h2 className="text-3xl font-bold mb-3">{razred.naziv}</h2>
            <p className="text-lg">{razred.opis}</p>
          </Link>
        ))}
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Zašto koristiti ovaj blog?
        </h2>
        <ul className="space-y-3 text-lg">
          <li className="flex items-start">
            <span className="text-2xl mr-3">✅</span>
            <span>Jasna i jednostavna objašnjenja matematičkih pojmova</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3">🎯</span>
            <span>Praktični primeri iz svakodnevnog života</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3">🎮</span>
            <span>Interaktivne vežbe za uvežbavanje gradiva</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3">📊</span>
            <span>Vizuelizacije koje pomažu u razumevanju</span>
          </li>
        </ul>
      </div>
    </div>
    
  );
}
