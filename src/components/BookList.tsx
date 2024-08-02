import "../styles/BookList.css"

function BookList({books}:{books:Array<any>}) {

    return (
        <div>
        <table id="table">
                <tr>
                    <td id="header-name">Name</td>
                    <td id="header-author">Author</td>
                    <td id="header-genre">Genre</td>
                    <td id="header-date">Publication date</td> 
                    <td id="header-actions">Actions</td>
                </tr>
            
            <tbody>
                {books.map((item, index) =><tr>
                    <td>{item.name}</td>
                    <td>{item.author}</td>
                    <td>{item.genre}</td>
                    <td>{item.date}</td> 
                    <td>
                        <a>Edit</a>
                        <a>Delete</a>
                    </td>
                    </tr>)}
            </tbody>
        </table>
        </div>
    );
};

export default BookList;