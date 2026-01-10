import express from "express"
import cors from "cors"
import {rateLimit} from "express-rate-limit"
import helmet from "helmet";
import healthRoute from "./routes/health.js"
import userProfileRouter from "./routes/profile.js"
import userProfileQueryRouter from "./routes/profileQuery.js"

const app = express();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	message: "Too many request performed from this IP, please try agin after some time!!"
})

app.use(express.json())

// app.use(cors({
//     origin: [
//         `${process.env.CORS_ORIGIN}`
//     ]
// }))


app.use(
  cors({
    origin: ["http://localhost:5173",
             "https://my-profile-sooty-ten.vercel.app"
            ]
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(helmet())
app.use(limiter)

app.use("/api/v1", healthRoute)
app.use("/api/v1", userProfileRouter)
app.use("/api/v1", userProfileQueryRouter)



export {app}
