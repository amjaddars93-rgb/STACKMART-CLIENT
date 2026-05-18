import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000/products", // local backend
});
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Export functions matching backend
export const getProducts = () => API.get("/products-get");          // GET all products
export const addProduct = (data) => API.post("/product-add", data); // POST new product
export const updateProduct = (id, data) => API.put(`/product-update/${id}`, data); // PUT update
export const deleteProduct = (id) => API.delete(`/product-delete/${id}`); // DELETE
