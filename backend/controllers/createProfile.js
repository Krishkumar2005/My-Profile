import { ProfileSchema } from "../models/profileSchema.js";

const createProfile = async (req, res) => {
  try {
    // Destructure req.body
    const {
      name,
      email,
      education,
      skills,
      work,
      projects,
      links
    } = req.body;

    // check if profile already exist with this email
    const existingProfile = await ProfileSchema.findOne({
      email
    });
    if (existingProfile) {
      return res.status(409).json({
        success: false,
        message: "Profile already exists. Use update instead."
      });
    }

    // Create profile document
    const profile = await ProfileSchema.create({
      name,
      email,
      education,
      skills,
      work,
      projects,
      links
    });


    // Return response
    return res.status(201).json({
      success: true,
      message: "Profile created successfully",
      data: profile
    });

  } catch (error) {
    console.error("Create profile error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create profile",
      error: error.message
    });
  }
};

export default createProfile