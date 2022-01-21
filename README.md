# Nodejs Template Setup

## Folder Structure

```
  src
    api
    config
    helper
    middleware
    models
    validator
```

## Running the server

```
cp .env.example .env
```

Fill the .env

```
npm run dev
```

## Pushing to repository

Update .env.example for new .env variables.

```
git pull origin development
npm run fmt // Formats the code
git add .
git commit -m "feat: "
git push origin <branch-name>
```

Do not push to master branch / development branch

Master -> for final merges from development
Development -> for merges from all the other branches
Create Your own branch -> Pull from development branch and merge your changes

## Dependencies

- api-query-params
- bcryptjs
- dotenv
- express
- express-async-handler
- jsonwebtoken
- module-alias
- mongoose
- morgan
