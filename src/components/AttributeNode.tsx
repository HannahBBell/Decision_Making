import React, {useState} from 'react';
import ReactFlow from 'react-flow-renderer';

export default function AttributeNode() {
    const [weightedInput, setWeightedInput] = useState("0")

    return(
        <div>
        <input placeholder="Enter Attribute..."></input> 
        Weighting: {weightedInput}
        <input type="range" id="weighting" name="weighting" onChange={(e)=> setWeightedInput(e.target.value)} value={weightedInput}
         min="0" step="0.1" max="1"/>
        </div>  
    )
}