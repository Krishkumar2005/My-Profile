import {Router} from "express"
import createProfile from "../controllers/createProfile.js"
import updateProfile from "../controllers/updateProfile.js"
import getProfile from "../controllers/getProfile.js"
import { Auth } from "../middleware/auth.js"
import { checkAuth } from "../controllers/checkAuth.js"

const router = Router()

router.route("/create-profile").post(Auth, createProfile)
router.route("/update-profile").put(Auth, updateProfile)
router.route("/get-profile").get(getProfile)
router.route("/auth").get(checkAuth)

export default router