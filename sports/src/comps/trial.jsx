import { useState } from "react";
import './FaceBook.css'

function trial(){
    const [salary ,setSalary] = useState(300)
    const check_salary = () => {
        salary > 300 ? alert("over"):alert("under")
    };

    return(
        <>
        <form action="">
        <input type="text" className="form-input"  placeholder="enter salary" onChange={(e) => setSalary(e.target.value) }/>
        <button type="button" onClick={()=> check_salary()} >check</button>
        </form>
        </>
    )

}

export default trial