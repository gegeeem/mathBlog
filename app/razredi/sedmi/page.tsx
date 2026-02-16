import Link from 'next/link'

export default function SedmiRazred() {
  const lekcije = [
    {
      slug: 'negativni-brojevi',
      naslov: 'Negativni brojevi',
      opis: 'Celi brojevi, računanje sa negativnim brojevima',
    },
    {
      slug: 'algebarski-izrazi',
      naslov: 'Algebarski izrazi',
      opis: 'Promenljive, jednočlani i višečlani izrazi',
    },
    {
      slug: 'jednacine',
      naslov: 'Jednačine',
      opis: 'Rešavanje linearnih jednačina sa jednom nepoznatom',
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-purple-700">7. razred</h1>
      <p className="text-xl mb-8 text-gray-600">
        Negativni brojevi, algebra i jednačine
      </p>

      <div className="grid gap-4">
        {lekcije.map((lekcija) => (
          <Link
            key={lekcija.slug}
            href={`/razredi/sedmi/${lekcija.slug}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500"
          >
            <h2 className="text-2xl font-semibold mb-2 text-purple-700">
              {lekcija.naslov}
            </h2>
            <p className="text-gray-600">{lekcija.opis}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
