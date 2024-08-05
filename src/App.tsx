import React from 'react';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet
} from "react-router-dom"


import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';


const template_list = [{name:"alex",author:"1",genre:"a",date:"2007"},
   {name:"paul",author:"2", genre:"b",date:"2005"},
   {name:"bob",author:"3",genre:"c",date:"2004"},
   {name:"212",author:"2",genre:"d",date:"2000"}
  ];

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
    children: [
      { index:true, element: <BookList books={template_list} /> },
      {
        path: "add",
        element: <BookForm />
      }
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

/*
        <BookList books={template_list} />

*/