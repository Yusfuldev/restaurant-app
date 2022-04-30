import "./App.css";
import Nav from "./components/header/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import About from "./components/about/About";
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/"> <Home /> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
