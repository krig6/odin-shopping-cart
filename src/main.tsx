import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import { App } from './App'
import { Homepage } from './components/Homepage/Homepage'
import { Shop } from './components/Shop/Shop'
import { Cart } from './components/Cart/Cart'
import { Wishlist } from './components/Header/Wishlist'
import { CartProvider } from './context/CartProvider'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Homepage /> },
            { path: 'shop', element: <Shop /> },
            { path: 'cart', element: <Cart /> },
            { path: 'wishlist', element: <Wishlist /> },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </StrictMode>
)
