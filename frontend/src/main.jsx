import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import HealthCheck from './pages/HealthCheck.jsx'
import Admin from './pages/Admin.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Protected from './components/Protected.jsx'
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/healthCheck",
        element: <HealthCheck />
      }, {
        path: "/admin",
        element: (
        <Protected>
          <Admin />
        </Protected>
        )
      },
      {
        path: "/skills",
        element: <Skills />
      }, {
        path: "/projects",
        element: <Projects />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
