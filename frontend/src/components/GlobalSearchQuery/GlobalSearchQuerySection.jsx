// components/GlobalSearchSection.jsx
import { useState } from "react";
import { globalSearch } from "../../services/api";

export default function GlobalSearchSection() {
  const [q, setQ] = useState("");
  const [result, setResult] = useState(null);

  const search = async () => {
   await globalSearch(q)
   .then(setResult)
    
  };
 console.log(result)
  return (
    <section className="bg-white p-4 rounded shadow space-y-3">
      <input
        className="border p-2 w-full"
        placeholder="Search profile..."
        onChange={e => setQ(e.target.value)}
      />

      <button
        onClick={search}
        className="bg-black text-white px-4 cursor-pointer py-2 rounded"
      >
        Search
      </button>

      {result && (
        <div className="text-sm space-y-1">
          <p><b>Skills:</b> {result.data.skills.join(", ")}</p>
          <p><b>Projects:</b> {result.data.projects.map(p => p.title).join(", ")}</p>
          <p><b>Work:</b> {result.data.work.map(w => w.role).join(", ")}</p>
        </div>
      )}
    </section>
  );
}
