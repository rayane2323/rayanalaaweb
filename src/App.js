import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import { booksData } from './data/booksData';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import BookDetailsPage from './pages/BookDetailsPage';
import BrowseBooksPage from './pages/BrowseBooksPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    const existingItem = cart.find(item => item.id === book.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
    alert(`${book.title} added to cart!`);
  };

  const removeFromCart = (bookId) => {
    setCart(cart.filter(item => item.id !== bookId));
  };

  const updateQuantity = (bookId, change) => {
    setCart(cart.map(item => {
      if (item.id === bookId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigation cartCount={getCartCount()} />

        <div className="flex-grow-1">

          <Routes>
            <Route path="/" element={
              <HomePage booksData={booksData} addToCart={addToCart} />
            } />

            <Route path="/browse" element={
              <BrowseBooksPage booksData={booksData} addToCart={addToCart} />
            } />

            <Route path="/details/:id" element={
              <BookDetailsPage addToCart={addToCart} books={booksData} />
            } />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/cart" element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                calculateTotal={calculateTotal}
              />
            } />

          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
