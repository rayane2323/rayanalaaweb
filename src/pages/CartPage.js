import { useNavigate } from "react-router-dom";

export default function CartPage({ cart, removeFromCart, updateQuantity, calculateTotal }) {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h1 className="mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-5">
          <h3 className="text-muted">Your cart is empty</h3>
          <p>Start adding some books!</p>

          
          <button className="btn btn-primary mt-3" onClick={() => navigate("/browse")}>
            Browse Books
          </button>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {cart.map(item => (
              <div key={item.id} className="card mb-3 shadow-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img src={item.image} className="img-fluid rounded" alt={item.title} />
                    </div>
                    <div className="col-md-4">
                      <h5>{item.title}</h5>
                      <p className="text-muted mb-0">{item.author}</p>
                    </div>
                    <div className="col-md-2">
                      <p className="mb-0 fw-bold">${item.price}</p>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <button className="btn btn-outline-secondary" onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                        <button className="btn btn-outline-secondary" onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>
                    <div className="col-md-1">
                      <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>×</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>${calculateTotal()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span>$5.00</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total:</strong>
                  <strong className="text-primary">
                    ${(parseFloat(calculateTotal()) + 5).toFixed(2)}
                  </strong>
                </div>

                <button
                  className="btn btn-primary w-100 mb-2"
                  onClick={() => alert("Proceeding to checkout...")}
                >
                  Proceed to Checkout
                </button>

                
                <button
                  className="btn btn-outline-secondary w-100"
                  onClick={() => navigate("/browse")}
                >
                  Continue Shopping
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
