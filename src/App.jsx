import React from "react";
import AppRouter from "./Router/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
    <Navbar/>
    <AppRouter/>
    <Footer/>
    </>
  )
}
export default App;
