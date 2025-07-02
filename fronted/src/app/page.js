import Header from "./components/header"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Legend Cinema</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the magic of movies with our premium cinema experience. Book your tickets now and enjoy the
            latest blockbusters in comfort and style.
          </p>
          <Link
            href="/signin"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </Link>
        </div>
      </main>
    </div>
  )
}