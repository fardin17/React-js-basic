import { createContext, useMemo, useState } from "react";

export const ProductCartContext = createContext();

const ProductCartContextProvider = ({ children }) => {
  const [productIncart, setProductInCart] = useState([]);

  const handleAddToCart = (product) => {
    setProductInCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);

      if (productIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          count: updatedCart[productIndex].count + 1,
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  };
  const handleRemoveFromCart = (productId) => {
    setProductInCart((prev) => prev.filter((product) => product.id !== productId));
  };
  console.log({ productIncart });
  const totalCartCount = useMemo(() => productIncart.reduce((sum, item) => (sum += item.count), 0), [productIncart]);

  return (
    <ProductCartContext.Provider value={{ productIncart, totalCartCount, handleAddToCart, handleRemoveFromCart }}>
      {children}
    </ProductCartContext.Provider>
  );
};
export default ProductCartContextProvider;
