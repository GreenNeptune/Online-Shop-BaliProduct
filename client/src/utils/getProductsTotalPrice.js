const getProductsTotalPrice = (products) => {
  return products.reduce((total, product) => total + (product.price * product.quantity), 0);
}
export default getProductsTotalPrice;

