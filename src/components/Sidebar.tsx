import "../styles/Sidebar.css"

function Sidebar() {
    return (
    <>
        <div className="sidebar">
            <a href="/" className="active">Home</a>
            
            <a href="/add">Add Book</a>
        </div>
    </>
    );
};

export default Sidebar;
