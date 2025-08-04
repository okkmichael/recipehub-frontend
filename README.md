# RecipeHub Frontend

This is the React frontend for **RecipeHub**, a MERN stack recipe sharing application.

---

## Features

- User registration, login, and logout
- Browse, create, edit, and delete recipes
- Save/unsave recipes to your profile
- View your own and saved recipes
- Responsive design with Tailwind CSS
- Authentication and protected routes
- API integration with backend

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)

### Installation

```sh
git clone https://github.com/yourusername/recipehub-frontend.git
cd recipehub-frontend
npm install
```

### Environment Variables

Create a `.env` file in the root with the following:

```
VITE_API_URL=https://your-backend-service.onrender.com/api
```
*(Replace with your actual backend URL after deployment)*

### Running the App

```sh
npm run dev
```
The app will start on `http://localhost:5173` (or similar).

---

## Project Structure

- `/src/pages` — Main pages (Home, Login, Register, RecipeDetail, etc.)
- `/src/components` — Reusable UI components (Navbar, RecipeCard, etc.)
- `/src/context` — Context API for authentication and global state
- `/src/index.css` — Tailwind CSS and custom styles

---

## Deployment

You can deploy this frontend to [Render](https://render.com/) or any static site hosting provider.

**Render Deployment Steps:**
1. Push your code to GitHub.
2. Create a new Static Site on Render, connect your repo.
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variable:  
   `VITE_API_URL=https://your-backend-service.onrender.com/api`
6. Deploy!

---

## License

MIT

---

## Contact

For questions or support, open an issue or contact [J-Vidale](https://github.com/J-Vidale).
