import React from "react";
import Modal from "react-modal";

const ProductModal = ({
  isOpen,
  setIsOpen,
  newProduct,
  setNewProduct,
  handleAddProduct,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={() => setIsOpen(false)}
    className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto"
    overlayClassName="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center"
  >
    <h2 className="text-xl font-bold mb-4">Add Product</h2>
    <form onSubmit={handleAddProduct} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Title"
        value={newProduct.title}
        onChange={(e) =>
          setNewProduct({ ...newProduct, title: e.target.value })
        }
        required
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
        required
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Category"
        value={newProduct.category}
        onChange={(e) =>
          setNewProduct({ ...newProduct, category: e.target.value })
        }
        required
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Stock"
        value={newProduct.stock}
        onChange={(e) =>
          setNewProduct({ ...newProduct, stock: e.target.value })
        }
        required
        className="border p-2 rounded"
      />
      <div className="flex gap-2 mt-2">
        <button
          type="submit"
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="bg-gray-400 text-white px-3 py-1 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  </Modal>
);

export default ProductModal;