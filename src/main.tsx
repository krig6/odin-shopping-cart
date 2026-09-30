import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import { App } from './App'
import { Homepage } from './components/Homepage/Homepage'
import { Shop } from './components/Shop/Shop'
import { Cart } from './components/Collection/Cart'
import { Wishlist } from './components/Collection/Wishlist'
import { GameDetail, GameNotFound } from './components/GameDetail/GameDetail'
import { CartProvider } from './context/CartProvider'
import { WishlistProvider } from './context/WishlistProvider'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Homepage /> },
            { path: 'shop', element: <Shop /> },
            { path: 'cart', element: <Cart /> },
            { path: 'wishlist', element: <Wishlist /> },
            { path: 'game/:id', element: <GameDetail /> },
            { path: '*', element: <GameNotFound /> },
        ],
    },
], { basename: import.meta.env.BASE_URL })

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CartProvider>
            <WishlistProvider>
                <RouterProvider router={router} />
            </WishlistProvider>
        </CartProvider>
    </StrictMode>
)
