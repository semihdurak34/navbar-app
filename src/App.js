import React ,{useState}from "react";

import Navbar from "./Navbar";
import data from "./FakeData";


const App = () => {
 /*  const [dataArray, setDataArray] = useState(data)
  const data= ()=>{
    dataArray();
  } */

  return (
    <div className="App">
      <Navbar  data={data} color="blue"/>
    </div>
  );
};

export default App;
