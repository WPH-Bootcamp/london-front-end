import React from "react";
import { Package, DollarSign, Tag } from "lucide-react";
import Swal from "sweetalert2";
import axios from "axios";

const List = ({ products }: { products: any[] }) => {
  function editHandler(id: number) {
    console.log("Edit product with ID:", id);
  }
  async function deleteHandler(id: number) {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed)
          await axios.delete(`https://fakestoreapi.com/products/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      });
    } catch (err) {
      Swal.fire({
        title: "Delete Failed",
        text: "An error occurred while deleting the product.",
        icon: "error",
      });
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-700 flex items-center gap-3">
          <Package size={40} />
          PRODUCT LIST
        </h1>

        <p className="text-gray-500 mt-2">FakeStore API Product Dashboard</p>
      </div>

      {/* TABLE CONTAINER */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* TABLE HEADER */}
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="px-6 py-4 text-left">ID</th>
                <th className="px-6 py-4 text-left">Product</th>
                <th className="px-6 py-4 text-left">Price</th>
                <th className="px-6 py-4 text-left">Category</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {products.map((product: any) => {
                return (
                  <tr
                    key={product.id}
                    className="border-b hover:bg-gray-50 duration-200"
                  >
                    {/* ID */}
                    <td className="px-6 py-5 font-bold text-gray-700">
                      #{product.id}
                    </td>

                    {/* PRODUCT */}
                    <td className="px-6 py-5">
                      <div className="flex items-start gap-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-20 h-20 object-contain bg-gray-100 rounded-xl p-2"
                        />

                        <div>
                          <h2 className="font-bold text-lg text-gray-800 line-clamp-1">
                            {product.title}
                          </h2>

                          <p className="text-sm text-gray-500 mt-2 line-clamp-2 max-w-md">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* PRICE */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 font-bold text-green-600 text-lg">
                        <DollarSign size={18} />
                        {product.price.toFixed(2)}
                      </div>
                    </td>

                    {/* CATEGORY */}
                    <td className="px-6 py-5">
                      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                        <Tag size={16} />
                        {product.category}
                      </div>
                    </td>

                    {/* ACTIONS */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => editHandler(product.id)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteHandler(product.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* EMPTY STATE */}
        {products.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-gray-400">
              No Product Found
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
