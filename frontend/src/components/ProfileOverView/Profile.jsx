import { Link } from "react-router-dom"
export default function ProfileSection({ profile }) {
  console.log("p sec",profile)
  return (
    <section className="bg-white p-4 rounded shadow space-y-2">
      <h1 className="text-2xl font-bold">{profile.data.name}</h1>
      <p className="text-gray-600">{profile.data.email}</p>
      <h1 className="font-semibold">Educations</h1>
      <div className="space-y-3">
        {profile.data.education.map(ed => (
          <div key={ed.institution.substring(1, 4)} className="border p-3 rounded">
            <h3 className="font-semibold">{ed.institution}</h3>
            <p className="text-sm text-gray-600">{ed.degree}</p>
            <p className="text-sm text-gray-600">{ed.duration}</p>
            <p className="text-sm text-gray-600">{ed.cgpa}</p>
          </div>
        ))}
      </div>


      <h3 className="font-semibold">Skills</h3>
      <div className="space-y-3">
        <div className="border p-3 rounded flex flex-wrap gap-2">
          {profile.data.skills.map(skill => (
            <span
              key={skill}
              className="bg-gray-200 px-2 py-1 rounded text-sm"
            >
              {skill}
            </span>
          ))}

        </div>
      </div>

      <h1 className="font-semibold">Projects</h1>
      <div className="space-y-3">
        {profile.data.projects.map(p => (
          <div key={p.title} className="border p-3 rounded">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 text-left">{p.description}</p>
            <div className="flex gap-2 flex-wrap mt-2">
              {p.techStack.map(t => (
                <span
                  key={t}
                  className="bg-gray-100 px-2 py-1 mb-2 rounded text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.links.github ? <Link className="text-blue-500" to={p.links.github}>Github</Link> : <Link className="text-blue-500" to={p.links.live}>Live</Link>}
          </div>
        ))}
      </div>

      <h1 className="font-semibold">Works</h1>
      <div className="space-y-3">
        {profile.data.work.map(w => (
          <div key={w.company.substring(1, 4)} className="border p-3 rounded">
            <h3 className="font-semibold">{w.company}</h3>
            <p className="text-sm text-gray-600">{w.role}</p>
            <p className="text-sm text-gray-600">{w.duration}</p>
            <p className="text-sm text-gray-600">{w.description}</p>
          </div>
        ))}
      </div>

      <h3 className="font-semibold">Important Links</h3>
      <div className="space-y-3">
        <div className="border p-3 rounded text-left">
          <h1>LinkedIn: <Link className="text-blue-500" to={profile.data.links.linkedin}>LinkedIn</Link> </h1>
          <h1>LeetCode: <Link className="text-blue-500" to={profile.data.links.leetcode}>LeetCode</Link> </h1>
          <h1>GitHub: <Link className="text-blue-500" to={profile.data.links.github}>GitHub</Link> </h1>
          <h1>GeeksForGeeks: <Link className="text-blue-500" to={profile.data.links.geeksforgeeks}>GeeksForGeeks</Link> </h1>
          <h1>PortFolio: {profile.data.links.portfolio ? <Link className="text-blue-500" to={profile.data.links.portfolio}>PortFolio</Link> : "................."} </h1>

        </div>
      </div>


    </section>
  );
}
