import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Category from "./components/Category";
import Item from "./components/Item";
import "./styles/style.css";

const url = "https://fakestoreapi.com/products";

const Context = createContext();

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
        document.querySelector("#loading").style.backgroundColor =
          "rgb(194, 243, 194)";
      })
      .catch((err) => console.log("An error has occured: ", err));
  }, []);

  return (
    <Context.Provider value={{ loading, data }}>
      <Router>
        <Header />
        <Route path="/" exact children={<Homepage />} />
        <Route path="/:category" exact children={<Category />} />
        <Route path="/item/:itemId" children={<Item />} />
      </Router>
    </Context.Provider>
  );
}

export default App;
export { Context };
