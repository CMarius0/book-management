import Book from "./types";

export function get_books():Array<Book>{
    let books = localStorage.getItem("books");
    if(books == null)
        return [];
    return JSON.parse(books);
}

export function getBookById(id:Number):Book | null { 
    let str = localStorage.getItem("books");
    if(str == null)
        return null;
    let books:Array<Book> = JSON.parse(str);
    let rez = books.find((element) => element.id === id);
    if (rez === undefined)
        return null;
    return rez; 
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

export function next_id(): Number{
    let id = localStorage.getItem("nextId");
    if(id === null){
        localStorage.setItem("nextId", "0");
        return next_id();
    }
    localStorage.setItem("nextId",String(Number(id)+1));
    return Number(id);
}

export function EditBook(book: Book) {
    let str = localStorage.getItem("books");
    if(str == null)
        return;
    let books:Array<Book> = JSON.parse(str);
    for(let i = 0; i<books.length; i++){
        if(books[i].id === book.id){
            books[i] = book;
            
        }
    }

     localStorage.setItem("books", JSON.stringify(books));
}


export function DeleteBook(id: Number) {
    let str = localStorage.getItem("books");
    if(str == null)
        return;
    let books:Array<Book> = JSON.parse(str);
    let rez = books.filter((book) => book.id!==id);
    localStorage.setItem("books", JSON.stringify(rez));
    
}