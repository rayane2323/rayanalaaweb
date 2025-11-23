import aboutImg from '../Assets/About.png';

export default function AboutPage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">About BookStore</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={aboutImg}                        
            className="img-fluid rounded shadow mb-4"
            alt="Library"
          />
        </div>
           <div className="col-md-6">
          <h3 className="mb-3">Our Story</h3>
          <p>
            Welcome to BookStore, your premier online destination for books of all
            genres. Founded in 2024, we are passionate about connecting readers with
            the books they love.
          </p>
          <p>
            Our mission is to make quality literature accessible to everyone, offering
            a carefully curated selection of classics, bestsellers, and hidden gems.
          </p>
          <h3 className="mt-4 mb-3">What We Offer</h3>
          <ul className="list-unstyled">
            <li className="mb-2">✓ Extensive collection of books across all genres</li>
            <li className="mb-2">✓ Competitive prices and regular promotions</li>
            <li className="mb-2">✓ Fast and reliable shipping</li>
            <li className="mb-2">✓ Excellent customer service</li>
            <li className="mb-2">✓ Easy returns and exchanges</li>
          </ul>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h3 className="mb-4">Our Values</h3>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-body text-center">
              <div className="display-4 mb-3">📖</div>
              <h5>Quality</h5>
              <p className="text-muted">
                We select only the best books for our customers
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-body text-center">
              <div className="display-4 mb-3">🤝</div>
              <h5>Integrity</h5>
              <p className="text-muted">Honest service and transparent pricing</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-body text-center">
              <div className="display-4 mb-3">💡</div>
              <h5>Innovation</h5>
              <p className="text-muted">Constantly improving our service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}