import { Link } from "react-router-dom";

 const NotFound = () => {
    return (
        <div className="not-found"> 
            <h2>Sorry....!</h2>
            <p>Page not found</p>
            &nbsp;
            <div>
                <Link to='/'> Click to back to home page....</Link>
            </div>
        </div>
     );
 }
  
 export default NotFound;