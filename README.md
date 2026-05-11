# 🍽️ Food Recipe App

A full-featured SPA to browse thousands of recipes, filter by diet or ingredient, and create & save your own recipes — powered by the [Spoonacular API](https://spoonacular.com/food-api).

[![Live Demo](https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://client-bice-tau.vercel.app)
[![Video Demo](https://img.shields.io/badge/Video_Demo-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=8bP8FS9GXc0)

---

## ✨ Features

- 🔍 Search recipes from thousands of options via Spoonacular API
- 🥗 Filter by diet type and ingredients
- 📋 Sort results by different criteria
- ✏️ Create and save your own custom recipes to the database
- 💾 Persistent storage with PostgreSQL

---

## 🛠️ Tech stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React 17 · Redux · React Router · CSS Modules |
| Backend | Node.js · Express · Sequelize |
| Database | PostgreSQL |
| External API | Spoonacular |

---

## 🚀 Run locally

### Prerequisites

Make sure you have installed:

- **Node.js** `v12.18.3` or higher
- **NPM** `v6.14.16` or higher
- **PostgreSQL** running locally

### 1. Clone the repository

```bash
git clone https://github.com/gabriel073/PI_FOOD.git
cd PI_FOOD
```

### 2. Set up the database

Open your PostgreSQL client (psql or pgAdmin) and create the database:

```sql
CREATE DATABASE food;
```

### 3. Configure environment variables

Inside the `api` folder, create a file named `.env`:

```bash
cd api
cp .env.example .env   # if the example exists, otherwise create it manually
```

Fill in your own credentials:

```env
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
API_KEY=your_spoonacular_api_key
```

> 💡 Get your free Spoonacular API key at [spoonacular.com/food-api](https://spoonacular.com/food-api)

### 4. Install dependencies and start the backend

```bash
# Inside the /api folder
npm install
npm start
```

The server will start on `http://localhost:3001`

### 5. Install dependencies and start the frontend

Open a **new terminal** and run:

```bash
# Inside the /client folder
cd ../client
npm install
npm start
```

The app will open automatically on `http://localhost:3000`

---

## 📁 Project structure

```
PI_FOOD/
├── api/              # Express backend
│   ├── src/
│   │   ├── models/   # Sequelize models
│   │   ├── routes/   # API routes
│   │   └── app.js
│   └── .env          # ⚠️ Not committed — create manually
│
└── client/           # React frontend
    ├── public/
    └── src/
        ├── components/
        ├── redux/
        └── App.js
```

---

## 📦 Key dependencies

| Package | Version |
|---------|---------|
| react | 17.0.1 |
| react-dom | 17.0.1 |
| react-router-dom | 5.2.0 |
| redux | 4.0.5 |
| react-redux | 7.2.3 |

---

## 🎯 Project goals

- Build a fullstack app with React, Redux, Node.js and Sequelize
- Practice Git workflow and collaborative development
- Apply testing best practices
- Connect to a real external API

---

## 👤 Author

**Gabriel Marzioli**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-marzioli/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/gabriel073)
