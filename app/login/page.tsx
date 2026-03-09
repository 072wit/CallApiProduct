import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          🔐 Login
        </h1>

        <form className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-md"
          />

          <button className="bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700">
            Login
          </button>

        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link href="/register" className="text-purple-600 font-semibold">
            Register
          </Link>
        </p>

      </div>

    </main>
  );
};

export default LoginPage;