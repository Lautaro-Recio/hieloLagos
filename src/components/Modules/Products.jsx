import { useState } from "react";
import AddProdcut from "./AddProduct/AddProdcut";

function Products() {
  const initialProducts = [
    { cod: 1, name: "Product 1", cost: 10.0, margin: 1.1, stock: 5 },
    { cod: 2, name: "Product 2", cost: 15.0, margin: 1.1, stock: 3 },
    { cod: 3, name: "Product 3", cost: 12.0, margin: 1.1, stock: 8 },
  ];

  
  const [products, setProducts] = useState(initialProducts);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [openModule, setOpenModule] = useState(false);

  const sortProducts = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    const sortedProducts = [...products].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setProducts(sortedProducts);
    setSortConfig({ key, direction });
  };

  const addProd = () => {
    setOpenModule(true);
  };
  

  return (
    <>
      <div className="p-6">
        <div>
          <div className="flex space-x-2 mb-4">
            <h1 className="text-2xl font-bold">Productos</h1>
            <button onClick={() => addProd()} className="">
              Agregar Producto
            </button>
          </div>
        </div>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 w px-6 text-left text-gray-600 font-medium">
                #
              </th>
              <th className="py-3 w px-6 text-left text-gray-600 font-medium">
                <button className="w-20" onClick={() => sortProducts("cod")}>
                  Código
                  {sortConfig.key === "cod"
                    ? sortConfig.direction === "asc"
                      ? "▲"
                      : "▼"
                    : ""}
                </button>
              </th>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">
                <button className="w-20" onClick={() => sortProducts("name")}>
                  Nombre
                  {sortConfig.key === "name"
                    ? sortConfig.direction === "asc"
                      ? "▲"
                      : "▼"
                    : ""}
                </button>
              </th>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">
                <button className="w-20" onClick={() => sortProducts("cost")}>
                  Costo
                  {sortConfig.key === "cost"
                    ? sortConfig.direction === "asc"
                      ? "▲"
                      : "▼"
                    : ""}
                </button>
              </th>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">
                <button className="w-20" onClick={() => sortProducts("sell")}>
                  Venta
                  {sortConfig.key === "sell"
                    ? sortConfig.direction === "asc"
                      ? "▲"
                      : "▼"
                    : ""}
                </button>
              </th>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">
                <button className="w-20" onClick={() => sortProducts("stock")}>
                  Stock
                  {sortConfig.key === "stock"
                    ? sortConfig.direction === "asc"
                      ? "▲"
                      : "▼"
                    : ""}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6">{index + 1}</td>

                <td className="py-3 px-6">{product.cod}</td>
                <td className="py-3 px-6">{product.name}</td>
                <td className="py-3 px-6">${product.cost.toFixed(2)}</td>
                <td className="py-3 px-6">
                  ${(product.cost * product.margin).toFixed(2)}
                </td>

                <td className="py-3 px-6">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openModule && <AddProdcut initialProducts={initialProducts} setProducts={setProducts} />}
    </>
  );
}

export default Products;
