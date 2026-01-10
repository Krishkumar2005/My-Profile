import { ProfileSchema } from "../models/profileSchema.js";

export const getProfileSections = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const profile = await ProfileSchema.findOne();
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const query = q.toLowerCase();

    const skills = profile.skills.filter(skill =>
      skill.toLowerCase().includes(query)
    );

    const projects = profile.projects.filter(project =>
      JSON.stringify(project).toLowerCase().includes(query)
    );

    const work = profile.work.filter(exp =>
      JSON.stringify(exp).toLowerCase().includes(query)
    );

    return res.status(200).json({
      success: true,
      message:"Profile section fetched successfully",
      data: {
        skills,
        projects,
        work
      }
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Search failed",
      error: error.message
    });
  }
};
