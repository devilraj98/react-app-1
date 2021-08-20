import React,{useState} from 'react';


const Counter=()=> {
   const [Counter,setCounter] = useState(0);

    const clickme =(()=>{
     
      setCounter(Counter+1);
  })
    return (
        <div className="container mt-5">
        <button className="btn btn-primary"mt-2 onClick={clickme}>Click me {Counter}</button>
        </div>
    );
}

export default Counter;