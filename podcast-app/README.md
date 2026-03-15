# Podcast App (React + Vite)

Hi there! This is a simple podcast browsing app I built using **React + Vite**. It lets you:

- 🔍 Search for podcasts by title
- 🗂 Filter by genre
- 🔁 Sort by newest, oldest, or alphabetically
- 📄 Browse results using pagination

This README is written as if I’m explaining it to someone who is just getting started.

---

## ✅ What this app does (in plain words)

When you open the app, it fetches a list of podcasts from an online API. The list is shown as cards.

You can then:

- Type a word in the search box to filter the list
- Pick a genre from the dropdown to see only those podcasts
- Choose a sort option to reorder the results
- Click page numbers to move through the list (pagination)

Everything updates instantly thanks to React reacting to the state.

---

## 🧩 How to run this app (the basics)

1. Install Node.js
If you don’t have Node.js installed, go here and install it (LTS version is fine):
https://nodejs.org

2. Open a terminal in the project folder
The folder you want is:

`podcast-app`

3. Install dependencies

```bash
npm install
```

4. Start the dev server

```bash
npm run dev
```

Once it starts, open the URL it gives you (usually `http://localhost:5173`).

---

## 🗂 Project structure (what’s where)

- `src/` - all the React code
  - `App.jsx` - the main app component
  - `main.jsx` - app entry point (bootstraps React)
  - `components/` - UI pieces (search, filter, grid, card, pagination)
  - `context/PodcastContext.jsx` - shared state (search, genre, sort, page)
  - `api/fetchPodcasts.js` - code that calls the API
  - `data.js` - static genre list used for filtering

---

## 🧠 What I learned while building this (helpful to know)

- The **Context API** lets me share state across components without passing props everywhere.
- **Pagination** means only showing a few items per page, so the list isn’t too long.
- Sorting and filtering are done in one place so it’s easier to keep things consistent.