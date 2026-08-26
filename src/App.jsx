import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 text-white">
      <Navbar />
      <Mainroutes />
      <ToastContainer />
    </div>
  );
};

export default App;
