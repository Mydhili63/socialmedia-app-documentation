import{Link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>
                The Dojo Blog
            </h1>
            <div className="Link">
                <Link to="/">Home</Link>
                    <Link to="/create" style={{
                        color: "white",
                        backgroundColor:'#0059ff',
                        borderRadius:'8px',
                       
                    }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;