import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 text-center px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Friend Not Found
      </h2>

      <p className="text-gray-500 mb-6 max-w-md">
        Oops! The friend you are looking for does not exist or has been removed.
      </p>

      <Link href="/">
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition">
          ⬅ Back to Home
        </button>
      </Link>
    </div>
  );
}
