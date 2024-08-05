import Book from "./types";

export function get_books():Array<Book>{
    let books = localStorage.getItem("books");
    if(books == null)
        return [];
    return JSON.parse(books);
}

export function add_book(book:Book) {
    let str = localStorage.getItem("books");
    if(str === null){
        initialize_books();
        str = localStorage.getItem("books")
    }
    let books = JSON.parse(str as string) as Array<Book>;
    localStorage.setItem("books", JSON.stringify([...books, book]));

}

export function initialize_books(){
    localStorage.setItem("books",JSON.stringify([])); 
}