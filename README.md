## Watch Whiz
A streamlined web app where users effortlessly discover upcoming and trending movies, powered by the [TMDB API](https://www.themoviedb.org/). Explore and stay informed about the latest in cinema with ease.

Project Link: [Watch Whiz](https://watch-whiz.netlify.app)

### Technologies Used
- Vite + React + TS
- Tailwind CSS
- React Query + Zustand
- TMDB API
- Axios

### Setting up local environment
1. Create an account or login to TMDB and follow the instructions to obtain your API key.
2. Create an `.env.local` file in the root folder and add the following:
```
VITE_API_URL="https://api.themoviedb.org/3/"
VITE_API_KEY="YOUR_API_KEY"
VITE_POSTER_URL="https://image.tmdb.org/"
```

**Note:** Make sure to replace `YOUR_API_KEY` with the API key you obtained from TMDB. DO NOT commit your `.env.local` file to version control to avoid exposing your API key. I have added it to the `.gitignore` file to prevent accidental commits.