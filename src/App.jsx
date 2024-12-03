import { useContext } from "react";
import { AppContext } from "./AppProvider";
import SignIn from "./components/signIn.jsx/signIn";
import Page from "./components/Page/Page";
export default function App() {
  const { inicied } = useContext(AppContext);

  return (
    <div>
      {
        !inicied ? 
        (
          <SignIn />
        ) : (
          <Page/>
        )
      }
    </div>
  );
}
