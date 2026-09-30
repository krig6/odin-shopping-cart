import { Outlet } from 'react-router'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer'

export const App = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
