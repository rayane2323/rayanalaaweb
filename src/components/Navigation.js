import { Link } from "react-router-dom";

export default function Navigation({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          📚 BookStore
        </Link>

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/browse">Browse Books</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart {cartCount > 0 && `(${cartCount})`}
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
