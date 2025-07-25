import { Hero } from './Landing/Hero'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout'
import About from './About/About'
import Contact from './Contact/Contact'
import Country from './Country/Country'
import CountryData from './Country/CountryData/CountryData'
import Posts from './Component/Posts'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Hero/>
        },
        {
          path:"/about",
          element: <About/>
        },
        {
          path: "/country",
          element:<Country/>
        },
        {
          path: "/country/:id",
          element:<CountryData/>
          
        },
        {
          path: "/posts",
          element:<Posts/>
        },
        {
          path: "/contact",
          element:<Contact/>
        },
      ]

    }
  ])

  return <RouterProvider router={router}/>;
}

export default App
