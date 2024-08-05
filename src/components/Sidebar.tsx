import "../styles/Sidebar.css"
import {Link} from "react-router-dom"

function Sidebar() {
    return (
    <>
        <div className="sidebar">
            <Link to={"/"} >Home</Link>
            
            <Link to={"/add"}>Add Book</Link>
        </div>
    </>
    );
};

export default Sidebar;
