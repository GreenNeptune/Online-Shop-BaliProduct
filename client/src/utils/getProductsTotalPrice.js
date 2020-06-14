const getProductsTotalPrice = (products) => {
  return products.reduce((total, product) => total + product.price, 0);
}
export default getProductsTotalPrice;

