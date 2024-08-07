import { useState } from "react";
import "../styles/BookForm.css"
import Book from "../types";
import { Form, Navigate, redirect, useLoaderData, useNavigate  } from "react-router-dom";





function BookForm () {
    const navigate = useNavigate();
    const {book, submit} = useLoaderData() as {book:Book, submit:Function};

    //test function
    console.log(book.id,book.name)

    const [ name, setName ] = useState(String(book.name));
    const [ author, setAuthor ] = useState(String(book.author));
    const [ genre, setGenre ] = useState(String(book.genre));
    const [ date, setDate ] = useState(String(book.date));


    function HandleChange(e:any, setFunction:React.Dispatch<React.SetStateAction<string>>) {
        setFunction(e.target.value);
    }


    return (
    <>  <div id="BookForm">
            <Form onSubmit={(event:any) =>{submit(event); navigate("/")}} method="post" id="form">
                <div id="title"> Add / Modify Book</div>
                <input id="id" name="id" type="number"  value={Number(book.id)}></input>
                <section>
                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={name} onChange={(e:any)=>{HandleChange(e,setName)}}></input>
                    </div>
                    <div className="input">
                        <label htmlFor="name">Author</label>
                        <input type="text" name="author" value={author} onChange={(e:any)=>{HandleChange(e,setAuthor)}}></input>
                    </div>
                </section>
                <section>
                    <div className="input">
                        <label htmlFor="name">Genre</label>
                        <input type="text" name="genre" value={genre} onChange={(e:any)=>{HandleChange(e,setGenre)}}></input>
                    </div>
                    <div className="input">
                        <label htmlFor="name">Publication Date</label>
                        <input type="text" name="date" placeholder="YYYY-MM-DD" value={date} onChange={(e:any)=>{HandleChange(e,setDate)}}></input> 
                    </div>
                </section>
                
                
                <button id="submit" type="submit">Save</button>
            </Form>
        </div>
    </>
    );
};

export default BookForm;