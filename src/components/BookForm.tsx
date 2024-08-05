import "../styles/BookForm.css"
import Book from "../types";
import { add_book } from "../books";

export function loader({params}:{params:any}){

}


function BookForm () {

    let handlesubmit = (event:any) => {
        event.preventDefault();
        let book:Book = {
            name: event.target.name.value,
            author: event.target.author.value,
            genre: event.target.genre.value,
            date: event.target.date.value,
        }
        add_book(book);
    }
    return (
    <>  <div id="BookForm">
            <form onSubmit={handlesubmit}>
                <div id="title"> Add / Modify Book</div>
                <section>
                <div className="input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"></input>
                </div>
                <div className="input">
                <label htmlFor="name">Author</label>
                <input type="text" name="author"></input>
                </div>
                </section>
                <section>
                <div className="input">
                <label htmlFor="name">Genre</label>
                <input type="text" name="genre"></input>
                </div>
                <div className="input">
                <label htmlFor="name">Publication Date</label>
                <input type="text" name="date" placeholder="YYYY-MM-DD"></input> 
                </div>
                </section>
                
                
                <button id="submit" type="submit">Save</button>
            </form>
        </div>
    </>
    );
};

export default BookForm;