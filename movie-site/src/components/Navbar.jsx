import { Link } from "react-router-dom";
import '../css/Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-band">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/favorites">Favorites</Link>
      </div>
    </div>
  );
}
 
export default Navbar