import { Outlet } from "react-router-dom";

import { Formulario } from "./components/Formulario/Formulario";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Formulario/>
      <Outlet/>
    </div>
  );
}

export default App;
