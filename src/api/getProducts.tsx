const fetchProductLimit = async () => {
    const url = "https://fakestoreapi.com/products?limit=20";
    const data = await fetch(url);
    const response = await data.json();
    return response;
}

export default fetchProductLimit;
