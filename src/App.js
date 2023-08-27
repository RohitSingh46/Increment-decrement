import { useState } from "react";
import "./App.css";

function App() {
  // let count=0
  const[count,SetCount]=useState(0)
  function decreasehandler(){
      // count=count-1
      SetCount(count-1)
  }
  function increasehandler(){
   SetCount(count+1)

  }
  function resethandler(){
    SetCount(0)
  }
  return (
   <div className="w-[100vw] h-[100vh] justify-center items-center flex bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>
    <div className="flex gap-12 py-3 rounded-sm text-[#344151] text-[25px] bg-white">
        <button onClick={decreasehandler} className="border-r-2 text-center w-20 border=[#bfbfbf] text-5xl" >-</button>
      
      <div className="text-5xl font-bold gap-12">
        {count}
      </div>
      
        <button onClick={increasehandler} className="border-l-2 text-center w-20 border=[#bfbfbf] text-5xl" >+</button>
      
      </div>
      
        <button onClick={resethandler} className="text-white bg-blue-700 py-2 px-2 rounded-md w-[100px]" >Reset</button>
      
   </div>
  );
}

export default App;
