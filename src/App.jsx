import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 text-white">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
