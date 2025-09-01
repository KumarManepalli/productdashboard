import React from "react";
import ProductList from "./ProductList";

const ProductTable = ({ products, handleDelete, handleEdit }) => (
  <table className="min-w-full text-center border-collapse">
    <thead>
      <tr>
        <th className="px-4 py-2 border bg-green-500 text-white">ID</th>
        <th className="px-4 py-2 border bg-green-500 text-white">Title</th>
        <th className="px-4 py-2 border bg-green-500 text-white">Price</th>
        <th className="px-4 py-2 border bg-green-500 text-white">Category</th>
        <th className="px-4 py-2 border bg-green-500 text-white">Stock</th>
        <th className="px-4 py-2 border bg-green-500 text-white">Action</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <ProductList
          key={product.id}
          productDetails={product}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </tbody>
  </table>
);

export default ProductTable;