import React from "react";
import { Trash, SquarePen } from "lucide-react";

const ProductList = ({ productDetails, handleDelete, handleEdit }) => {
  const { id, title, price, category, stock } = productDetails;

  return (
    <tr className="bg-white hover:bg-gray-100 border border-green-400">
      <td className="px-4 py-2 border border-green-400 text-left">{id}</td>
      <td className="px-4 py-2 border border-green-400 text-left">{title}</td>
      <td className="px-4 py-2 border border-green-400 text-left">${price}</td>
      <td className="px-4 py-2 border border-green-400 text-left">{category}</td>
      <td className="px-4 py-2 border border-green-400 text-left">{stock}</td>
      <td className="px-4 py-2 border-green-400 text-left flex gap-2">
        <button
          className="bg-green-400 text-white px-2 py-1 rounded hover:bg-green-600"
          onClick={() => handleEdit(productDetails)}
        >
          <SquarePen size={16} />
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="bg-transparent flex items-center cursor-pointer"
        >
          <Trash className="text-red-600" size={16} />
        </button>
      </td>
    </tr>
  );
};

export default ProductList;
