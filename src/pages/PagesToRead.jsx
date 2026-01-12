import { useEffect, useState } from "react";
import { getStoredBooks } from "../utils/localStorage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const CustomBar = (props) => {
  const { x, y, width, height } = props;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={10}
      ry={10}
      fill="#22c55e"
    />
  );
};

const PagesToRead = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const readBooks = getStoredBooks("readBooks");

    const formattedData = readBooks.map(book => ({
      name: book.bookName,
      pages: book.totalPages
    }));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChartData(formattedData);
  }, []);

  return (
    <section className="px-10 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Pages to Read
      </h1>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="pages"
              shape={<CustomBar />}
              label={{ position: "top" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default PagesToRead;
