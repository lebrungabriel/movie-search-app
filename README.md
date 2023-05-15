# Movie Search App

This is a Movie Search App built with React.js and Next.js. It allows users to search for movies, view movie details, and filter movies based on popularity and top-rated categories.

## Features

- Search movies: Users can enter a movie title in the search bar to find relevant movies.
- View movie details: Users can click on a movie from the list to view detailed information about the movie, including title, release date, average rating, vote count, synopsis, and poster image.
- Filter movies: Users can filter movies based on popularity or top-rated categories.
- Redux integration: The app uses Redux for state management, allowing seamless communication between components and maintaining a global state.

## File Structure

The project has the following file structure:

- components: Contains reusable UI components used in the app, such as DetailMovie, Filter, ListItem, and SearchBar.
- reducers: Contains the Redux reducer file movies.js, which manages the state related to movies.
- pages: Contains the main page file Home.jsx, where the app's main functionality is implemented.
- README.md: The documentation file you are currently reading.

## Getting Started

To run the Movie Search App on your local machine, follow these steps:

1. Clone the repository:
2. Move to the repository: cd movie-search-app
3. Install dependencies: yarn install or npm install depending on which package manager you're using
4. Set up an API key from The Movie Database (TMDB)
5. Create a .env file in the root directory of the project
6. Add your API key to the .env file
7. Run your development server: yarn dev or npm run dev depending on which package manager you're using
8. Open your browser and access the app at http://localhost:3001 or http://localhost:3000

## The Movie Search App relies on the following dependencies:

React.js: JavaScript library for building user interfaces.
Next.js: React framework for server-side rendering and static site generation.
React-icons: Library for including popular icons in React applications.
React-redux: Official Redux bindings for React.
TailwindCSS: utility-first CSS framework
