import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="text-6xl font-extrabold text-primary-600 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Sivua ei löytynyt.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          ← Takaisin etusivulle
        </Link>
      </div>
      <Footer />
    </div>
  );
}
