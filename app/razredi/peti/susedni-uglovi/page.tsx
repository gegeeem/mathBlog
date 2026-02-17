"use client";

import Math from "@/components/Math";
import InteractiveExercise from "@/components/InteractiveExercise";
import "./susedni.css";

export default function SusedniUglovi() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">
        Sabiranje i oduzimanje
      </h1>

      <div className="lesson-content">
        <h1>📐 Susedni uglovi</h1>
        <p>Sabiranje i oduzimanje uglova — 5. razred</p>
        <p>
          U ovoj lekciji naučićemo šta su susedni uglovi i kako se sabiraju i
          oduzimaju.
        </p>
      </div>
      <div className="lesson-content">
        <iframe
          scrolling="no"
          title="Graph the Line"
          src="https://www.geogebra.org/material/iframe/id/bkj45nvs/width/631/height/400/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false"
          width="631"
          height="400"
        >
          {" "}
        </iframe>
      </div>
    </div>
  );
}
