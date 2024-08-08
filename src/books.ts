import Book from "./types";

/**
 * Mock api for remembering the books
 */



/**
 * fetches the books
 * @returns array of books
 */
export function get_books():Array<Book>{
    let books = localStorage.getItem("books");
    if(books == null)
        return [];
    return JSON.parse(books);
}

/**
 * fetches a specific book by id
 * @param id number
 * @returns Book with  the coresponding id or null if not found
 */
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

/**
 * adds a book to the database
 * @param book Book
 */
export function add_book(book:Book) {
    let str = localStorage.getItem("books");
    if(str === null){
        initialize_books();
        str = localStorage.getItem("books")
    }
    let books = JSON.parse(str as string) as Array<Book>;
    localStorage.setItem("books", JSON.stringify([...books, book]));

}

/**
 * initialises the storage for the books
 */
export function initialize_books(){
    localStorage.setItem("books",JSON.stringify([])); 
}
/**
 * fetches the next free id
 * @returns Number
 */
export function next_id(): Number{
    let id = localStorage.getItem("nextId");
    if(id === null){
        localStorage.setItem("nextId", "0");
        return next_id();
    }
    localStorage.setItem("nextId",String(Number(id)+1));
    return Number(id);
}

/**
 * replaces the book with the same id from storage
 * @param book Book
 */
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

/**
 * deletes the book with the coresponding id
 * @param id Number
 */
export function DeleteBook(id: Number) {
    let str = localStorage.getItem("books");
    if(str == null)
        return;
    let books:Array<Book> = JSON.parse(str);
    let rez = books.filter((book) => book.id!==id);
    localStorage.setItem("books", JSON.stringify(rez));
    
}