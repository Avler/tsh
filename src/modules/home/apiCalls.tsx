export const PRODUCTS_LIST_QUERY_DOMAIN = 'products';

export const fetchProducts = async () => {
  const response = await fetch('http://jointshfrontendapi-env-3.eba-z7bd6rn6.eu-west-1.elasticbeanstalk.com/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
