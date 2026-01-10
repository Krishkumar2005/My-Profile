// pages/Admin.jsx
import { useEffect, useState } from "react";
import ProfileForm from "../components/CreateAndUpdateProfile/CreateAndUpdateProfileForm";
import { createAndUpdatePRofile, fetchProfile } from "../services/api";

export default function Admin() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getPtofile = async () => {
      const res = await fetchProfile()
      setProfile(res.data)
    }
    getPtofile()
  }, []);

  const saveProfile = async () => {
    console.log("updated pro", profile)
    const method = profile._id ? "PUT" : "POST";
    const action = profile._id ? "update" : "create"

    const res = await createAndUpdatePRofile(method, action, profile)

    console.log("res : ", res)

    alert("Saved");
  };

  //console.log(profile)
  if (!profile) return <p className="mt-50">Loading.....</p>


  return (
    <div className="p-6 mt-8 max-w-xl mx-auto bg-white shadow rounded">
      <ProfileForm
        profile={profile}
        setProfile={setProfile}
        onSave={saveProfile}
      />
    </div>
  );
}
