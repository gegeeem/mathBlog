import Link from 'next/link'

export default function OsmiRazred() {
  const lekcije = [
    {
      slug: 'kvadratni-koreni',
      naslov: 'Kvadratni koreni',
      opis: 'Računanje i svojstva kvadratnih korena',
    },
    {
      slug: 'kvadratne-jednacine',
      naslov: 'Kvadratne jednačine',
      opis: 'Rešavanje kvadratnih jednačina',
    },
    {
      slug: 'pitagorina-teorema',
      naslov: 'Pitagorina teorema',
      opis: 'Primena Pitagorine teoreme u geometriji',
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-orange-700">8. razred</h1>
      <p className="text-xl mb-8 text-gray-600">
        Kvadratni koreni, jednačine i geometrija
      </p>

      <div className="grid gap-4">
        {lekcije.map((lekcija) => (
          <Link
            key={lekcija.slug}
            href={`/razredi/osmi/${lekcija.slug}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500"
          >
            <h2 className="text-2xl font-semibold mb-2 text-orange-700">
              {lekcija.naslov}
            </h2>
            <p className="text-gray-600">{lekcija.opis}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
