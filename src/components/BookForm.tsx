import "../styles/BookForm.css"

function BookForm () {
    return (
    <>  <div id="BookForm">
            <form>
                <div id="title"> Add / Modify Book</div>
                <section>
                <div className="input">
                    <label htmlFor="name">Name</label>
                    <input type="text"></input>
                </div>
                <div className="input">
                <label htmlFor="name">Author</label>
                <input type="text"></input>
                </div>
                </section>
                <section>
                <div className="input">
                <label htmlFor="name">Genre</label>
                <input type="text"></input>
                </div>
                <div className="input">
                <label htmlFor="name">Publication Date</label>
                <input type="text"></input> 
                </div>
                </section>
                
                
                <button id="submit">Save</button>
            </form>
        </div>
    </>
    );
};

export default BookForm;