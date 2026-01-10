
export default function ProfileForm({ profile, setProfile, onSave }) {
  //console.log("profile name",profile)
  return (
    <div className="space-y-3 w-full">

      <h1 className="font-bold">Name</h1>
      <input
        value={profile.name || ""}
        onChange={e => setProfile({ ...profile, name: e.target.value })}
        placeholder="Name"
        className="border p-2 w-full"
      />

<h1 className="font-bold">Email</h1>
      <input
        value={profile.email || ""}
        onChange={e => setProfile({ ...profile, email: e.target.value })}
        placeholder="Email"
        className="border p-2 w-full"
      />

<h1 className="font-bold">Skills</h1>
      <textarea
        value={profile.skills?.join(", ") || ""}
        onChange={e =>
          setProfile({
            ...profile,
            skills: e.target.value.split(",").map(s => s.trim()).filter(Boolean)
          })
        }
        placeholder="Skills (comma separated)"
        className="border p-2 w-full"
      />

      <button
        onClick={onSave}
        className="bg-black text-white py-2 w-full cursor-pointer"
      >
        {profile._id ? "Update Profile" : "Create Profile"}
      </button>
    </div>
  );
}
