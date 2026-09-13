import { useState, useEffect } from "react";

const LINES = [
  { prompt: "whoami", output: "Pamal Pahasara — Full Stack Developer & AI Enthusiast" },
  { prompt: "cat current_focus.txt", output: "Building NearU — real-time ride matching w/ PostGIS + SignalR" },
  { prompt: "ls currently-learning/", output: "flutter/  networking/  system-design/" },
];

export default function TerminalIntro() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("prompt"); // "prompt" -> "output" -> "done"
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (lineIndex >= LINES.length) return;
    const current = LINES[lineIndex];
    const target = phase === "prompt" ? current.prompt : current.output;

    if (charIndex < target.length) {
      const timeout = setTimeout(() => setCharIndex((c) => c + 1), 35);
      return () => clearTimeout(timeout);
    }

    if (phase === "prompt") {
      const timeout = setTimeout(() => {
        setPhase("output");
        setCharIndex(0);
      }, 300);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setHistory((h) => [...h, current]);
      setLineIndex((i) => i + 1);
      setPhase("prompt");
      setCharIndex(0);
    }, 900);
    return () => clearTimeout(timeout);
  }, [charIndex, phase, lineIndex]);

  const current = LINES[lineIndex];

  return (
    <div className="w-full max-w-xl mx-auto bg-bg-soft/70 backdrop-blur-sm border-2 border-borderMuted
                    rounded-xl overflow-hidden shadow-lg text-left font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-borderMuted bg-bg-soft">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-xs text-muted">pamal@portfolio: ~</span>
      </div>

      <div className="p-4 space-y-2 min-h-[140px]">
        {history.map((line, i) => (
          <div key={i}>
            <p className="text-neonPurple">
              <span className="text-muted">$</span> {line.prompt}
            </p>
            <p className="text-mutedLight pl-4">{line.output}</p>
          </div>
        ))}

        {current && (
          <div>
            <p className="text-neonPurple">
              <span className="text-muted">$</span>{" "}
              {phase === "prompt" ? current.prompt.slice(0, charIndex) : current.prompt}
              {phase === "prompt" && <span className="animate-pulse">▍</span>}
            </p>
            {phase === "output" && (
              <p className="text-mutedLight pl-4">
                {current.output.slice(0, charIndex)}
                <span className="animate-pulse">▍</span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}