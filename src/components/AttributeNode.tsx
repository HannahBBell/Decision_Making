import React, {useState} from 'react';

interface IAttributeNode {
    setAttributeNameInput: React.Dispatch<React.SetStateAction<string>>;
    attributeNameInput: string;
    setWeightedInput: React.Dispatch<React.SetStateAction<string>>;
    weightedInput: string;
}
export default function AttributeNode(props:IAttributeNode) {
    return(
        <div>
        <input placeholder="Enter Attribute..." onChange={(e)=> props.setAttributeNameInput(e.target.value)} value={props.attributeNameInput}></input> 
        Weighting: {props.weightedInput}
        <input type="range" id="weighting" name="weighting" onChange={(e)=> props.setWeightedInput(e.target.value)} value={props.weightedInput}
         min="0" step="0.1" max="1"/>
        </div>  
    )
}