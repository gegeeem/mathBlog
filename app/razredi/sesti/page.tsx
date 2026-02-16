import Link from 'next/link'

export default function SestiRazred() {
  const lekcije = [
    {
      slug: 'razlomci',
      naslov: 'Razlomci',
      opis: 'Obični razlomci, skraćivanje i proširivanje razlomaka',
    },
    {
      slug: 'decimalni-brojevi',
      naslov: 'Decimalni brojevi',
      opis: 'Pisanje, računanje i primena decimalnih brojeva',
    },
    {
      slug: 'proporcija',
      naslov: 'Proporcija i razmera',
      opis: 'Srazmera veličina i primena u zadacima',
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-green-700">6. razred</h1>
      <p className="text-xl mb-8 text-gray-600">
        Razlomci, decimalni brojevi i proporcionalnost
      </p>

      <div className="grid gap-4">
        {lekcije.map((lekcija) => (
          <Link
            key={lekcija.slug}
            href={`/razredi/sesti/${lekcija.slug}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500"
          >
            <h2 className="text-2xl font-semibold mb-2 text-green-700">
              {lekcija.naslov}
            </h2>
            <p className="text-gray-600">{lekcija.opis}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
