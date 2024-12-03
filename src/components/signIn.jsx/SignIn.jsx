import { useContext, useEffect } from "react";
import { AppContext } from "../../AppProvider"; // Asegúrate de importar el contexto correcto
import {login} from "../../../firebase"
import fondo from "../../assets/fondo.jpeg"
function SignIn() {
  const { setEmail, setPassword, setSave, email, password,save,setInicied } = useContext(AppContext);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedSave = localStorage.getItem("save") === "true";

    if (savedEmail) {
      setEmail(savedEmail);
    }
    setSave(savedSave);
  }, [setEmail, setSave]);

  const handleLogin = () => {
    setInicied(login(email, password));
    console.log(login(email, password))
  };

  const saveEmail = (isChecked) => {
    setSave(isChecked);
    if (isChecked) {
      localStorage.setItem("email", email);
      localStorage.setItem("save", "true");
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("save");
    }
  };

  return (
    <div className="grid grid-cols-2 place-items-center text-lg ">
      <div className="grid p-3 rounded-lg  w-96 h-[76vh] my-[12vh] border-2 border-gray-form">
        <h1 className="text-3xl red font-bold  text-center">Hielo Lagos</h1>

        <div>
          <p className="font-bold">Email</p>
          <input
            className="border-2 border-gray-form rounded-lg my-2 w-full p-2"
            type="email"
            placeholder="hielolagos@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p className="font-bold">Contraseña</p>
          <input
            className="border-2 border-gray-form rounded-lg my-2 w-full p-2"
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-original-blue text-white h-10 text-xl mx-4"
          onClick={handleLogin}
        >
          Iniciar sesión
        </button>

        <div>
          <span className="flex mb-4">
            <input
              type="checkbox"
              checked={save}
              onChange={(e) => saveEmail(e.target.checked)}
              className="w-5 h-4 mt-2"
            />
            <p className="font-bold mx-2">Recordarme</p>
          </span>
          <a href="#" className="mx-7 text-red-500">
            Recuperar la contraseña
          </a>
        </div>
      </div>
      <div className="border-l-2 w-full h-full">
        <img className="w-full h-full" src={fondo} alt="" />
      </div>
    </div>
  );
}

export default SignIn;
