import "./App.css";
import { Header } from "./components/Header";
import { MyContext } from "./components/contex/myContext";
import { useState } from "react";
function App() {
  const [changeTheme, setchangeTheme] = useState(true);
  function handlerChange() {
    setchangeTheme(!changeTheme);
  }
  return (
    <MyContext.Provider value={{ theme: changeTheme, handlerChange }}>
      <Header />
    </MyContext.Provider>
  );
}
export default App;
