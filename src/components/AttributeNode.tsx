import React from 'react';
import "./components.css";

interface IAttributeNode {
    setAttributeNameInput: React.Dispatch<React.SetStateAction<string>>;
    attributeNameInput: string;
    setWeightedInput: React.Dispatch<React.SetStateAction<number>>;
    weightedInput: number;
}
export default function AttributeNode(props:IAttributeNode) {
    const {setAttributeNameInput, attributeNameInput, setWeightedInput, weightedInput} = props;
    
    return(
        <div className="attribute-node">
        <input placeholder="Enter Attribute..." onChange={(e)=> setAttributeNameInput(e.target.value)} value={attributeNameInput}></input> 
        Weighting: {weightedInput}
        <input type="range" id="weighting" name="weighting" onChange={(e)=> setWeightedInput(Number(e.target.value))} value={weightedInput}
         min="0" step="0.1" max="1"/>
        </div>  
    )
}