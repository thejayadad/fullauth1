
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/login/Login";
import Feed from "./components/feed/Feed";



function App() {
  return (
    <>
<Navbar />
<Home   />

    </>
  );
}

export default App;
