import { createBrowserRouter } from 'react-router'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import PokemonDetailsPage from './pages/PokemonDetailsPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

const router = createBrowserRouter([
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