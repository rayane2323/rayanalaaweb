import { Link } from "react-router-dom";
export default function BookCard({ book, addToCart }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={book.image} className="card-img-top" alt={book.title} />

      <div className="card-body">
        <span className="badge bg-secondary mb-2">{book.category}</span>
        <h5 className="card-title">{book.title}</h5>
        <p className="text-muted mb-1">by {book.author}</p>
        <p className="fw-bold text-primary">${book.price}</p>

        <div className="d-flex justify-content-between">
          <button className="btn btn-sm btn-primary" onClick={() => addToCart(book)}>
            Add to Cart
          </button>
          <Link to={`/details/${book.id}`} className="btn btn-sm btn-outline-secondary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
