import { Link } from 'react-router-dom';
import heroImg from '../Assets/Hero.png';
import FeaturedBookCard from '../components/FeaturedBookCard';
export default function HomePage({ addToCart, booksData }) {
  return (
    <div>
      <div className="text-white py-5" style={{ backgroundColor:"#8c7642ef" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">Welcome to BookStore</h1>
              <p className="lead mb-4">
                Discover your next favorite book from our vast collection
              </p>
              
               <Link to="/browse" className="btn btn-light btn-lg">
                Browse Books
              </Link>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src={heroImg}               
                className="img-fluid rounded"
                alt="Books"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-5">Why Choose Us?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 text-center border-0 shadow">
              <div className="card-body">
                <div className="display-4 mb-3">📦</div>
                <h5 className="card-title">Fast Delivery</h5>
                <p className="card-text">
                  Get your books delivered within 3-5 business days
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 text-center border-0 shadow">
              <div className="card-body">
                <div className="display-4 mb-3">💰</div>
                <h5 className="card-title">Best Prices</h5>
                <p className="card-text">
                  Competitive prices and regular discounts on popular titles
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 text-center border-0 shadow">
              <div className="card-body">
                <div className="display-4 mb-3">⭐</div>
                <h5 className="card-title">Quality Selection</h5>
                <p className="card-text">
                  Curated collection of bestsellers and classics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Books</h2>
          <div className="row g-4">
            {booksData.slice(0, 3).map((book) => (
              <div key={book.id} className="col-md-4">
                <FeaturedBookCard book={book} addToCart={addToCart} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}