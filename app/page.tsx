import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">

      {/* Hero */}
      <div className="text-center max-w-2xl">

        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          🥩 Steak House
        </h1>

        <p className="text-gray-600 mb-8">
          Premium steaks grilled to perfection.  
          Experience the rich flavor of the finest cuts.
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/products">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
              View Menu
            </button>
          </Link>

          <Link href="/contact">
            <button className="border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-100 transition">
              Contact Us
            </button>
          </Link>
        </div>

      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-bold mb-2">🥩 Premium Steak</h2>
          <p className="text-gray-500 text-sm">
            Our steaks are made from the finest cuts of meat.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-bold mb-2">🔥 Perfect Grill</h2>
          <p className="text-gray-500 text-sm">
            Grilled to perfection for the best flavor and tenderness.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-bold mb-2">⭐ Top Quality</h2>
          <p className="text-gray-500 text-sm">
            We use premium ingredients for the ultimate steak experience.
          </p>
        </div>

      </div>

    </main>
  );
}