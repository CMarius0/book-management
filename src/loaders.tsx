import { redirect } from "react-router-dom";
import { next_id, add_book, getBookById, EditBook } from "./books";
import Book from "./types";

const emptyBook:Book = {
    id:0,
    name:"",
    author: "",
    genre: "",
    date: "",
};
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


export async function addLoader() {
    let book = emptyBook;
    let submit = handleAdd;
    return { book, submit };
};

export async function editLoader({ params }: {params:any}) {
    let book = getBookById(Number(params.id));
    if(book === null){
        return redirect("/");
    }
    let submit = handleEdit;
    return { book, submit };
}