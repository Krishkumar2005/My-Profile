import mongoose, {Schema} from "mongoose";

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    education: [
      {
        institution: String,
        degree: String,
        duration: String,
        cgpa: String
      }
    ],

    skills: [String],

    work: [
      {
        company: String,
        role: String,
        duration: String,
        description: String
      }
    ],

    projects: [
      {
        title: String,
        description: String,
        techStack: [String],
        links: {
          github: String,
          live: String
        }
      }
    ],

    links: {
      github: String,
      linkedin: String,
      portfolio: String,
      leetcode: String,
      geeksforgeeks: String
    }
  },
  {
    timestamps: true
  }
);


export const ProfileSchema = mongoose.model("ProfileSchema", profileSchema);