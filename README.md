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

- `dev`: Run the codebase in dev mode
- `start`: Run the codebase for prod mode
- `lint`: Lint the project through eslint configurations (.eslintrc)
- `lint:fix`: Link and Fix any solvable errors
- `test`: Run unit tests
- `coverage`: Run unit test coverage using coverage@v8
- `prepare`: Install husky

# API

- `/[newspaper]/[section-name]`: This will hit respective API for (newspaper) and return JSION feed for section provided. The returned JSON value will be converted to RSS XML
  <br>
  Example: After running the project, hit `curl http://localhost:[port]/guardian/politics`

  ### Supported nespaper for routes

  - `Guardian` - `curl http://localhost:[port]/guardian/[section-name]`
    <br>
    <i> section-name needs to be in kebab-case </i>

## How to run this project?

1. Open terminal in desired drive/folder to clone the project
2. git clone https://github.com/ankitOneNineNineNine/rss-feed.git
3. Inside the Cloned folder, Open terminal.
4. Copy content from .env.example to .env
5. Run the command `docker run -p <PORT>:<PORT> -it $(docker build -q .)`
   <br>
   <i>The app will run on PORT 5000 based on .env.example. You can change this at your .env variable - PORT</i>
