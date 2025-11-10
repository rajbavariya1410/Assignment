import { useState } from "react";
import "./App.css";
import { FaMinus, FaPlus } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  const Increament = () => {
      
      setCount(count + 1)
  }
  const Decreament = () => {
    
    
      setCount(count - 1)
    
  }


  return (
    <>
      <div className="">
        <div className="">
          <h1>Counter App</h1>
        </div>
        <div className="">
          <button type="submit" name="Counter" className="" onClick={Increament}> <FaPlus/> </button>
            <input type="text" htmlFor="Counter" className="" value={count} disabled/>
          <button type="submit" name="Counter" className="" onClick={Decreament}> <FaMinus/> </button>
        </div>
      </div>
    </>
  );
}

export default App;