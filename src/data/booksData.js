import n1984Img from '../Assets/George Orwell.png';
import harryImg from '../Assets/Harry Potter.png';
import prideImg from '../Assets/Pride and Prejudice.png';
import gatsbyImg from '../Assets/The Great Gatsby.png';
import hobbitImg from '../Assets/The Hobbit.png';
import mockingbirdImg from '../Assets/To Kill a Mockingbird.png';

export const booksData = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    category: "Classic",
    rating: 4.5,
    image: gatsbyImg,
    description:
      "A story of decadence and excess, witness the rise and fall of Jay Gatsby."
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 14.99,
    category: "Classic",
    rating: 5,
    image: mockingbirdImg,
    description:
      "A gripping tale of racial injustice and childhood innocence in the American South."
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 13.99,
    category: "Science Fiction",
    rating: 4.8,
    image: n1984Img,
    description:
      "A dystopian social science fiction novel and cautionary tale about totalitarianism."
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 11.99,
    category: "Romance",
    rating: 4.7,
    image: prideImg,
    description:
      "A romantic novel of manners that follows the character development of Elizabeth Bennet."
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 15.99,
    category: "Fantasy",
    rating: 4.9,
    image: hobbitImg,
    description:
      "A fantasy novel about the quest of Bilbo Baggins to win a share of treasure."
  },
  {
    id: 6,
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 16.99,
    category: "Fantasy",
    rating: 5,
    image: harryImg,
    description:
      "The magical journey of a young wizard and his friends at Hogwarts."
  }
];