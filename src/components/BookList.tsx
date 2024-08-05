import {Link} from "react-router-dom"

import Book from "../types";
import "../styles/BookList.css";
import {get_books} from "../books";

function BookList() {
    let books:Array<Book> = get_books();
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
                        <Link to={`/edit/${index}`}>Edit</Link>
                        <Link to={`/delete/${index}`}>Delete</Link>
                    </td>
                    </tr>)}
            </tbody>
        </table>
        </div>
    );
};

export default BookList;