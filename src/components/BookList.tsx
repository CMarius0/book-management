import {Link} from "react-router-dom"
import { useState } from "react";

import "../styles/BookList.css";
import {DeleteBook, get_books} from "../books";

function deleteAction(event:any, id:Number) {
    event.preventDefault();
    if(window.confirm("Are you sure you want to delete this book?")){
        DeleteBook(id);
    }
}



function BookList() {
    let [books, setBooks] = useState(get_books());
    //let books:Array<Book> = get_books();
    return (
        <div>
        <table id="table">
            <thead>
                <tr>
                    <td id="header-name">Name</td>
                    <td id="header-author">Author</td>
                    <td id="header-genre">Genre</td>
                    <td id="header-date">Publication date</td> 
                    <td id="header-actions">Actions</td>
                </tr>
            </thead>
            <tbody>
                {books.map((item, index) =><tr>
                    <td>{item.name}</td>
                    <td>{item.author}</td>
                    <td>{item.genre}</td>
                    <td>{item.date}</td> 
                    <td>
                        <Link to={`/edit/${item.id}`}>Edit</Link>
                        <Link to={`/delete/${item.id}`} onClick={(event) => {deleteAction(event,item.id); setBooks(get_books())}} >Delete</Link>
                    </td>
                    </tr>)}
            </tbody>
        </table>
        </div>
    );
};

export default BookList;