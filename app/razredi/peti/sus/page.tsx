'use client';
import './style.css';
import { useState, useRef, useEffect } from 'react';
export default function SuplementniKomplementniUglovi() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [results, setResults] = useState<{ [key: string]: boolean | null }>({});
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [score, setScore] = useState(0);

  // Canvas refs
  const complementary1Ref = useRef<HTMLCanvasElement>(null);
  const complementary2Ref = useRef<HTMLCanvasElement>(null);
  const supplementary1Ref = useRef<HTMLCanvasElement>(null);
  const supplementary2Ref = useRef<HTMLCanvasElement>(null);
  const quiz1Ref = useRef<HTMLCanvasElement>(null);
  const quiz2Ref = useRef<HTMLCanvasElement>(null);
  const quiz3Ref = useRef<HTMLCanvasElement>(null);
  const quiz4Ref = useRef<HTMLCanvasElement>(null);
  const quiz5Ref = useRef<HTMLCanvasElement>(null);

  // Helper function to set canvas size
  const setCanvasSize = (canvas: HTMLCanvasElement) => {
    const container = canvas.parentElement;
    if (!container) return { width: 600, height: 400 };
    
    const width = container.offsetWidth;
    const height = Math.min(400, width * 0.6);
    
    canvas.width = width;
    canvas.height = height;
    
    return { width, height };
  };

  // Drawing functions
  const drawComplementary1 = () => {
    const canvas = complementary1Ref.current;
    if (!canvas) return;
    
    const { width, height } = setCanvasSize(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height * 0.75;
    const radius = Math.min(width, height) * 0.35;
    
    // Prvi ugao (60°)
    ctx.beginPath();
    ctx.moveTo(centerY, centerY);
    ctx.arc(centerX, centerY, radius, 0, -(60* Math.PI)/180,true);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(102, 126, 234, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Drugi ugao (30°)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, -(60*Math.PI)/180,-(90* Math.PI)/180,true);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(118, 75, 162, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#764ba2';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Ose
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius * 1.2, centerY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - radius * 1.2);
    ctx.stroke();
    
    // Oznake uglova
    const fontSize = Math.max(16, width * 0.04);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = '#667eea';
    ctx.fillText('60°', centerX + radius * 0.5, centerY - radius * 0.2);
    
    ctx.fillStyle = '#764ba2';
    ctx.fillText('30°', centerX + radius * 0.08, centerY - radius * 0.65);
    
    // Pravi ugao oznaka
    const rectSize = Math.max(10, width * 0.02);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX, centerY - rectSize, rectSize, rectSize);
  };

  const drawComplementary2 = () => {
    const canvas = complementary2Ref.current;
    if (!canvas) return;
    
    const { width, height } = setCanvasSize(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height * 0.75;
    const radius = Math.min(width, height) * 0.35;
    
    // Prvi ugao (40°)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, (40 * Math.PI) / 180);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(76, 175, 80, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#4caf50';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Drugi ugao (50°)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, (40 * Math.PI) / 180, Math.PI / 2);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(255, 152, 0, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#ff9800';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Ose
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius * 1.2, centerY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - radius * 1.2);
    ctx.stroke();
    
    const fontSize = Math.max(16, width * 0.04);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = '#4caf50';
    ctx.fillText('40°', centerX + radius * 0.5, centerY - radius * 0.15);
    
    ctx.fillStyle = '#ff9800';
    ctx.fillText('50°', centerX + radius * 0.3, centerY - radius * 0.65);
    
    const rectSize = Math.max(10, width * 0.02);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX, centerY - rectSize, rectSize, rectSize);
  };

  const drawSupplementary1 = () => {
    const canvas = supplementary1Ref.current;
    if (!canvas) return;
    
    const { width, height } = setCanvasSize(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height * 0.6;
    const radius = Math.min(width, height) * 0.35;
    
    // Osnovna linija (180°)
    ctx.beginPath();
    ctx.moveTo(centerX - radius * 1.2, centerY);
    ctx.lineTo(centerX + radius * 1.2, centerY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Prvi ugao (110°)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, (110 * Math.PI) / 180);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(233, 30, 99, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#e91e63';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Drugi ugao (70°)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, (110 * Math.PI) / 180, Math.PI);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(33, 150, 243, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#2196f3';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    const fontSize = Math.max(16, width * 0.04);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = '#e91e63';
    ctx.fillText('110°', centerX - radius * 0.3, centerY - radius * 0.4);
    
    ctx.fillStyle = '#2196f3';
    ctx.fillText('70°', centerX - radius * 0.75, centerY - radius * 0.2);
  };

  const drawSupplementary2 = () => {
    const canvas = supplementary2Ref.current;
    if (!canvas) return;
    
    const { width, height } = setCanvasSize(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height * 0.6;
    const radius = Math.min(width, height) * 0.35;
    
    // Osnovna linija
    ctx.beginPath();
    ctx.moveTo(centerX - radius * 1.2, centerY);
    ctx.lineTo(centerX + radius * 1.2, centerY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 135°
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, (135 * Math.PI) / 180);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(156, 39, 176, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#9c27b0';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // 45°
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, (135 * Math.PI) / 180, Math.PI);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(255, 193, 7, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#ffc107';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    const fontSize = Math.max(16, width * 0.04);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = '#9c27b0';
    ctx.fillText('135°', centerX - radius * 0.5, centerY - radius * 0.5);
    
    ctx.fillStyle = '#ffc107';
    ctx.fillText('45°', centerX - radius * 0.85, centerY - radius * 0.2);
  };

  const drawQuiz1 = () => {
    const canvas = quiz1Ref.current;
    if (!canvas) return;
    
    const { width, height } = setCanvasSize(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height * 0.7;
    const radius = Math.min(width, height) * 0.3;
    
    // 45°
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, Math.PI / 4);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(102, 126, 234, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // 45°
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, Math.PI / 4, Math.PI / 2);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(118, 75, 162, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#764ba2';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Ose
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius * 1.1, centerY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - radius * 1.1);
    ctx.stroke();
    
    const fontSize = Math.max(18, width * 0.045);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = '#667eea';
    ctx.fillText('45°', centerX + radius * 0.45, centerY - radius * 0.15);
    
    ctx.fillStyle = '#764ba2';
    ctx.fillText('45°', centerX + radius * 0.2, centerY - radius * 0.55);
    
    const rectSize = Math.max(10, width * 0.02);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX, centerY - rectSize, rectSize, rectSize);
  };

  const drawQuiz2 = () => {
    const canvas = quiz2Ref.current;
    if (!canvas) return;
    
    const { width, height } = setCanvasSize(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height * 0.6;
    const radius = Math.min(width, height) * 0.3;
    
    ctx.beginPath();
    ctx.moveTo(centerX - radius * 1.1, centerY);
    ctx.lineTo(centerX + radius * 1.1, centerY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 130°
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, (130 * Math.PI) / 180);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(233, 30, 99, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#e91e63';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // ?
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, (130 * Math.PI) / 180, Math.PI);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(200, 200, 200, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    const fontSize = Math.max(18, width * 0.045);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = '#e91e63';
    ctx.fillText('130°', centerX - radius * 0.4, centerY - radius * 0.4);
    
    ctx.fillStyle = '#666';
    ctx.fillText('?', centerX - radius * 0.75, centerY - radius * 0.15);
  };

  const drawQuiz3 = () => {
    const canvas = quiz3Ref.current;
    if (!canvas) return;
    
    const { width, height } = setCanvasSize(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height * 0.7;
    const radius = Math.min(width, height) * 0.3;
    
    // 35°
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, (35 * Math.PI) / 180);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(76, 175, 80, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#4caf50';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // ?
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, (35 * Math.PI) / 180, Math.PI / 2);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(200, 200, 200, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Ose
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius * 1.1, centerY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - radius * 1.1);
    ctx.stroke();
    
    const fontSize = Math.max(18, width * 0.045);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = '#4caf50';
    ctx.fillText('35°', centerX + radius * 0.45, centerY - radius * 0.1);
    
    ctx.fillStyle = '#666';
    ctx.fillText('?', centerX + radius * 0.25, centerY - radius * 0.6);
    
    const rectSize = Math.max(10, width * 0.02);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX, centerY - rectSize, rectSize, rectSize);
  };

  const drawQuiz4 = () => {
    const canvas = quiz4Ref.current;
    if (!canvas) return;
    
    const { width, height } = setCanvasSize(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height * 0.6;
    const radius = Math.min(width, height) * 0.3;
    
    ctx.beginPath();
    ctx.moveTo(centerX - radius * 1.1, centerY);
    ctx.lineTo(centerX + radius * 1.1, centerY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 120°
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, (120 * Math.PI) / 180);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(156, 39, 176, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#9c27b0';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // 60°
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, (120 * Math.PI) / 180, Math.PI);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(255, 193, 7, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#ffc107';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    const fontSize = Math.max(18, width * 0.045);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = '#9c27b0';
    ctx.fillText('120°', centerX - radius * 0.4, centerY - radius * 0.4);
    
    ctx.fillStyle = '#ffc107';
    ctx.fillText('60°', centerX - radius * 0.8, centerY - radius * 0.2);
  };

  const drawQuiz5 = () => {
    const canvas = quiz5Ref.current;
    if (!canvas) return;
    
    const { width, height } = setCanvasSize(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height * 0.7;
    const radius = Math.min(width, height) * 0.3;
    
    // Prvi ugao
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, Math.PI / 3);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(102, 126, 234, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Drugi ugao
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, Math.PI / 3, Math.PI / 2);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgba(118, 75, 162, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#764ba2';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Ose
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius * 1.1, centerY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - radius * 1.1);
    ctx.stroke();
    
    const fontSize = Math.max(20, width * 0.05);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.fillText('? + ? = ?', centerX, centerY + radius * 0.7);
    
    const rectSize = Math.max(10, width * 0.02);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX, centerY - rectSize, rectSize, rectSize);
  };

  const drawAllDiagrams = () => {
    drawComplementary1();
    drawComplementary2();
    drawSupplementary1();
    drawSupplementary2();
    drawQuiz1();
    drawQuiz2();
    drawQuiz3();
    drawQuiz4();
    drawQuiz5();
  };

  useEffect(() => {
    drawAllDiagrams();

    const handleResize = () => {
      drawAllDiagrams();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAnswerChange = (question: string, value: string) => {
    setAnswers({ ...answers, [question]: value });
  };

  const checkAnswers = () => {
    const correctAnswers = {
      q1: 'b',
      q2: 'b',
      q3: 'b',
      q4: 'b',
      q5: 'a',
    };

    const newResults: { [key: string]: boolean } = {};
    let newScore = 0;

    Object.keys(correctAnswers).forEach((key) => {
      if (answers[key] === correctAnswers[key as keyof typeof correctAnswers]) {
        newResults[key] = true;
        newScore++;
      } else {
        newResults[key] = false;
      }
    });

    setResults(newResults);
    setScore(newScore);
    setShowFinalScore(true);

    setTimeout(() => {
      document.getElementById('finalScore')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const getResultMessage = (questionNum: number) => {
    const key = `q${questionNum}`;
    if (results[key] === true) {
      return '✓ Tačno! Odličan odgovor!';
    }
    if (results[key] === false) {
      const messages: { [key: string]: string } = {
        q1: 'Tačan odgovor: B) Komplementni uglovi (45° + 45° = 90°)',
        q2: 'Tačan odgovor: B) 50° (180° - 130° = 50°)',
        q3: 'Tačan odgovor: B) 55° (90° - 35° = 55°)',
        q4: 'Tačan odgovor: B) Suplementni uglovi (120° + 60° = 180°)',
        q5: 'Tačan odgovor: A) 90°',
      };
      return `✗ Netačno. ${messages[key]}`;
    }
    return null;
  };

  return (
    <div id='susedniUglovi' className=" min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] p-1 sm:p-1">
      <div className="max-w-full sm:max-w-[95%] lg:max-w-7xl mx-auto bg-white rounded-lg sm:rounded-xl p-1 sm:p-8 lg:p-10 shadow-2xl">
        
        {/* Naslov */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#667eea] mb-6 sm:mb-8 px-2 drop-shadow-md">
          🔺 Suplementni i Komplementni Uglovi 🔺
        </h1>

        {/* Uvod */}
        <section className="mb-8 sm:mb-10 p-4 sm:p-6 bg-[#f8f9ff] rounded-2xl border-2 border-[#e0e7ff]">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#764ba2] mb-4 border-l-4 border-[#667eea] pl-4">
            📚 Uvod
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Dragi učeniče, danas ćeš naučiti o dva specijalna para uglova koji se često pojavljuju u geometriji. 
            Ovi parovi uglova imaju zanimljive osobine koje ćeš moći da primenjuješ u rešavanju raznih zadataka!
          </p>
        </section>

        {/* Komplementni uglovi */}
        <section className="mb-8 sm:mb-10 p-1 sm:p-3 bg-[#f8f9ff] rounded-2xl border-2 border-[#e0e7ff]">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#764ba2] mb-4 border-l-4 border-[#667eea] pl-4">
            🔵 Komplementni Uglovi
          </h2>

          <div className="bg-[#fff4e6] p-4 sm:p-5 rounded-xl border-l-4 border-[#ff9800] my-4">
            <p className="font-semibold text-base sm:text-lg">
              <strong>Definicija:</strong> Dva ugla su <strong>komplementna</strong> ako je njihov zbir jednak{' '}
              <strong>90°</strong> (pravi ugao).
            </p>
          </div>

          <div className="text-xl sm:text-2xl text-center p-3 sm:p-4 bg-[#fff3e0] rounded-lg my-4 font-bold text-[#e65100]">
            α + β = 90°
          </div>

          <div className="w-full my-5">
            <canvas ref={complementary1Ref} className="w-full border-2 border-gray-300 rounded-lg shadow-md" />
            <div className="mt-4 text-base sm:text-xl font-bold text-center bg-white p-3 rounded-lg max-w-2xl mx-auto">
              Komplementni uglovi: 60° + 30° = 90°
            </div>
          </div>

          <div className="bg-[#e8f5e9] p-4 sm:p-5 rounded-xl border-l-4 border-[#4caf50] my-4">
            <p className="text-base sm:text-lg">
              <strong>Primer 1:</strong> Ako je jedan ugao 30°, koliki je njegov komplementni ugao?
              <br />
              <strong>Rešenje:</strong> 90° - 30° = <strong>60°</strong>
            </p>
          </div>

          <div className="w-full my-5">
            <canvas ref={complementary2Ref} className="w-full border-2 border-gray-300 rounded-lg shadow-md" />
            <div className="mt-4 text-base sm:text-xl font-bold text-center bg-white p-3 rounded-lg max-w-2xl mx-auto">
              Komplementni uglovi: 40° + 50° = 90°
            </div>
          </div>

          <div className="bg-[#e3f2fd] p-3 sm:p-4 rounded-lg my-4 border-l-4 border-[#2196f3]">
            <p className="text-sm sm:text-base">
              <strong>Važno:</strong> Komplementni uglovi zajedno čine pravi ugao (ugao od 90°). Možeš ih zamisliti 
              kao dva dela jednog pravog ugla.
            </p>
          </div>

          <div className="bg-[#fff9c4] p-3 sm:p-4 rounded-lg my-4 border-l-4 border-[#fbc02d]">
            <p className="text-sm sm:text-base">
              <span className="font-bold text-[#f57f17]">💡 SAVET: </span>
              Lak način da zapamtiš: <strong>K</strong>omplementni → <strong>K</strong>olut (<strong>90°</strong> je 
              kao četvrtina kruga)
            </p>
          </div>
        </section>

        {/* Suplementni uglovi */}
        <section className="mb-8 sm:mb-10 p-1 sm:p-6 bg-[#f8f9ff] rounded-2xl border-2 border-[#e0e7ff]">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#764ba2] mb-4 border-l-4 border-[#667eea] pl-4">
            🔴 Suplementni Uglovi
          </h2>

          <div className="bg-[#fff4e6] p-4 sm:p-5 rounded-xl border-l-4 border-[#ff9800] my-4">
            <p className="font-semibold text-base sm:text-lg">
              <strong>Definicija:</strong> Dva ugla su <strong>suplementna</strong> ako je njihov zbir jednak{' '}
              <strong>180°</strong> (ispruženi ugao).
            </p>
          </div>

          <div className="text-xl sm:text-2xl text-center p-3 sm:p-4 bg-[#fff3e0] rounded-lg my-4 font-bold text-[#e65100]">
            α + β = 180°
          </div>

          <div className="w-full my-5">
            <canvas ref={supplementary1Ref} className="w-full border-2 border-gray-300 rounded-lg shadow-md" />
            <div className="mt-4 text-base sm:text-xl font-bold text-center bg-white p-3 rounded-lg max-w-2xl mx-auto">
              Suplementni uglovi: 110° + 70° = 180°
            </div>
          </div>

          <div className="bg-[#e8f5e9] p-4 sm:p-5 rounded-xl border-l-4 border-[#4caf50] my-4">
            <p className="text-base sm:text-lg">
              <strong>Primer 2:</strong> Ako je jedan ugao 110°, koliki je njegov suplementni ugao?
              <br />
              <strong>Rešenje:</strong> 180° - 110° = <strong>70°</strong>
            </p>
          </div>

          <div className="w-full my-5">
            <canvas ref={supplementary2Ref} className="w-full border-2 border-gray-300 rounded-lg shadow-md" />
            <div className="mt-4 text-base sm:text-xl font-bold text-center bg-white p-3 rounded-lg max-w-2xl mx-auto">
              Suplementni uglovi: 135° + 45° = 180°
            </div>
          </div>

          <div className="bg-[#e3f2fd] p-3 sm:p-4 rounded-lg my-4 border-l-4 border-[#2196f3]">
            <p className="text-sm sm:text-base">
              <strong>Važno:</strong> Suplementni uglovi zajedno čine ispruženi ugao (prava linija). Možeš ih zamisliti 
              kao dva dela jedne prave linije.
            </p>
          </div>

          <div className="bg-[#fff9c4] p-3 sm:p-4 rounded-lg my-4 border-l-4 border-[#fbc02d]">
            <p className="text-sm sm:text-base">
              <span className="font-bold text-[#f57f17]">💡 SAVET: </span>
              Lak način da zapamtiš: <strong>S</strong>uplementni → <strong>S</strong>traight line (<strong>180°</strong> 
              je kao prava linija)
            </p>
          </div>
        </section>

        {/* Razlike */}
        <section className="mb-8 sm:mb-10 p-4 sm:p-6 bg-[#f8f9ff] rounded-2xl border-2 border-[#e0e7ff]">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#764ba2] mb-4 border-l-4 border-[#667eea] pl-4">
            ⚖️ Razlika između Komplementnih i Suplementnih Uglova
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
            <div className="bg-[#e3f2fd] p-4 sm:p-6 rounded-xl text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1976d2] mb-3">Komplementni</h3>
              <div className="text-4xl sm:text-5xl font-bold text-[#0d47a1] my-3">90°</div>
              <p className="text-base sm:text-lg">Zbir = Pravi ugao</p>
            </div>
            <div className="bg-[#fce4ec] p-4 sm:p-6 rounded-xl text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-[#c2185b] mb-3">Suplementni</h3>
              <div className="text-4xl sm:text-5xl font-bold text-[#880e4f] my-3">180°</div>
              <p className="text-base sm:text-lg">Zbir = Ispruženi ugao</p>
            </div>
          </div>
        </section>

        {/* Kviz */}
        <section className="mt-10 sm:mt-12 p-1 sm:p-8 bg-gradient-to-br from-[#ffeaa7] to-[#fdcb6e] rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#2d3436] mb-6 sm:mb-8">
            📝 PROVERI SVOJE ZNANJE - KVIZ
          </h2>

          {/* Pitanje 1 */}
          <div className="bg-white p-1 sm:p-6 rounded-xl shadow-lg mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#2d3436] mb-4">
              Pitanje 1: Dva ugla od 45° i 45° su:
            </h3>
            <div className="w-full my-4">
              <canvas ref={quiz1Ref} className="w-full border-2 border-gray-300 rounded-lg shadow-md" />
              <div className="mt-3 text-base sm:text-lg font-bold text-center bg-gray-50 p-2 rounded-lg">
                45° + 45° = ?
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 mt-4">
              {['a', 'b', 'c'].map((option) => (
                <label
                  key={option}
                  className="flex items-center p-3 sm:p-4 bg-gray-50 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 hover:border-[#667eea] transition-all"
                >
                  <input
                    type="radio"
                    name="q1"
                    value={option}
                    onChange={(e) => handleAnswerChange('q1', e.target.value)}
                    className="mr-3 w-4 h-4"
                  />
                  <span className="text-sm sm:text-base">
                    {option === 'a' && 'A) Suplementni uglovi'}
                    {option === 'b' && 'B) Komplementni uglovi'}
                    {option === 'c' && 'C) Nisu ni komplementni ni suplementni'}
                  </span>
                </label>
              ))}
            </div>
            {results.q1 !== undefined && (
              <div
                className={`mt-4 p-4 rounded-lg text-center font-bold ${
                  results.q1 ? 'bg-[#d4edda] text-[#155724] border-2 border-[#c3e6cb]' : 'bg-[#f8d7da] text-[#721c24] border-2 border-[#f5c6cb]'
                }`}
              >
                {getResultMessage(1)}
              </div>
            )}
          </div>

          {/* Pitanje 2 */}
          <div className="bg-white p-1 sm:p-6 rounded-xl shadow-lg mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#2d3436] mb-4">
              Pitanje 2: Ako je jedan ugao 130°, koliki je njegov suplementni ugao?
            </h3>
            <div className="w-full my-4">
              <canvas ref={quiz2Ref} className="w-full border-2 border-gray-300 rounded-lg shadow-md" />
              <div className="mt-3 text-base sm:text-lg font-bold text-center bg-gray-50 p-2 rounded-lg">
                130° + ? = 180°
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 mt-4">
              {['a', 'b', 'c'].map((option) => (
                <label
                  key={option}
                  className="flex items-center p-3 sm:p-4 bg-gray-50 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 hover:border-[#667eea] transition-all"
                >
                  <input
                    type="radio"
                    name="q2"
                    value={option}
                    onChange={(e) => handleAnswerChange('q2', e.target.value)}
                    className="mr-3 w-4 h-4"
                  />
                  <span className="text-sm sm:text-base">
                    {option === 'a' && 'A) 40°'}
                    {option === 'b' && 'B) 50°'}
                    {option === 'c' && 'C) 60°'}
                  </span>
                </label>
              ))}
            </div>
            {results.q2 !== undefined && (
              <div
                className={`mt-4 p-4 rounded-lg text-center font-bold ${
                  results.q2 ? 'bg-[#d4edda] text-[#155724] border-2 border-[#c3e6cb]' : 'bg-[#f8d7da] text-[#721c24] border-2 border-[#f5c6cb]'
                }`}
              >
                {getResultMessage(2)}
              </div>
            )}
          </div>

          {/* Pitanje 3 */}
          <div className="bg-white p-1 sm:p-6 rounded-xl shadow-lg mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#2d3436] mb-4">
              Pitanje 3: Koliki je komplementni ugao za ugao od 35°?
            </h3>
            <div className="w-full my-4">
              <canvas ref={quiz3Ref} className="w-full border-2 border-gray-300 rounded-lg shadow-md" />
              <div className="mt-3 text-base sm:text-lg font-bold text-center bg-gray-50 p-2 rounded-lg">
                35° + ? = 90°
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 mt-4">
              {['a', 'b', 'c'].map((option) => (
                <label
                  key={option}
                  className="flex items-center p-3 sm:p-4 bg-gray-50 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 hover:border-[#667eea] transition-all"
                >
                  <input
                    type="radio"
                    name="q3"
                    value={option}
                    onChange={(e) => handleAnswerChange('q3', e.target.value)}
                    className="mr-3 w-4 h-4"
                  />
                  <span className="text-sm sm:text-base">
                    {option === 'a' && 'A) 45°'}
                    {option === 'b' && 'B) 55°'}
                    {option === 'c' && 'C) 65°'}
                  </span>
                </label>
              ))}
            </div>
            {results.q3 !== undefined && (
              <div
                className={`mt-4 p-4 rounded-lg text-center font-bold ${
                  results.q3 ? 'bg-[#d4edda] text-[#155724] border-2 border-[#c3e6cb]' : 'bg-[#f8d7da] text-[#721c24] border-2 border-[#f5c6cb]'
                }`}
              >
                {getResultMessage(3)}
              </div>
            )}
          </div>

          {/* Pitanje 4 */}
          <div className="bg-white p-1 sm:p-6 rounded-xl shadow-lg mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#2d3436] mb-4">
              Pitanje 4: Uglovi od 120° i 60° su:
            </h3>
            <div className="w-full my-4">
              <canvas ref={quiz4Ref} className="w-full border-2 border-gray-300 rounded-lg shadow-md" />
              <div className="mt-3 text-base sm:text-lg font-bold text-center bg-gray-50 p-2 rounded-lg">
                120° + 60° = ?
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 mt-4">
              {['a', 'b', 'c'].map((option) => (
                <label
                  key={option}
                  className="flex items-center p-3 sm:p-4 bg-gray-50 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 hover:border-[#667eea] transition-all"
                >
                  <input
                    type="radio"
                    name="q4"
                    value={option}
                    onChange={(e) => handleAnswerChange('q4', e.target.value)}
                    className="mr-3 w-4 h-4"
                  />
                  <span className="text-sm sm:text-base">
                    {option === 'a' && 'A) Komplementni uglovi'}
                    {option === 'b' && 'B) Suplementni uglovi'}
                    {option === 'c' && 'C) Nisu ni komplementni ni suplementni'}
                  </span>
                </label>
              ))}
            </div>
            {results.q4 !== undefined && (
              <div
                className={`mt-4 p-4 rounded-lg text-center font-bold ${
                  results.q4 ? 'bg-[#d4edda] text-[#155724] border-2 border-[#c3e6cb]' : 'bg-[#f8d7da] text-[#721c24] border-2 border-[#f5c6cb]'
                }`}
              >
                {getResultMessage(4)}
              </div>
            )}
          </div>

          {/* Pitanje 5 */}
          <div className="bg-white p-1 sm:p-6 rounded-xl shadow-lg mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#2d3436] mb-4">
              Pitanje 5: Koliki je zbir komplementnih uglova?
            </h3>
            <div className="w-full my-4">
              <canvas ref={quiz5Ref} className="w-full border-2 border-gray-300 rounded-lg shadow-md" />
              <div className="mt-3 text-base sm:text-lg font-bold text-center bg-gray-50 p-2 rounded-lg">
                Komplementni uglovi = ?
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 mt-4">
              {['a', 'b', 'c'].map((option) => (
                <label
                  key={option}
                  className="flex items-center p-3 sm:p-4 bg-gray-50 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 hover:border-[#667eea] transition-all"
                >
                  <input
                    type="radio"
                    name="q5"
                    value={option}
                    onChange={(e) => handleAnswerChange('q5', e.target.value)}
                    className="mr-3 w-4 h-4"
                  />
                  <span className="text-sm sm:text-base">
                    {option === 'a' && 'A) 90°'}
                    {option === 'b' && 'B) 180°'}
                    {option === 'c' && 'C) 360°'}
                  </span>
                </label>
              ))}
            </div>
            {results.q5 !== undefined && (
              <div
                className={`mt-4 p-4 rounded-lg text-center font-bold ${
                  results.q5 ? 'bg-[#d4edda] text-[#155724] border-2 border-[#c3e6cb]' : 'bg-[#f8d7da] text-[#721c24] border-2 border-[#f5c6cb]'
                }`}
              >
                {getResultMessage(5)}
              </div>
            )}
          </div>

          <button
            onClick={checkAnswers}
            className="w-full py-4 sm:py-5 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-lg sm:text-xl font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            PROVERI ODGOVORE 🎯
          </button>

          {showFinalScore && (
            <div id="finalScore" className="mt-8 p-6 sm:p-8 bg-white rounded-2xl text-center shadow-xl">
              <div className="text-5xl sm:text-6xl mb-4">
                {score === 5 ? '🌟' : score >= 3 ? '😊' : '📚'}
              </div>
              <div
                className={`text-2xl sm:text-3xl font-bold mb-4 ${
                  score === 5 ? 'text-[#4caf50]' : score >= 3 ? 'text-[#2196f3]' : 'text-[#ff9800]'
                }`}
              >
                {score === 5 ? 'SAVRŠENO! 🏆' : score >= 3 ? 'Odličan rezultat! 👏' : 'Nastavi sa učenjem! 💪'}
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                Tvoj rezultat: {score}/5
              </div>
              <div className="text-xl sm:text-2xl text-gray-600">
                {((score / 5) * 100).toFixed(0)}% tačnih odgovora
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
