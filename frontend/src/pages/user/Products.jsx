// export default function Products() {
//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold">Our Products</h2>
//       <p>All religious products will be shown here.</p>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Our Divine Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p className="text-green-600 font-bold">₹{product.price}</p>
              <button className="mt-2 bg-yellow-400 px-4 py-1 rounded">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
