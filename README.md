# Expense Tracker

## Description

This project is an expense tracker application that helps manage expenses by adding each day expense and list them by filtering.
There are categories you can add where you can segregate expense and also see expense based on categories in the UI. This App is built on NextJS and Postgresql database. Prisma is used as ORM.

# Prerequisite

- Npm Package Manager

# Tools Used in the App

- `NextJS`: Framework on which the app is built
- `Prisma`: ORM for postgres database
- `Tailwind`: Styling Library

# Standarizing the Code

- ESLint
- Prettier
- Husky

# Available Scripts

    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "migrate": "npx prisma migrate dev --name init",
    "seed": "npx tsx prisma/seed.ts",
    "prepare": "husky install"

- `dev`: Run the codebase in dev mode
- `build`: Build Next App
- `start`: Run the built app for prod mode
- `lint`: Lint the project through eslint configurations (.eslintrc)
- `migrate`: Migrate DB for your local postgres DB
- `migrate`: Seed initial categories data into your DB
- `prepare`: Install husky

# Routes

- `/expense-list`: This shows various cards for expenses list. It contains expense list for today, and also expense list for desired month. This can be controlled via datepicker filter.
- `/category-list`: This shows all categories present in the app. It also shows expense based on categories
- `/category`: This is a parallel route, which displays add category form
- `/expense`: This is a parallel route, which displays add expense form

## How to run this project?

1. Open terminal in desired drive/folder to clone the project
2. git clone https://github.com/ankitOneNineNineNine/Expense-Tracker.git
3. Inside the Cloned folder, Open terminal.
4. Copy content from .env.example to .env
5. Run the command `npm run build && npm start`
   <br>
   <i>The app will run on PORT 3000</i>
