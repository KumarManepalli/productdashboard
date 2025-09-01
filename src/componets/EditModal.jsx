import React from "react";
import Modal from "react-modal";

const EditModal = ({
  editOpen,
  setEditOpen,
  editProduct,
  setEditProduct,
  handleUpdateProduct,
}) => (
  <Modal
    isOpen={editOpen}
    onRequestClose={() => setEditOpen(false)}
    className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto"
    overlayClassName="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center"
  >
    <h2 className="text-xl font-bold mb-4">Edit Product</h2>
    <form onSubmit={handleUpdateProduct} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Title"
        value={editProduct.title}
        onChange={(e) =>
          setEditProduct({ ...editProduct, title: e.target.value })
        }
        required
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Price"
        value={editProduct.price}
        onChange={(e) =>
          setEditProduct({ ...editProduct, price: e.target.value })
        }
        required
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Category"
        value={editProduct.category}
        onChange={(e) =>
          setEditProduct({ ...editProduct, category: e.target.value })
        }
        required
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Stock"
        value={editProduct.stock}
        onChange={(e) =>
          setEditProduct({ ...editProduct, stock: e.target.value })
        }
        required
        className="border p-2 rounded"
      />
      <div className="flex gap-2 mt-2">
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded"
        >
          Update
        </button>
        <button
          type="button"
          onClick={() => setEditOpen(false)}
          className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  </Modal>
);

export default EditModal;