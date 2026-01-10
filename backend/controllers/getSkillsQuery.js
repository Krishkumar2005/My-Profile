import { ProfileSchema } from "../models/profileSchema.js";

export const getSkills = async (req, res) => {
  try {
    const { tag } = req.query;

    const profile = await ProfileSchema.findOne({});
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    let skills = profile.skills;

    if (tag) {
      skills = skills.filter(skill =>
        skill.toLowerCase().includes(tag.toLowerCase())
      );
    }

    return res.status(200).json({
      success: true,
      message: "Fetched all related skills from profile" ,
      data: skills
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch skills",
      error: error.message
    });
  }
};
