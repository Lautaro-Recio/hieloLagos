import { useState } from "react";

function AddProdcut(props) {
  // eslint-disable-next-line react/prop-types
  const { initialProducts,setProducts } = props;

  const handleAddProd = (newProd) => {
    // eslint-disable-next-line react/prop-types
    initialProducts.push(newProd);
    setProducts(initialProducts)
  };

  const [cod, setCod] = useState(0);
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const [margin, setMargin] = useState(0);
  const [stock, setStock] = useState(0);

  const setChangeCod = (value) => {
    setCod(value);
  };
  const setChangeName = (value) => {
    setName(value);
  };
  const setChangeCost = (value) => {
    setCost(value);
  };
  const setChangeMargin = (value) => {
    setMargin(value);
  };
  const setChangeStock = (value) => {
    setStock(value);
  };

  return (
    <div className="absolute  w-2/4 h-[95%] top-[2.5%] left-1/4  bg-gray-500">
      <form
        className="grid grid-cols-1 gap-2 py-2 place-items-center"
        action=""
      >
        <label className="w-5/6 ">
          <p>Codigo</p>
          <input
            onChange={(e) => setChangeCod(e.target.value)}
            className="w-full "
            type="number"
          />
        </label>
        <label className="w-5/6 ">
          <p>Nombre</p>

          <input
            onChange={(e) => setChangeName(e.target.value)}
            className="w-full "
            type="text"
          />
        </label>
        <label className="w-5/6 ">
          <p>Costo</p>

          <input
            onChange={(e) => setChangeCost(e.target.value)}
            className="w-full "
            type="number"
          />
        </label>
        <label className="w-5/6 ">
          <p>Margen</p>

          <input
            onChange={(e) => setChangeMargin(e.target.value)}
            className="w-full "
            type="number"
          />
        </label>
        <label className="w-5/6 ">
          <p>Stock</p>

          <input
            onChange={(e) => setChangeStock(e.target.value)}
            type="number"
            min={0}
            max={100}
            className="w-full"
          />
        </label>
        <div className="w-full place-items-center grid">
          <div>
            <button
              onClick={(e) => {
                e.preventDefault()	
                handleAddProd({
                  cod: cod,
                  name: name,
                  cost: cost,
                  margin: margin,
                  stock: stock,
                });
              }}
              className="mx-5"
            >
              Agregar
            </button>
            <button className="mx-5">Cancelar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProdcut;
