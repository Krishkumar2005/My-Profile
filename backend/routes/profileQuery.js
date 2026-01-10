import { Router } from "express";
import { getSkills } from "../controllers/getSkillsQuery.js";
import { getProjects } from "../controllers/getProjectsQuery.js";
import { getProfileSections } from "../controllers/profileSectionsQuery.js";

const router = Router()

router.route("/skills").get(getSkills)
router.route("/projects").get(getProjects)
router.route("/get-profile-sections").get(getProfileSections)

export default router