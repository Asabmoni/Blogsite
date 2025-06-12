import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import axios from "axios";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage, { ArticleLoader } from "./pages/ArticlePage";
import Layout from "./Layout";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/articles",
        element: <ArticlesListPage />,
      },
      {
        path: "/articles/:name", // -> /articles/learn-react
        element: <ArticlePage />,
        loader: ArticleLoader,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
