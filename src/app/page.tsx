import Link from "next/link";

const App = () => {
  return (
    <div className="p-4">
      <h1 className="mb-4">Hello, World!</h1>
      <Link
        href="/users"
        className="bg-gray-500 text-white font-bold p-2 rounded"
      >
        Go to users
      </Link>
    </div>
  );
};

export default App;
