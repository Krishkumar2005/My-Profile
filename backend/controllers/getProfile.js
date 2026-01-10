import { ProfileSchema } from "../models/profileSchema.js";

const getProfile = async (req, res) => {
  try {
    // Fetch single profile
    const profile = await ProfileSchema.findOne();

    // Handle not found
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found"
      });
    }

    //Return profile
    return res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: profile
    });

  } catch (error) {
    console.error("Get profile error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
      error: error.message
    });
  }
};
export default getProfile