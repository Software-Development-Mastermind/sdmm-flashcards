# Flashcard app

# Installation Instructions

 1. Run `npm i` in root directory
 2. Run `npm i --prefix client` in root directory
 3. Install PostgreSQL on computer (if you haven't already)
 4. Create a database called `sdmm_flashcards` in PostgreSQL
 5. Run `npx sequelize-cli db:migrate` in root directory.  This will set up the tables in your database.
 6. Create a copy of `.env.sample` and rename it `.env`.
 7. Run `npm run dev` to fire off server
 8. Open app at `localhost:3001`