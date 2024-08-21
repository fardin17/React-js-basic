import { useNavigate } from "react-router-dom";
import { products } from "../helpers/constants";

const ProductList = () => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow-md cursor-pointer"
            onClick={() => handleCardClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <span className="text-lg font-semibold">{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
