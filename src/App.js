
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './app.css'
import Header from "./Header"
import Subscribe from "./Subscribe";
import Login from "./Login";
import Home from "./Home";
import Footer from "./Footer"
import Search from "./Search";
import Movies from "./Movies";
import Register from "./Register";



  

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
    <Route path={"/"} element={<Home />}/>
    <Route path={"/subscribe"} element={<Subscribe />}/>
    <Route path={"/login"} element={<Login />}/>
    <Route path={"/search"} element={<Search />}/>
    <Route path={"/MOVIES"} element={<Movies />}/>
    <Route path={"/signUp"} element={<Register />}/>
     </Routes>
  <Footer/>
  </Router>
 </>
  )
}
export default App;






