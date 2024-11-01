# Movies Night Mayhem

## Project Overview
A React-based web application that allows users to browse and explore movies. Users can view movie details, add movies to a movie nights, and see similar movie recommendations. 

### Deployment URL
https://movies-night-mayhem.netlify.app/

## Technologies Used
- **React**: UI components and application logic.
- **Redux**: State management to handle user actions i.e.adding movies to the movie nights.
- **React-Router**: Client-side routing for navigation between pages.
- **Axios**: For handling API requests to fetch movie data.
- **CSS/Styled Components**: For styling the application.

## Features
- **Browse Movies**: Explore popular and similar movies.
- **Search Functionality**: Search for movies by title.
- **Movie Details**: View detailed information, including description,release date, ratings, and genre.
- **Movie Nights**: Add movies to a movie nights for future reference.

### Installation
Clone the repository and install dependencies:
git clone https://github.com/Barshaa21/Movie_Nights_Mayehem.git
npm install

### Prerequisites
- **Node.js** (>=18.12.1) and **npm** installed on your machine.
- An API key from a movie database

### Environment Variables
In the root directory of your project, create a `.env` file and add the following line:
REACT_APP_API_KEY=your_api_key_here

### Running the Application
Once all dependencies are installed and environment variables are set up, start the development server with the following command:
npm run dev

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
"# Movie_Nights_Mayehem" 
