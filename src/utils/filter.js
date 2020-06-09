export const filteredProducts = (products, search = "") => {
  if (search) {
    console.log(products);
    return products.filter((product) => {
      const productTitle = product.title.toLowerCase();
      return productTitle.includes(search.toLowerCase());
    })
  } else {
    return products

  }

}