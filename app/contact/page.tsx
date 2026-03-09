const ContactPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center py-16 px-6 bg-gray-50">

      <h1 className="text-4xl font-bold mb-6">📞 Contact Us</h1>

      <p className="text-gray-600 mb-10 text-center max-w-xl">
        Have questions about our Steaks or want to place a special order?
        Send us a message and we will get back to you soon.
      </p>

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-md"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-md"
          />

          <textarea
            placeholder="Your Message"
            className="border p-3 rounded-md h-32"
          />

          <button className="bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700">
            Send Message
          </button>

        </form>

      </div>

      <div className="mt-10 text-center text-gray-600">
        <p>📍 Suratani, Thailand</p>
        <p>📧 Steak@email.com</p>
        <p>📞 012-345-6789</p>
      </div>

    </main>
  );
};

export default ContactPage;