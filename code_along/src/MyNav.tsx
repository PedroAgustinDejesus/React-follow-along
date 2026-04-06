import Home from "./Home" 
import About from "./About"
import Products from "./Products"

import {BrowserRouter, Link, Route, Routes} from "react-router-dom"

function MyNav() {
    return(
       <BrowserRouter>
        <SetNav/>
        <Routes>
            <Route path="/home" element = {<Home/>} />
            <Route path="/about" element = {<About/>} />
            <Route path="/products" element = {<Products/>} />
        </Routes>
       </BrowserRouter>
    )
}

function SetNav() {
    return(
       <nav>
        <ul>
            <li><Link to="/home">Home</Link>" </li>
            <li><Link to="/about">About</Link>" </li>
            <li><Link to="/products">Products</Link>" </li>
        </ul>
       </nav>
    )
}

export default MyNav