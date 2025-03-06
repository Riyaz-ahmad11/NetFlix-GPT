# NetFlix-GPT

Netflix GPT is a React-based application that integrates movie recommendations from TMDB and OpenAI's GPT model to enhance the user experience. The app features authentication, movie browsing, and an AI-powered search functionality.

## Features

### Authentication
- Login/Sign Up using Firebase
- Form validation using `useRef` Hook
- Update profile details
- Sign out functionality
- Redirect users based on authentication status

### Movie Browsing
- Fetch and display now-playing movies from TMDB
- Custom hooks for fetching movie data
- Redux store for managing movie state
- Embedded YouTube trailer with autoplay and mute features
- TailwindCSS for responsive UI

### AI-Powered Search
- GPT-powered movie search
- Fetch movie suggestions using OpenAI and TMDB APIs
- Display AI-generated movie recommendations
- Multi-language support

## Project Setup

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/netflix-gpt.git
   cd netflix-gpt
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following keys:
     ```plaintext
     REACT_APP_TMDB_API_KEY=your_tmdb_api_key
     REACT_APP_OPENAI_API_KEY=your_openai_api_key
     ```
   - Add `.env` to `.gitignore`

### Running the Project
To start the development server:
```bash
npm start
# or
yarn start
```

## Technologies Used
- React (Create React App)
- TailwindCSS (for styling)
- Firebase (for authentication)
- Redux (state management)
- TMDB API (for movie data)
- OpenAI API (for AI-powered search)
- React Router (for navigation)

## Deployment
To deploy the app to production:
```bash
npm run build
# or
yarn build
```
Then host the `build/` folder on any static hosting provider like Firebase Hosting, Vercel, or Netlify.

## Contribution
Feel free to fork the repository and submit pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.

