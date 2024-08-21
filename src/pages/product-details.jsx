import { useParams } from "react-router-dom";
import { products } from "../helpers/constants";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-lg mb-4">{product.description}</p>
      <span className="text-2xl font-semibold">{product.price}</span>
    </div>
  );
};

export default ProductDetails;
