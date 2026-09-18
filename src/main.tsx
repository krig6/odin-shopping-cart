import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import { App } from './App'
import { Homepage } from './components/Homepage/Homepage'
import { Shop } from './components/Shop/Shop'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Homepage /> },
            { path: 'shop', element: <Shop /> },
            { path: 'cart', element: <div>Cart (coming soon)</div> },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
