import { Link, useParams } from "react-router-dom";

export default function BookDetailsPage({ addToCart, books }) {
  const { id } = useParams();
  const selectedBook = books.find(book => book.id === Number(id));

  if (!selectedBook) {
    return (
      <div className="container my-5 text-center">
        <h2>Book not found</h2>
        <Link to="/browse" className="btn btn-secondary mt-3">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <Link to="/browse" className="btn btn-link mb-3">
        ← Back to Browse
      </Link>

      <div className="row">
        <div className="col-md-5">
          <img
            src={selectedBook.image}
            className="img-fluid rounded shadow"
            alt={selectedBook.title}
          />
        </div>

        <div className="col-md-7">
          <span className="badge bg-secondary mb-2">{selectedBook.category}</span>

          <h1 className="mb-3">{selectedBook.title}</h1>
          <h5 className="text-muted mb-3">by {selectedBook.author}</h5>

          <div className="mb-3">
            <span className="text-warning me-2">
              {'⭐'.repeat(Math.floor(selectedBook.rating))}
            </span>
            <span>{selectedBook.rating} / 5</span>
          </div>

          <h2 className="text-primary mb-4">${selectedBook.price}</h2>

          <p className="lead">{selectedBook.description}</p>

          <div className="mt-4">
            <button
              className="btn btn-primary btn-lg me-2"
              onClick={() => addToCart(selectedBook)}
            >
              Add to Cart
            </button>

            <Link to="/browse" className="btn btn-outline-secondary btn-lg">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
