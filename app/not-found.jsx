"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-teal-950 text-center text-white px-4">
      <h1 className="text-7xl font-bold mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>

      <p className=" mb-6 max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      <Link href="/">
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition">
          ⬅ Back to Home
        </button>
      </Link>
    </div>
  );
}
