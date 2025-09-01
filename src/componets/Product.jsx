import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import ProductModal from "./ProductModal";
import EditModal from "./EditModal";
import Pagination from "./Pagination";
import { Search } from "lucide-react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Product = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Modal states
  const [isOpen, setIsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category: "",
    stock: "",
  });
  const [editProduct, setEditProduct] = useState({
    id: "",
    title: "",
    price: "",
    category: "",
    stock: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError("Error fetching products. Please try again.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete product");
      setProducts(products.filter((p) => p.id !== id));
    } catch (error) {
      setError("Error deleting product. Please try again.");
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (
      !newProduct.title ||
      !newProduct.price ||
      !newProduct.category ||
      !newProduct.stock
    ) {
      setError("All fields are required to add a product.");
      return;
    }
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts([
      ...products,
      {
        id: newId,
        title: newProduct.title,
        price: newProduct.price,
        category: newProduct.category,
        stock: newProduct.stock,
      }
    ]);
    setIsOpen(false);
    setNewProduct({ title: "", price: "", category: "", stock: "" });
    setError("");
  };

  const handleEditOpen = (product) => {
    setEditProduct(product);
    setEditOpen(true);
    setError("");
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    if (
      !editProduct.title ||
      !editProduct.price ||
      !editProduct.category ||
      !editProduct.stock
    ) {
      setError("All fields are required to update a product.");
      return;
    }
    setProducts(products.map((p) =>
      p.id === editProduct.id ? { ...editProduct } : p
    ));
    setEditOpen(false);
    setError("");
  };

  return (
    <div className="h-screen w-full flex">
      {/* Sidebar */}
      <div className="hidden md:block w-1/6 bg-green-300 p-3">
        <h1 className="text-white text-2xl">Dashboard</h1>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col p-3 bg-gray-200 overflow-y-hidden">
        <h1 className="text-3xl font-medium text-center mt-4">Products</h1>

        {/* Search and Add */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-3">
          <div className="w-[40%] flex items-center border bg-white rounded-md p-2">
            <Search className="mr-2 w-4 h-4" />
            <input
              type="text"
              placeholder="Search product..."
              className="w-full outline-none bg-transparent"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer bg-green-400 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Add Product
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 text-center text-red-600 font-semibold">
            {error}
          </div>
        )}

        {/* Add Modal */}
        <ProductModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          handleAddProduct={handleAddProduct}
        />

        {/* Edit Modal */}
        <EditModal
          editOpen={editOpen}
          setEditOpen={setEditOpen}
          editProduct={editProduct}
          setEditProduct={setEditProduct}
          handleUpdateProduct={handleUpdateProduct}
        />

        {/* Table */}
        <div className="overflow-x-auto mt-5">
          {loading ? (
            <div className="flex flex-col justify-center items-center py-10">
              <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="mt-4 text-green-600 font-semibold">Loading...</span>
            </div>
          ) : currentPosts.length === 0 ? (
            <div className="text-center py-10 text-gray-500 text-lg font-semibold">
              No products
            </div>
          ) : (
            <>
              <ProductTable
                products={currentPosts}
                handleDelete={handleDelete}
                handleEdit={handleEditOpen}
              />
              <div className="text-start mt-2  text-green-700 font-semibold">
                Total Products: {filteredProducts.length}
              </div>
            </>
          )}
        </div>

        {/* Pagination */}
        {!loading && currentPosts.length > 0 && (
          <Pagination
            totalItems={filteredProducts.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Product;