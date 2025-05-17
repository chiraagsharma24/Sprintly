import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-gray-100">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-100">Page Not Found</p>
      <p className="mt-2 text-gray-100 max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition duration-200"
      >
        Go back home
      </Link>
    </div>
  );
}
