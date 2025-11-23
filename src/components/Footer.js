import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 mb-3">
            <h5>BookStore</h5>
            <p className="text-white-50">Your trusted online bookstore since 2025</p>
          </div>

          <div className="col-md-4 mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">

              <li>
                <Link to="/" className="text-white-50 text-decoration-none">Home</Link>
              </li>

              <li>
                <Link to="/browse" className="text-white-50 text-decoration-none">Browse</Link>
              </li>

              <li>
                <Link to="/about" className="text-white-50 text-decoration-none">About</Link>
              </li>

              <li>
                <Link to="/contact" className="text-white-50 text-decoration-none">Contact</Link>
              </li>

            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6>Connect With Us</h6>
            <p className="text-white-50">
              Email: info@bookstore.com<br />
              Phone: 03123456
            </p>
          </div>

        </div>

        <hr className="bg-secondary" />

        <div className="text-center text-white-50">
          &copy; 2025 BookStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
