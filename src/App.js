import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
function App() {
  return (
    <Router>
       <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
       </Routes>
       </Router>
  );
}

export default App;
