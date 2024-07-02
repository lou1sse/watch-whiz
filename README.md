## Watch Whiz
A streamlined web app where users effortlessly discover upcoming and trending movies, powered by the [TMDB API](https://www.themoviedb.org/). Explore and stay informed about the latest in cinema with ease.

- **Project link hosted by Netlify:** [Watch Whiz](https://watch-whiz.netlify.app)
- **Node Version:** This project uses Node.js version 18.20.0.
- This is a personal project accomplished to include in my portfolio.

### Technologies Used
- Vite + React + TS
- Tailwind CSS
- React Query + Zustand
- TMDB API
- Axios

### Setting up local environment
1. Create an account or login to [TMDB](https://www.themoviedb.org/) and follow the instructions to obtain your API key.
2. Create an `.env.local` file in the root folder and add the following:
```
VITE_API_URL="https://api.themoviedb.org/3/"
VITE_API_KEY="YOUR_API_KEY"
VITE_POSTER_URL="https://image.tmdb.org/t/p/"
```

**Note:** Make sure to replace `YOUR_API_KEY` with the API key you obtained from TMDB. **DO NOT** commit your `.env.local` file to version control to avoid exposing your API key. I have added it to the `.gitignore` file to prevent accidental commits.

### Running Locally
To run this project locally, follow these steps:

1. Clone the repository from GitHub:
```
git clone https://github.com/lou1sse/watch-whiz.git
```
2. Navigate into the project directory:
```
cd watch-whiz
```
3. Install dependencies:
```
npm install
```
4. Start the development server:
```
npm run dev
```
5. Open your browser and visit: http://localhost:5173 to view the application.

### Deployment
This project is deployed on [Netlify](https://www.netlify.com/). Any changes pushed to the main branch will automatically trigger a new deployment.