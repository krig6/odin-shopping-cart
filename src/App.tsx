import { useState } from 'react'

export const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white text-gray-900">
            <h1 className="text-3xl font-bold">
                Vite + React + TypeScript Template
            </h1>

            <p className="text-gray-600">Start building your project here.</p>

            <button
                onClick={() => setCount((c) => c + 1)}
                className="rounded bg-black px-4 py-2 text-white transition hover:opacity-80"
            >
                Count: {count}
            </button>
        </div>
    )
}

export default App
