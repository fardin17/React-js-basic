import { useContext } from "react";
import { ProductCartContext } from "../context/product-cart-context";

export default function Cart() {
  const { productIncart, handleRemoveFromCart } = useContext(ProductCartContext);
  return (
    <div>
      {productIncart.map((product) => (
        <div key={product.id} className="flex justify-between items-center mx-10 mt-10">
          <div className="flex gap-3 ">
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
              className="w-32 h-32 object-cover mb-4"
            />
            <div>
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <span className="text-lg font-semibold">{product.price}</span>
            </div>
          </div>
          <div className="px-4 py-3 rounded text-white font-bold text-lg bg-blue-500">
            {" X "}
            {product.count}
          </div>
          <button
            onClick={() => handleRemoveFromCart(product.id)}
            className="px-4 py-3 bg-yellow-500 w-48 h-fit rounded text-white font-bold text-lg focus:outline-none"
          >
            Remove from Cart
          </button>
        </div>
      ))}
      {!productIncart.length && (
        <div className="flex justify-center items-center text-3xl font-bold text-red-500 min-h-[90vh]">
          There is no product in cart
        </div>
      )}
    </div>
  );
}
