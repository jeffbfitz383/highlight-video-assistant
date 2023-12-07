import {Link,useParams} from "react-router-dom";

function NavBar(){
    return(
     <div>
        <nav class="navbar">
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
            <Link to="/use">Use</Link>
            <Link to="/stats">Stats</Link>
        </nav>
     </div>


    )


}
export default NavBar