import { useNavigate } from "react-router-dom";
import { productFormData, products } from "../helpers/constants";
import { useContext, useEffect, useState } from "react";
import { ProductCartContext } from "../context/product-cart-context";
import { FaCartPlus } from "react-icons/fa";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, getAllProducts } from "../services/product-service";

const ProductList = () => {
  const navigate = useNavigate();

  const { totalCartCount, handleAddToCart } = useContext(ProductCartContext);

  let productSchema = Yup.object({
    name: Yup.string().required("Product name is required!"),
    description: Yup.string().required("Description is required!"),
    price: Yup.number().required("Price is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(productSchema) });

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };
  const handleCartRedirect = () => {
    navigate("/cart");
  };

  const handleAddProduct = (values) => {
    console.log({ values });

    mutateAsync({ ...values, id: data.length + 1, image: `https://placehold.co/600x400?text=${values.name}` });
  };

  const client = useQueryClient();
  const { data, isFetching } = useQuery({ queryKey: ["product-list"], queryFn: getAllProducts });

  const { mutateAsync } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: async () => {
      client.invalidateQueries(["product-list"]);
    },
  });
  console.log({ data, isFetching });
  if (isFetching) return <div>Loading data.....</div>;

  return (
    <div className=" mt-5 ">
      <div className="relative flex justify-end mr-6">
        <p onClick={handleCartRedirect} className="cursor-pointer">
          <FaCartPlus size={35} />
        </p>
        <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full w-6 h-6 text-center font-bold">
          {totalCartCount}
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="flex flex-col items-center space-y-3 bg-slate-300 mb-4 py-4 w-1/2 rounded-lg"
      >
        <input {...register("name")} />
        {errors?.name?.message && <p>{errors?.name?.message}</p>}
        <input {...register("description")} />

        {errors?.description?.message && <p>{errors?.description?.message}</p>}
        <input {...register("price")} />
        {errors?.price?.message && <p>{errors?.price?.message}</p>}

        <button type="submit" className="text-lg font-bold bg-blue-700 text-white focus:outline-none">
          Add product
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-md cursor-pointer">
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <span className="text-lg font-semibold">{product.price}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleCardClick(product.id)}
                className="px-4 py-3 bg-blue-500 w-1/2 rounded text-white font-bold text-lg focus:outline-none"
              >
                Product Details
              </button>
              <button
                onClick={() => handleAddToCart(product)}
                className="px-4 py-3 bg-yellow-500 w-1/2 rounded text-white font-bold text-lg focus:outline-none"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
