import { redirect } from "react-router-dom";
import { next_id, add_book, getBookById, EditBook } from "./books";
import Book from "./types";

/**
 * an emply book for the default of add
 */
const emptyBook:Book = {
    id:0,
    name:"",
    author: "",
    genre: "",
    date: "",
};

/**
 * adds the book from BookForm into the database
 * @param event submit event of form
 */
function handleAdd(event:any) {
    event.preventDefault();
    let id = next_id();
    let book:Book = {
        id:id,
        name: event.target.name.value,
        author: event.target.author.value,
        genre: event.target.genre.value,
        date: event.target.date.value,
    }
    add_book(book);
}

/**
 * updates the book from the database with the info from BookForm
 * @param event submit event of form
 */
function handleEdit(event:any) {
    event.preventDefault();
    let book = {
        id: Number(event.target.id.value),
        name: event.target.name.value,
        author: event.target.author.value,
        genre: event.target.genre.value,
        date: event.target.date.value,
        
    }
    EditBook(book);
    
}


/**
 * handler for setting up BookForm for add operation
 * @param event 
 */
export async function addLoader() {
    let book = emptyBook;
    let submit = handleAdd;
    return { book, submit };
};

/**
 * handler for setting up BookForm for edit operation
 * @param event 
 */ 
export async function editLoader({ params }: {params:any}) {
    let book = getBookById(Number(params.id));
    if(book === null){
        return redirect("/");
    }
    let submit = handleEdit;
    return { book, submit };
}