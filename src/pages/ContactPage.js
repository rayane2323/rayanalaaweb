import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title mb-4">Get in Touch</h4>
              <div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button onClick={handleSubmit} className="btn btn-primary w-100">Send Message</button>
              </div>
            </div>
          </div>
        </div>
                <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title mb-4">Contact Information</h4>
              <div className="mb-4">
                <h6 className="fw-bold">📍 Address</h6>
                <p className="text-muted">123 Book Street, Reading City, RC 12345</p>
              </div>
              <div className="mb-4">
                <h6 className="fw-bold">📞 Phone</h6>
                <p className="text-muted">+1 (555) 123-4567</p>
              </div>
              <div className="mb-4">
                <h6 className="fw-bold">✉️ Email</h6>
                <p className="text-muted">info@bookstore.com</p>
              </div>
              <div className="mb-4">
                <h6 className="fw-bold">🕒 Business Hours</h6>
                <p className="text-muted">Monday - Friday: 9:00 AM - 6:00 PM<br/>
                Saturday: 10:00 AM - 4:00 PM<br/>
                Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Follow Us</h5>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="btn btn-outline-primary">Facebook</a>
                <a href="#" className="btn btn-outline-info">Twitter</a>
                <a href="#" className="btn btn-outline-danger">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}