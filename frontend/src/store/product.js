import toast from "react-hot-toast";
import { create } from "zustand";

const BaseURL = "http://localhost:3000/api/v1";
export const useProductStore = create((set) => ({
  products: [],
  setProducts: (newProducts) => set({ products: newProducts }),

  createProudct: async (product) => {
    if (!product.name || !product.price || !product.image) {
      return { status: false, message: "Please fill all the fields" };
    }
    try {
      const res = await fetch(`${BaseURL}/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message);
      }

      set((state) => ({ products: [...state.products, data.data] }));
      return toast.success(data.message);

    } catch (error) {
      console.error(
        "Error creating product in useProductStore : ",
        error.message
      );
      return toast.error(error.message);
    } 
    
  },
  getAllProuducts: async () => {
    try {
      const res = await fetch(`${BaseURL}/products`);
      const data = await res.json();
      set({ products: data.data });
    } catch (error) {
      console.error(
        "Error fetching products in useProductStore : ",
        error.message
      );
    }
  },

  deleteProduct: async (id) => {
    if (id) {
      try {
        const res = await fetch(`${BaseURL}/product/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.success) {
          set((state) => ({
            products: state.products.filter((product) => product._id !== id),
          }));
          return toast.success(data.message);
        } else {
          return toast.error(data.message);
        }
      } catch (error) {
        console.error(
          "Error deleting product in useProductStore : ",
          error.message
        );
        return toast.error("Something went wrong, Try again later");
      }
    }
  },
  updateProduct: async (id, updatedProduct) =>{
    if (!id || !updatedProduct) {
      return { status: false, message: "Please fill all the fields" };
    }

    try {
        const res = await fetch(`${BaseURL}/product/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
        const data = await res.json();
        if (!data.success) {
            throw new Error(data.message);
        }
        set((state)=>({ products: state.products.map( product=> product._id === id ? data.data: product)}))
        return {status: true, message: data.message}
        
    } catch (error) {
        console.error("Error updating product in useProductStore : ", error.message)
        return {status: false, message: error.message}
        
    }
  }
}));
