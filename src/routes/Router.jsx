import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
 import BookDetails from "../pages/Bookdetails";
import About from "../pages/About";
import Contact from "../pages/Contact";

import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/listed-books", element: <ListedBooks /> },
      { path: "/pages-to-read", element: <PagesToRead /> },
 { path: "/book:bookId", element: <BookDetails />},
 {
  path: "/about",
  element: <About />
},
{
  path: "/contact",
  element: <Contact />
},
      { path: "*", element: <NotFound /> }
    ],
  },
]);

export default router;
