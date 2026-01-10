// components/ProjectsSection.jsx
import { useState } from "react";
import { fetchProjects } from "../../services/api";

export default function ProjectsSection() {
  const [tag, setTag] = useState("");
  const [projects, setProjects] = useState([]);
  const [projectNotFound, setProjectNotFound] = useState(false)

  const handleFetchProjects = async () => {
    const res = await fetchProjects(tag)
    if (res.data.length > 0) {
      setProjectNotFound(false)
      setProjects(res.data);
    } else {
      setProjectNotFound(true)
      setProjects([])
    }
  }

  return (
    <section className="bg-white p-4 rounded shadow space-y-3">
      <input
        className="border p-2 w-full"
        placeholder="Search projects by skill"
        onChange={e => setTag(e.target.value)}
      />

      <button
        onClick={handleFetchProjects}
        className="bg-black text-white px-4 py-2 cursor-pointer rounded"
      >
        Find Projects
      </button>

      <div className="space-y-3">
        {projectNotFound && projects.length == 0 ? (<h1 className="bg-gray-200 px-2 py-1 rounded text-sm">Projects Not Found</h1>)
          : projects.map(p => (
        <div key={p.title} className="border p-3 rounded">
          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-sm text-gray-600">{p.description}</p>
          <div className="flex gap-2 flex-wrap mt-2">
            {p.techStack.map(t => (
              <span
                key={t}
                className="bg-gray-100 px-2 py-1 rounded text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        )) }
      </div>
    </section>
  );
}
