export const getStoredBooks = (key) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
};


export const saveToRead = (book) => {
  const readBooks = getStoredBooks("readBooks");

  if (readBooks.find(b => b.bookId === book.bookId)) {
    return "already-read";
  }

  readBooks.push(book);
  localStorage.setItem("readBooks", JSON.stringify(readBooks));
  return "added-read";
};

export const saveToWishlist = (book) => {
  const readBooks = getStoredBooks("readBooks");
  const wishlistBooks = getStoredBooks("wishlistBooks");

  if (readBooks.find(b => b.bookId === book.bookId)) {
    return "in-read";
  }

  if (wishlistBooks.find(b => b.bookId === book.bookId)) {
    return "already-wishlist";
  }

  wishlistBooks.push(book);
  localStorage.setItem("wishlistBooks", JSON.stringify(wishlistBooks));
  return "added-wishlist";
};

