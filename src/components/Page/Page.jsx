import { useContext, useState } from "react";
import { AppContext } from "../../AppProvider";
import Sells from "../Modules/Sells"
import Boughts from "../Modules/Boughts";
import Stock from "../Modules/Stock";
import Products from "../Modules/Products";
import Clientes from "../Modules/Clientes";
function Page() {
  const { email } = useContext(AppContext);
  const [module, setModule] = useState(false);
  const openModule = (item) => {
    setModule(item);
  };
  const modules = ["Ventas", "Compras", "Productos", "Stock","Clientes"];

  return (
    <div>
      <nav>{email}</nav>
      <div className="grid grid-cols-10">
        <div className="bg-gray-form col-span-1">
          <h5>Funciones</h5>
          <ul>
            {modules.map((item, index) => (
              <li key={index} className="my-2">
                <button
                  onClick={() => openModule(item)}
                  className="bg-original-blue text-white p-1 w-full hover:bg-blue-800 transition"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-500 col-span-9">
          {module === "Ventas" && <Sells/>}
          {module === "Compras" && <Boughts/>}
          {module === "Productos" && <Products/>}
          {module === "Stock" && <Stock/>}
          {module === "Clientes" && <Clientes/>}
          {!module && <h1>Otro módulo</h1>}
        </div>
      </div>
    </div>
  );
}

export default Page;
