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
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
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
      </main>
    </div>
  );
}
