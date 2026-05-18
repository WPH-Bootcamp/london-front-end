import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../api/product.service";

export default function AddProduct() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    warehouse: "",
  });

  const mutation = useMutation({
    mutationFn: addProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      navigate("/");
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation.mutate({
      name: formData.name,
      category: formData.category,
      brand: formData.brand,
      price: Number(formData.price),
      stock: Number(formData.stock),
      warehouse: formData.warehouse,
    });
  }

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="warehouse"
          placeholder="Warehouse"
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">
          {mutation.isPending ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
