import Link from 'next/link'

export default function PetiRazred() {
  const lekcije = [
    {
      slug: 'susedni-uglovi',
      naslov: 'Susedni uglovi',
      opis: 'zbir i razlika susednih uglova, prav ugao, pravi ugao, pun ugao',
    },
    {
      slug: 'prirodni-brojevi',
      naslov: 'Prirodni brojevi',
      opis: 'Šta su prirodni brojevi, pisanje i čitanje velikih brojeva',
    },
    {
      slug: 'sabiranje-oduzimanje',
      naslov: 'Sabiranje i oduzimanje',
      opis: 'Računske operacije sa prirodnim brojevima',
    },
    {
      slug: 'mnozenje-deljenje',
      naslov: 'Množenje i deljenje',
      opis: 'Tablica množenja, deljenje sa i bez ostatka',
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-blue-700">5. razred</h1>
      <p className="text-xl mb-8 text-gray-600">
        Osnove matematike: prirodni brojevi i osnovne računske operacije
      </p>

      <div className="grid gap-4">
        {lekcije.map((lekcija) => (
          <Link
            key={lekcija.slug}
            href={`/razredi/peti/${lekcija.slug}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">
              {lekcija.naslov}
            </h2>
            <p className="text-gray-600">{lekcija.opis}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
