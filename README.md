# My-Profile

A minimal **Backend Assessment project** that stores my own candidate profile in a database and exposes it via a clean REST API, with a small frontend to query data. This project satisfies **Track A: Backend Assessment ("Me-API Playground")** requirements.

---

## 🔗 Live URLs

* **Backend API (Production)**: [<YOUR_BACKEND_URL>](https://my-profile-48u4.onrender.com)
* **Frontend UI**: [<YOUR_FRONTEND_URL>](https://my-profile-sooty-ten.vercel.app)
* **Health Check**: `GET /health`

> Both frontend and backend are deployed and CORS-enabled.

---

## 🎯 Goal

Build and host a basic playground that:

* Stores my personal candidate profile in a database
* Exposes it via a small REST API
* Allows querying (search/filter) via a minimal UI

---

## 🏗️ Architecture

```
Frontend (React / HTML)
   ↓ (HTTP / JSON)
Backend (Node.js + Express)
   ↓
Database (MongoDB)
```

* **Frontend**: Minimal UI for search & listing
* **Backend**: REST API with CRUD + query endpoints
* **Database**: MongoDB (schema + indexes included)

---

## 🧠 Tech Stack

**Backend**

* Node.js
* Express.js
* MongoDB + Mongoose

**Frontend**

* React (minimal UI)

**Hosting**

* Backend: Render / Railway
* Frontend: Vercel / Netlify

---

## 📦 Features

### Profile Management

* Create / Read / Update candidate profile
* Stores:

  * Name
  * Email
  * Education
  * Skills
  * Work Experience
  * Projects (title, description, links)
  * Links (GitHub, LinkedIn, Portfolio)

### Query APIs

* Search by skill
* List projects
* Health check endpoint

---

## 🔌 API Endpoints

### Core

* `GET /health` → API liveness check
* `GET /profile` → Fetch profile
* `POST /profile` → Create profile
* `PUT /profile` → Update profile

### Queries

* `GET /projects?skill=python`
* `GET /skills?tag=react`
* `GET /get-profile-sections?q=react`

---

## 🗄️ Database Schema (MongoDB)

### Profile Collection

```js
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
}
```


---

## 🌱 Seed Data

The database is seeded with **my real profile data** so that:

* Queries return meaningful results
* Data is visible immediately in the UI

---

## 🖥️ Frontend (Minimal UI)

Supports:

* Search profile by skill
* List all projects
* Display full profile details

---

## 🚀 Local Setup

### 1️⃣ Clone Repo

```bash
git clone https://github.com/Krishkumar2005/My-Profile.git
cd My-Profile
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```
PORT=5000
MONGO_URI=your_mongodb_uri
```

Seed Data
 ```bash
npm run seed
```

Run server:

```bash
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Sample API Requests (Postman Friendly)

You can directly test these endpoints in **Postman**.

My Postman API Collection : https://.postman.co/workspace/My-Workspace~7a3d5551-9967-4861-8f8e-05a98098bf69/collection/34694901-c50c3882-69b7-47cd-9301-2e9cbf884fdf?action=share&creator=34694901

* Method: GET
* URL: https://my-profile-48u4.onrender.com/api/v1/health
* URL: https://my-profile-48u4.onrender.com/api/v1/get-profile
* Method POST
* URL: https://my-profile-48u4.onrender.com/api/v1/create-profile
* Method: PUT
* URL: https://my-profile-48u4.onrender.com/api/v1/update-profile

**Query Endpoints**

* Method: GET
* URL: https://my-profile-48u4.onrender.com/api/v1/projects?skill=react
* URL: https://my-profile-48u4.onrender.com/api/v1/skills?tag=react
* URL: https://my-profile-48u4.onrender.com/api/v1/get-profile-sections?q=next.js



## 🧾 Known Limitations

* Authentication not enforced (read-only public APIs)
* Basic validation only
* Single-user (personal profile only)

---

## 📄 Resume

📎 **Resume**: https://drive.google.com/file/d/1SdifQjXZhvHTM7LZGzl1pNh1A1qRttc6/view?usp=sharing

---

## ✅ Acceptance Criteria Checklist

* ✅ APIs return correct filtered results
* ✅ Seed data visible via UI
* ✅ README is complete & reproducible
* ✅Live URLs working without errors

---

## 👤 Author

**Krish Kumar**
Backend / Software Developer/ Full Stack Developer
GitHub: https://github.com/Krishkumar2005

---

> This project is built specifically for the Backend Assessment.
