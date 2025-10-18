import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Root from './components/root/Root.jsx'
import Home from './components/home/Home.jsx'
import Apps from './components/AllApps/AllApps.jsx'
import Install from './components/install/Install.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('../public/data.json')

      },
      { path: "apps", Component: Apps },
      { path: "install", Component: Install }
    ]
  },
  {
    path: "apps",
    element: <div>apps</div>
  },
  {
    path: "install",
    element: <div>install</div>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
