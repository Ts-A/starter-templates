# React Template Setup

## Folder Structure

```
  src
    components // To store react components that can be re-used
    layout // To wrap components
    pages // To wrap layout and components for a particular url. Used along with react-router v6
    ui // To store reusable react ui features like buttons, etc.
    styles // To store css files. Note: use module.css instead of .css
    assets // To store images
    helper // To store helper functions
```

## Creating components

To create a new component

```
mkdir src/<component-name>
touch src/<component-name>/index.js
```

To create a css style page for that component

```
touch src/styles/<component-name>.module.css
```

Similarly for pages, layout, and ui

## Running the server

```
cp .env.example .env
```

Fill the .env

```
npm start
```

## Pushing to repository

Update .env.example for new .env variables. Note: Add .env variables as REACT_APP_VARIABLE

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

react
react-router-dom v6
prettier -D
@material-ui /core /icons
