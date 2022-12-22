// * Imports
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation-bar">
      <div>
        <Link to={`/venta`}>+</Link>
      </div>
      <div>
        <Link to={`/lista`}>Lista</Link>
      </div>
    </nav>
  );
}
