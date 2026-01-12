import { useEffect, useState } from "react";
import { getStoredBooks } from "../utils/localStorage";
import { Link } from "react-router-dom";

const ListedBooks = () => {
  const [activeTab, setActiveTab] = useState("read");
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
     // eslint-disable-next-line react-hooks/set-state-in-effect
     setReadBooks(getStoredBooks("readBooks"));
    setWishlistBooks(getStoredBooks("wishlistBooks"));
  }, []);

  const books =
    activeTab === "read" ? [...readBooks] : [...wishlistBooks];

  if (sortType === "rating") {
    books.sort((a, b) => b.rating - a.rating);
  }
  if (sortType === "pages") {
    books.sort((a, b) => b.totalPages - a.totalPages);
  }
  if (sortType === "year") {
    books.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
  }

  return (
    <section className="px-10 py-16">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Listed Books
      </h1>

      {/* Sort Dropdown */}
      <div className="flex justify-center mb-8">
        <select
          onChange={(e) => setSortType(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">Sort By</option>
          <option value="rating">Rating</option>
          <option value="pages">Number of pages</option>
          <option value="year">Published year</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => setActiveTab("read")}
          className={`px-6 py-2 border rounded ${
            activeTab === "read" && "bg-green-600 text-white"
          }`}
        >
          Read Books
        </button>

        <button
          onClick={() => setActiveTab("wishlist")}
          className={`px-6 py-2 border rounded ${
            activeTab === "wishlist" && "bg-green-600 text-white"
          }`}
        >
          Wishlist Books
        </button>
      </div>

      {/* Book List */}
      <div className="space-y-6">
        {books.map(book => (
          <div
            key={book.bookId}
            className="flex gap-6 border p-6 rounded shadow"
          >
            {/* Image */}
            <img
              src={book.image}
              alt={book.bookName}
              className="w-32 rounded"
            />

            {/* Info */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">
                {book.bookName}
              </h3>
              <p className="text-gray-600 mb-2">
                By {book.author}
              </p>

              <div className="flex gap-4 text-sm mb-2">
                <span><strong>Category:</strong> {book.category}</span>
                <span><strong>Rating:</strong> ⭐ {book.rating}</span>
              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-2">
                {book.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-green-100 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-sm space-y-1">
                <p><strong>Total Pages:</strong> {book.totalPages}</p>
                <p><strong>Publisher:</strong> {book.publisher}</p>
                <p><strong>Year:</strong> {book.yearOfPublishing}</p>
              </div>
            </div>

            {/* View Details */}
            <Link
              to={`/book/${book.bookId}`}
              className="self-center px-5 py-2 bg-blue-600 text-white rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListedBooks;
