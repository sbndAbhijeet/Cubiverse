
import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Connecting...");
  
  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if(!res.ok) throw new Error('API unavailable');
        return res.json();
      })
      .then((data) => setStatus(data.message))
      .catch(() => setStatus('Backend not connected'));
  });

  return (
    <main className="min-h-screen flex flex-col
      items-center justify-center gap-6 px-4
      bg-[#080b16] text-white">
      <h1 className="text-5xl font-bold">
        Cubiverse 🧩
      </h1>
      <p className="text-slate-400">
        Solve. Improve. Compete. Inspire.
      </p>
      <div className="rounded-xl border border-white/10
        bg-white/5 px-6 py-4">
        API Status: {status}
      </div>
    </main>
  );
}

export default App;
