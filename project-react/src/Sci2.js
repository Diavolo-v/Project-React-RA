import React, { useRef } from "react";


function Sci2(){
    const inputref = useRef();
    const handlebutton = () =>{ console.log("hellow") ; console.log(inputref.value)}
    const handleinputText = () => {console.log("wpisuje text")}
    return(
        <div>
            <input type="button" value={"value"} onClick={handlebutton}></input>
            <input ref ={inputref} type="text"  min={2} max={15}  onChange={handleinputText}></input>
        </div>
    );
}
export default Sci2;