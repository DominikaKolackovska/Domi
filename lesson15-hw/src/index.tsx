import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { ProductListPage } from "./pages/ProductListPage";
import { AddProductPage } from "./pages/AddProductPage";
import { Layout } from "./components/Layout";
import {
  productDetailLoader,
  ProductDetailPage,
} from "./pages/ProductDetailPage";
import { Lesson15hwPage } from "./pages/Lesson15hwPage";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "product-list",
        element: <ProductListPage />,
      },
      {
        path: "add-product",
        element: <AddProductPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetailPage />,
        loader: productDetailLoader,
      },
      {
        path: "lesson15-hw",
        element: <Lesson15hwPage />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();