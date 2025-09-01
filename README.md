Products dashboard App

This is a simple React application for managing products.  
You can view, search, add, edit, and delete products.  
The UI is styled with Tailwind CSS and uses a responsive layout.

## Features

- **Product List:** View all products in a table.
- **Search:** Filter products by name.
- **Add Product:** Add new products using a modal form.
- **Edit Product:** Edit existing products using a modal form.
- **Delete Product:** Remove products from the list.
- **Pagination:** Browse products page by page.
- **Loading State:** Shows a spinner while loading data.
- **Error Handling:** Displays error messages for failed actions.
- **Empty State:** Shows a message when no products are found.
- **Product Count:** Displays the total number of products.

## Folder Structure

```
project/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── componets/
│       ├── Product.jsx
│       ├── ProductTable.jsx
│       ├── ProductList.jsx
│       ├── ProductModal.jsx
│       ├── EditModal.jsx
│       ├── Pagination.jsx
│       └── NotFound.jsx
├── index.html
├── package.json
└── vite.config.js
```

## How to Run
  cd project

1. **Install dependencies:**

   ```
   npm install
   ```

2. **Start the development server:**

   ```
   npm run dev
   ```

3. **Open your browser:**

   Go to [http://localhost:5173](http://localhost:5173)

## Usage

- Use the search bar to filter products by name.
- Click "Add Product" to open the modal and add a new product.
- Click the edit icon to update product details.
- Click the trash icon to delete a product.
- Use pagination controls to navigate between pages.
- The total number of products is shown below the table.

## Notes

- Product data is fetched from [dummyjson.com](https://dummyjson.com/products).
- Add, edit, and delete actions update the local state only.
- The app is responsive and works on desktop and mobile.

## License

This project is for learning and demonstration purposes.
