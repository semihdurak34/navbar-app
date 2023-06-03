import React from "react";
import data from "./FakeData";
import Navbar from "./Navbar";


const App = () => {
 

  return (
    <div className="App">
      <Navbar data={data}  />
    </div>
  );
};

export default App;
