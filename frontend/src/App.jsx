import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'

// Create our application router paths
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
      </div>
    )
  },
  {
    path: '/login',
    element: (
      <div>
        <Navbar />
        <h1 className="text-center text-2xl mt-10">Login Page</h1>
      </div>
    )
  },
  {
    path: '/signup',
    element: (
      <div>
        <Navbar />
        <h1 className="text-center text-2xl mt-10">Signup Page</h1>
      </div>
    )
  }
])

function App() {
  return (
    <div>
      {/* Provide the router to our entire application */}
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
