import { createBrowserRouter, createHashRouter } from 'react-router'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import PokemonDetailsPage from './pages/PokemonDetailsPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

// GitHub Pages has no server to send every path to index.html, so the built app uses #/about.
const createRouter = import.meta.env.PROD ? createHashRouter : createBrowserRouter

const router = createRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'pokemon/:id', element: <PokemonDetailsPage /> },
          { path: 'login', element: <LoginPage /> },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
])

export default router