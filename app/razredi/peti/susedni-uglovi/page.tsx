'use client'

import Math from '@/components/Math'
import InteractiveExercise from '@/components/InteractiveExercise'
import './susedni.css'

export default function SusedniUglovi() {
  

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Sabiranje i oduzimanje</h1>
      
      <div className="lesson-content">
         <h1>📐 Susedni uglovi</h1>
        <p>Sabiranje i oduzimanje uglova — 5. razred</p>
  <p>U ovoj lekciji naučićemo šta su susedni uglovi i kako se sabiraju i oduzimaju.</p>
      </div>
      <div className="exercise">
        <iframe src="https://www.geogebra.org/classic/khnjksjp?embed" width={800} height={600} allowFullScreen style={{ border: "1px solid #e4e4e4", borderRadius: "4px" }} frameBorder={0}></iframe>
      </div>
      </div>
    )
}
