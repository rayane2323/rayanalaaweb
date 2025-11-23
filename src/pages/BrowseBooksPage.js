import { useState } from 'react';
import BookCard from '../components/BookCard';

export default function BrowseBooksPage({ booksData, addToCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Classic', 'Science Fiction', 'Romance', 'Fantasy'];
  const filteredBooks = booksData.filter(book => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
  return (
    <div className="container my-5">
      <h1 className="mb-4">Browse Our Collection</h1>

      {/* Search and Filter */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="col-md-6 mb-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      
      <div className="row g-4">
        {filteredBooks.map(book => (
          <div key={book.id} className="col-lg-4 col-md-6">
            <BookCard 
              book={book} 
              addToCart={addToCart}
            />
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-5">
          <h3 className="text-muted">No books found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}