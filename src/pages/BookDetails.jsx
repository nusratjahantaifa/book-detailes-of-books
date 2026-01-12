
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import books from "../data/books.json";
import { saveToRead, saveToWishlist } from "../utils/localStorage";

const BookDetails = () => {
  const { bookId } = useParams();

  // ✅ Find the selected book
  const book = books.find(b => b.bookId === parseInt(bookId));

  if (!book) {
    return <p className="text-center mt-10">Book not found</p>;
  }

  // ✅ Read handler
  const handleRead = () => {
    const result = saveToRead(book);

    if (result === "added-read") {
      toast.success("📘 Book added to Read list");
    } else {
      toast.error("⚠️ This book is already in Read list");
    }
  };

  // ✅ Wishlist handler
  const handleWishlist = () => {
    const result = saveToWishlist(book);

    if (result === "added-wishlist") {
      toast.success("💖 Book added to Wishlist");
    } else if (result === "already-wishlist") {
      toast.error("⚠️ Book already in Wishlist");
    } else {
      toast.error("❌ This book is already marked as Read");
    }
  };

  return (
    <section className="px-10 py-16 flex gap-10">
      {/* Image */}
      <img src={book.image} alt={book.bookName} className="w-1/3 rounded" />

      {/* Info */}
      <div>
        <h1 className="text-4xl font-bold">{book.bookName}</h1>
        <p className="mb-4 text-gray-600">By {book.author}</p>

        <p className="mb-4">{book.review}</p>

        <div className="flex gap-4">
          <button onClick={handleRead} className="px-6 py-2 border rounded">
            Read
          </button>
          <button
            onClick={handleWishlist}
            className="px-6 py-2 bg-green-600 text-white rounded"
          >
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;


