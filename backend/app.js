import express from "express"
import cors from "cors"
import healthRoute from "./routes/health.js"
import userProfileRouter from "./routes/profile.js"
import userProfileQueryRouter from "./routes/profileQuery.js"

const app = express();
app.use(express.json())

// app.use(cors({
//     origin: [
//         `${process.env.CORS_ORIGIN}`
//     ]
// }))


app.use(
  cors({
    origin: "https://my-profile-sooty-ten.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/v1", healthRoute)
app.use("/api/v1", userProfileRouter)
app.use("/api/v1", userProfileQueryRouter)



export {app}
