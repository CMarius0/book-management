import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BookList from './components/BookList';


function App() {
  return (
    <>
      <Header />
      <div id='container'>
        <Sidebar />
        <BookList books={template_list} />
      </div>
    </>
  );
}

const template_list = [{name:"alex",author:"1",genre:"a",date:"2007"},
   {name:"paul",author:"2", genre:"b",date:"2005"},
   {name:"bob",author:"3",genre:"c",date:"2004"},
   {name:"212",author:"2",gemre:"d",date:"2000"}
  ];
export default App;
