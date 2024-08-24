let products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the description for Product 1.",
    price: "$19.99",
    image: "https://placehold.co/600x400?text=Product+1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the description for Product 2.",
    price: "$29.99",
    image: "https://placehold.co/600x400?text=Product+2",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the description for Product 3.",
    price: "$39.99",
    image: "https://placehold.co/600x400?text=Product+3",
  },
];

export async function getAllProducts() {
  return await new Promise((resolve) => setTimeout(() => resolve(products), 3000));
}

export async function addNewProduct(product) {
  products = [...products, product];
  return await new Promise((resolve) => setTimeout(() => resolve(products), 1000));
}
