import { useState } from "react";

export const LiftUp = () => {

     const[inputValue, setInputValue ] = useState(""); 
    return (
        <>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
            <DisplayComponent inputValue={inputValue}/>

        </>
    )
};

const InputComponent = ({inputValue, setInputValue}) => {
   

    return(
        <>
        <input type="text"
        placeholder="Enter Your Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}></input>
        </>
    )
}

const DisplayComponent = ({inputValue}) => {
    return(
        <p>The Current Value is:{inputValue}</p>
    )
}