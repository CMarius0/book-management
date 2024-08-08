import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"

import { addLoader, editLoader } from './loaders';

import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import ErrorPage from './components/ErrorPage';


/**
 * Creates the browserRouter for the page
 */
const router = createBrowserRouter ([
  {
    path: "/",
    element: <>
      <Header />
      <div id='container'>
        <Sidebar />
        <Outlet />
      </div>
    </>,
    errorElement: <ErrorPage />,
    children: [
      { index:true, element: <BookList /> },
      {
        path: "add",
        loader: addLoader,
        element: <BookForm />
      },
      {
        path: "edit/:id",
        loader: editLoader,
        element: <BookForm />
      },
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
