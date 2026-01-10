import { ProfileSchema } from "../models/profileSchema.js";

const updateProfile = async (req, res) => {
  try {
    const {
      name,
      email,
      education,
      skills,
      work,
      projects,
      links
    } = req.body;

    const updatedProfile = await ProfileSchema.findOneAndUpdate(
      {email},
      {
        name,
        email,
        education,
        skills,
        work,
        projects,
        links
      },
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedProfile
    });

  } catch (error) {
    console.error("Update profile error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update profile",
      error: error.message
    });
  }
};

export default updateProfile