
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  // Set initial time to 4 hours, 59 minutes from now to simulate urgency
  const [timeLeft, setTimeLeft] = useState(4 * 60 * 60 + 59 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 4 * 60 * 60)); // Reset if hits 0
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  return (
    <div className="flex items-center gap-3 animate-fade-in text-gray-300">
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">Expira em:</span>
        
        {/* Minimal Custom Timer Design - Pure Text */}
        <div className="flex items-center gap-1 font-mono text-xl md:text-2xl font-bold text-white tracking-tight">
            <span className="tabular-nums">{h.toString().padStart(2, '0')}</span>
            <span className="text-red-500/80 text-sm">:</span>
            <span className="tabular-nums">{m.toString().padStart(2, '0')}</span>
            <span className="text-red-500/80 text-sm">:</span>
            <span className="tabular-nums text-red-500">{s.toString().padStart(2, '0')}</span>
        </div>
    </div>
  );
};

export default CountdownTimer;
