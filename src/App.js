import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Category from "./components/Category";
import Item from "./components/Item";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact children={<Homepage />} />
      <Route path="/:pageCategory" exact children={<Category />} />
      <Route path="/item/:itemId" children={<Item />} />
    </Router>
  );
}

export default App;
