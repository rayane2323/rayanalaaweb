export default function FeaturedBookCard({ book, addToCart }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={book.image} className="card-img-top" alt={book.title} 
           style={{height: '300px', objectFit: 'cover'}} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text text-muted">{book.author}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0 text-primary">${book.price}</span>
          <button className="btn btn-primary btn-sm" onClick={() => addToCart(book)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}