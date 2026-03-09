const ProductPage = async () => {

  const res = await fetch("https://free-food-menus-api-two.vercel.app/steaks");
  const steaks = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">

      {steaks.slice(0,8).map((item: any) => (
        <div key={item.id} className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">

          <img
            src={item.img}
            width="200"
            className="mx-auto h-40 object-cover rounded-lg"
          />

          <h2 className="text-xl font-bold mt-3">
            {item.name}
          </h2>

          <p className="text-purple-600 font-semibold">
            Price: ${item.price}
          </p>

          <button className="bg-purple-600 text-white px-4 py-2 mt-3 rounded hover:bg-purple-700">
            Add to cart
          </button>

        </div>
      ))}

    </div>
  );
};

export default ProductPage;