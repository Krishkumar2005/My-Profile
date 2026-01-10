// components/SkillsSection.jsx
import { useState } from "react";
import { fetchSkills } from "../../services/api";

export default function SkillsSection() {
  const [tag, setTag] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillsNotFound, setSkillsNotFount] = useState(false)

  const handleFetchSkills = async () => {
    const res = await fetchSkills(tag)
    if (res.data.length > 0) {
      setSkillsNotFount(false)
      setSkills(res.data)
    }
    else {
      setSkillsNotFount(true)
      setSkills([])
    }
  };
  
  return (
    <section className="bg-white p-4 rounded shadow space-y-3">
      <input
        className="border p-2 w-full"
        placeholder="Search skill (react, node...)"
        onChange={e => setTag(e.target.value)}
      />

      <button
        onClick={handleFetchSkills}
        className="bg-black text-white px-4 py-2 rounded cursor-pointer"
      >
        Find Skills
      </button>

      <div className="flex flex-wrap gap-2">
        {skillsNotFound && skills.length == 0 ? (<h1 className="bg-gray-200 px-2 py-1 rounded text-sm">Skills Not Found</h1> )
        : skills.map(skill => (
          <span
            key={skill}
            className="bg-gray-200 px-2 py-1 rounded text-sm"
          >
            {skill}
          </span>
        ))}

      </div>
    </section>
  );
}
