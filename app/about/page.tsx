const AboutPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-gray-50">

      <h1 className="text-4xl font-bold mb-6">
        🥩 About Steak House
      </h1>

      <p className="text-gray-600 text-center max-w-2xl mb-10">
        Steak House started with a passion for serving premium quality steaks.
        We carefully select the best cuts of meat and cook them to perfection.
        Our mission is to give every customer an unforgettable dining experience.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
        
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold mb-2">🥩 Premium Steak</h2>
          <p className="text-gray-500 text-sm">
            We use high quality beef to ensure the best flavor and tenderness.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold mb-2">🔥 Perfectly Grilled</h2>
          <p className="text-gray-500 text-sm">
            Every steak is grilled to perfection by our experienced chefs.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold mb-2">❤️ Made with Passion</h2>
          <p className="text-gray-500 text-sm">
            Every dish is prepared with passion to deliver the best dining experience.
          </p>
        </div>

      </div>

    </main>
  );
};

export default AboutPage;