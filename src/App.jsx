
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";


function App()
{
  const {t , i18n} = useTranslation()

  const changeLanguage = (language) =>
  {
    i18n.changeLanguage(language)
  }

  useEffect(() => {
    AOS.init();
  }, [])

  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<Layout/>,
        children:
        [
          {
            index: true,
            element:<Home/>
          },
          {
            path:"/about",
            element:<About/>
          }
        ]
      }
    ]
  )

  return <RouterProvider router={router}/>
}

export default App
