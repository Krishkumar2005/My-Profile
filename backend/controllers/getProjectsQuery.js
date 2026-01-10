import { ProfileSchema } from "../models/profileSchema.js";

export const getProjects = async (req, res) => {
  try {
    const { skill } = req.query;

    const profile = await ProfileSchema.findOne();
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    let projects = profile.projects;

    if (skill) {
      projects = projects.filter(project =>
        project.techStack?.some(t =>
          t.toLowerCase().includes(skill.toLowerCase())
        )
      );
    }

    return res.status(200).json({
      success: true,
      message: "Profile projects fetched successfully",
      data: projects
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
      error: error.message
    });
  }
};
