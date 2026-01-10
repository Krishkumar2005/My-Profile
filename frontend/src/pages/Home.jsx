// pages/Home.jsx
import { useEffect, useState } from "react";
import ProfileSection from "../components/ProfileOverView/Profile";
import GlobalSearchSection from "../components/GlobalSearchQuery/GlobalSearchQuerySection";
import { fetchProfile } from "../services/api";

export default function Home() {
  const [profile, setProfile] = useState(null);

  
  useEffect(() => {
    fetchProfile()
      .then(setProfile);
  }, []);


  if (!profile) return <p className="mt-50">Loading...</p>;
  

  return (
    <div className="p-6 space-y-6 w-full mx-auto">
      <h1 className="text-4xl font-extrabold">My Profile</h1>
      <ProfileSection profile={profile} />
      <GlobalSearchSection />
    </div>
  );
}
