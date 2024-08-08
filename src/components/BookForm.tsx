import { useState } from "react";
import "../styles/BookForm.css"
import Book from "../types";
import { Form, useLoaderData, useNavigate  } from "react-router-dom";

/**
 * Verifies if name input is valid
 */
function validateName(e:any) {
    if(e.target.value === ""){
        e.target.className = "alert";
        let obj = document.getElementById("warning-name") as HTMLElement;
        obj.innerHTML = "Please enter a name"
    }
    else{
        e.target.className = ""
        let obj = document.getElementById("warning-name") as HTMLElement;
        obj.innerHTML = ""
    }
}

/**
 * Verifies if author input is valid
 */
function validateAuthor(e:any) {
    if(e.target.value === ""){
        e.target.className = "alert";
        let obj = document.getElementById("warning-author") as HTMLElement;
        obj.innerHTML = "Please enter the author"
    }
    else{
        e.target.className = ""
        let obj = document.getElementById("warning-author") as HTMLElement;
        obj.innerHTML = ""
    }
}


/**
 * Verifies if genre input is valid
 */
function validateGenre(e:any) {
    if(e.target.value === ""){
        e.target.className = "alert";
        let obj = document.getElementById("warning-genre") as HTMLElement;
        obj.innerHTML = "Please enter a genre"
    }
    else{
        e.target.className = ""
        let obj = document.getElementById("warning-genre") as HTMLElement;
        obj.innerHTML = ""
    }
}


/**
 * Verifies if date input is valid
 */
function validateDate(e:any) {
    let str = e.target.value as String;
    if(str === "") {
        e.target.className = "alert";
        
        let obj = document.getElementById("warning-date") as HTMLElement;
        obj.innerHTML = "Please ender date";
        return;

    }
    let regexp = RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");
    if(str.match(regexp) === null) {
        e.target.className = "alert";
        let obj = document.getElementById("warning-date") as HTMLElement;
        obj.innerHTML = "Date format is invalid";
        return;
    }
    let numbers = str.split("-")
    if( Number(numbers[0]) > new Date(Date.now()).getFullYear() || Number(numbers[1]) < 1 || Number(numbers[1]) > 12){
        e.target.className = "alert";
        let obj = document.getElementById("warning-date") as HTMLElement;
        obj.innerHTML = "Date is invalid";
        return;
    }
    let maxday:number = 31;
    switch(Number(numbers[1])){
        case 1: maxday = 31; break;
        case 2: maxday = 28; break;
        case 3: maxday = 31; break;
        case 4: maxday = 30; break;
        case 5: maxday = 31; break;
        case 6: maxday = 30; break;
        case 7: maxday = 31; break;
        case 8: maxday = 31; break;
        case 9: maxday = 30; break;
        case 10: maxday = 31; break;
        case 11: maxday = 30; break;
        case 12: maxday = 31; break;
    }
    if(Number(numbers[2]) < 0 || Number(numbers[2]) > maxday){
        e.target.className = "alert";
        if("alert" in e.target.classlist){ alert("e")}
        let obj = document.getElementById("warning-date") as HTMLElement;
        obj.innerHTML = "Date is invalid";
        return;
    }
    e.target.className = "";
    let obj = document.getElementById("warning-date") as HTMLElement;
    obj.innerHTML = "";
}


/**
 * verifies if the form is ready for submission
 * @returns true if the form is ready for submission, otherwise false
 */
function canSubmit() {
    let form = document.getElementById("form") as any;
    if(
        form.name.value === ""
        || form.author.value === ""
        || form.genre.value === ""
        || form.date.value === ""
    )
        return false;
    let name = document.getElementById("warning-name") as HTMLElement;
    if(name.innerHTML !== "")
        return false;
    let author = document.getElementById("warning-author") as HTMLElement;
    if(author.innerHTML !== "")
        return false;
    let genre = document.getElementById("warning-genre") as HTMLElement;
    if(genre.innerHTML !== "")
        return false;
    let date = document.getElementById("warning-date") as HTMLElement;
    if(date.innerHTML !== "")
        return false;
    return true;
}


function BookForm () {
    /**
     * initialising data for use in the form
     */
    const navigate = useNavigate();
    const {book, submit} = useLoaderData() as {book:Book, submit:Function};

    const [ name, setName ] = useState(String(book.name));
    const [ author, setAuthor ] = useState(String(book.author));
    const [ genre, setGenre ] = useState(String(book.genre));
    const [ date, setDate ] = useState(String(book.date));
    const [ disabled, setDisabled ] = useState(true);

    /**
     * Function for updating states of values
     * @param e event handler
     * @param setFunction react setState function for updating a value
     */
    function HandleChange(e:any, setFunction:React.Dispatch<React.SetStateAction<string>>) {
        setFunction(e.target.value);
    }


    return (
    <>  <div id="BookForm">
            <Form onSubmit={(event:any) =>{submit(event); navigate("/")}} onChange={() => {setDisabled(!canSubmit())}} method="post" id="form">
                <div id="title"> Add / Modify Book</div>
                <input id="id" name="id" type="number" value={Number(book.id)}></input>
                <section>
                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={name} onChange={(e:any)=>{HandleChange(e,setName); validateName(e)}}></input>
                        
                        <div className="warning" id="warning-name"></div>
                    </div>
                    <div className="input">
                        <label htmlFor="name">Author</label>
                        <input type="text" name="author" value={author} onChange={(e:any)=>{HandleChange(e,setAuthor); validateAuthor(e)}}></input>
                        <div className="warning" id="warning-author"></div>
                    </div>
                </section>
                <section>
                    <div className="input">
                        <label htmlFor="name">Genre</label>
                        <input type="text" name="genre" value={genre} onChange={(e:any)=>{HandleChange(e,setGenre); validateGenre(e)}}></input>
                        <div className="warning" id="warning-genre"></div>
                    </div>
                    <div className="input">
                        <label htmlFor="name">Publication Date</label>
                        <input type="text" name="date" placeholder="YYYY-MM-DD" value={date} onChange={(e:any)=>{HandleChange(e,setDate); validateDate(e)}}></input> 
                        <div className="warning" id="warning-date"></div>
                    </div>
                </section>
                
                <button id="submit" type="submit" disabled={disabled}>Save</button>
            </Form>
        </div>
    </>
    );
};

export default BookForm;