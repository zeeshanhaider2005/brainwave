import './App.css'
import { Header } from './Components/Header'
import {Footer} from './Components/Footer'
import { Landings } from './Landing/Landings'
import { Features } from './Features/Features'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Pricing } from './Pricing/Pricing'
import { Roadmap } from './Roadmap/Roadmap'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Header /><Landings /><Footer /> </>
    },
    {
      path: "/features",
      element:<><Header /><Features /><Footer /> </>
    },
    {
      path: "/pricing",
      element:<><Header /><Pricing /><Footer /> </>
    },
    {
      path: "/roadmap",
      element:<><Header /><Roadmap /><Footer /> </>
    },
  ])

  return (
    <>
      
      <RouterProvider router={router}/>
    </>
  )
}

export default App
