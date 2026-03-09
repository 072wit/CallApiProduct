import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-black text-white shadow-md">

      {/* Logo */}
      <div className="text-xl font-bold flex items-center gap-2">
        🥩 SteakHouse
      </div>

      {/* Menu */}
      <div className="flex gap-6 font-medium">
        <Link href="/" className="hover:text-red-400">Home</Link>
        <Link href="/about" className="hover:text-red-400">About</Link>
        <Link href="/contact" className="hover:text-red-400">Contact</Link>
        <Link href="/products" className="hover:text-red-400">Menu</Link>
      </div>

      {/* Auth */}
      <div className="flex gap-4">
        <Link href="/login">
          <button className="text-red-400 font-medium">
            Login
          </button>
        </Link>

        <Link href="/register">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Register
          </button>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;