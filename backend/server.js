import {app} from "./app.js"
import dotenv from "dotenv"
import connectDB from "./lib/db.js"

dotenv.config({path: "./.env"})

const port  = process.env.PORT

connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("Err: ", error)
        throw error
    })

    app.listen(port, () => {
        console.log(`App is running on port: ${port}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection failed!!! ", error);
    throw error
}) 