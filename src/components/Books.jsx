import { Link } from "react-router-dom";
import books from "../../src/data/books.json";

const Books = () => {
  return (
    <section className="px-10 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map(book => (
          <Link
            to={`/book/${book.bookId}`}
            key={book.bookId}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={book.image}
              alt={book.bookName}
              className="h-60 w-full object-cover rounded mb-4"
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Book Info */}
            <h3 className="text-xl font-bold mb-1">{book.bookName}</h3>
            <p className="text-gray-600 mb-2">By {book.author}</p>

            <div className="flex justify-between text-sm font-medium">
              <span className="text-blue-600">{book.category}</span>
              <span>⭐ {book.rating}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Books;
