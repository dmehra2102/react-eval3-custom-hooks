import { useState } from "react";

export const useCounter = ({initialValue,minValue,maxValue}) => {
    const [count,setCount] = useState(initialValue);
    const incCount =(Value)=> {
        if(Value && count<maxValue){
            setCount(count+Value);
        }
        else if(Value===undefined && count<maxValue){
            setCount(count+1);
        }
    }
    const decCount = (Value)=> {
        if(Value && count>minValue){
            setCount(count-Value);
        }
        
    }
    return {count,incCount,decCount};
};
