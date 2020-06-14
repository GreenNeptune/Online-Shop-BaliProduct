export const addProductToCart = (products, newProduct) => {
  const isNewProductExist = products.find(product => product.id === newProduct.id);
  if (isNewProductExist) {
    return products.map(product => product.id === newProduct.id ? { ...product, count: product.count + 1 } : product);
  }
  return [...products, { ...newProduct, count: 1 }];

}

export const getCartTotal = (products) => products.reduce((total, product) => total + product.price * product.count, 0);
