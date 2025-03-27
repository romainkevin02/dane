import { useState } from "react";
function calc(){
    const [num1,setNum1] = useState();
    const [num2,setnum2] = useState();
    const [calc,setCalc]= useState();
    const add = () =>{
        setCalc( parseInt(num1)+parseInt(num2))
    }
    return(

    <>
    <div className="container">
        <form action="">
            <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="text" value={num2} onChange={(e) => setnum2(e.target.value)} />
            <button onClick={() => add()}>+</button>
            <button onClick={() => sub()}>-</button>
            <button onClick={() => div()}>/</button>
            <button onClick={() => multi()}>*</button>
            {calc&&calc}
        </form>
    </div>
    </>

)

}

export default calc