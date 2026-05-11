import React, { useState } from "react";
import { PackagePlus, DollarSign, Image, Tag, FileText } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";

const Add = () => {
  const [form, setForm] = useState({
    id: 21,
    title: "",
    price: 0.1,
    description: "",
    image: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  async function addProduct() {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        form,
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //  console.log(form);
    addProduct();
    Swal.fire({
      title: "Success",
      text: "Product successfully added",
      icon: "success",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-10">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-blue-700 flex items-center gap-3">
            <PackagePlus size={40} />
            ADD PRODUCT
          </h1>

          <p className="text-gray-500 mt-2">Create new FakeStore product</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* TITLE */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Product Title
            </label>

            <div className="relative">
              <PackagePlus
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Input product title"
                className="w-full border border-gray-300 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* PRICE */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Product Price
            </label>

            <div className="relative">
              <DollarSign
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="number"
                name="price"
                step="0.1"
                value={form.price}
                onChange={handleChange}
                placeholder="Input product price"
                className="w-full border border-gray-300 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Description
            </label>

            <div className="relative">
              <FileText
                className="absolute left-4 top-5 text-gray-400"
                size={18}
              />

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Input description"
                rows={5}
                className="w-full border border-gray-300 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Image URL
            </label>

            <div className="relative">
              <Image
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="text"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="http://example.com"
                className="w-full border border-gray-300 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* CATEGORY */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Category
            </label>

            <div className="relative">
              <Tag
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Input category"
                className="w-full border border-gray-300 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-2xl duration-300 flex items-center justify-center gap-3"
          >
            <PackagePlus size={20} />
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
