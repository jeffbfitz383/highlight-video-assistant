import {Link,useParams} from "react-router-dom";

function Navbar(){
    return(
     <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
            <Link to="/use">Use</Link>
            <Link to="/stats">Stats</Link>
        </nav>
     </div>


    )


}
export default Navbar