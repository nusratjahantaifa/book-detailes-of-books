import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="flex items-center justify-between px-10 py-20 bg-gray-100">
      {/* Left Content */}
      <div>
        <h1 className="text-5xl font-bold mb-6">
          Books to Freshen Up <br /> Your Bookshelf
        </h1>

        <Link to="/listed-books">
          <button className="px-6 py-3 bg-green-600 text-white rounded text-lg">
            View The List
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <img
        src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
        alt="Books"
        className="w-96 rounded-lg"
      />
    </section>
  );
};

export default Banner;
