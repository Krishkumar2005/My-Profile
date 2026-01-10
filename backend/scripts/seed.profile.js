// import fs from "fs";

// const data = JSON.parse(
//   fs.readFileSync(new URL("../dummyData.json", import.meta.url))
// );

// console.log(data)

import mongoose from "mongoose";
import fs from "fs/promises";
import dotenv from "dotenv";
import path from "path";
import { ProfileSchema } from "../models/profileSchema.js";

//dotenv.config()  //this will also work
dotenv.config({ path: path.resolve(process.cwd(), "./.env") });

const db_name = process.env.DB_NAME
const mongo_uri = process.env.MONGO_DB_URI

if(!mongo_uri){
    throw new Error("Please add your MongoDB URI to .env");
}

async function seedProfile() {
    try {
        // DB connect
        await mongoose.connect(`${mongo_uri}/${db_name}`,{
            maxPoolSize: 5,
        });
        console.log("DB connected");

        // Read JSON (single object)
        const profileData = JSON.parse(
            await fs.readFile(
                new URL("../dummyData.json", import.meta.url),
                "utf-8"
            )
        );

        const { name,
            email,
            education,
            skills,
            work,
            projects,
            links } = profileData

        // Insert into DB
        await ProfileSchema.create({
            name,
            email,
            education,
            skills,
            work,
            projects,
            links
        });

        console.log("Profile seeded successfully");
        process.exit(0);
    } catch (err) {
        console.error("Seeding error:", err);
        process.exit(1);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
}

seedProfile();
