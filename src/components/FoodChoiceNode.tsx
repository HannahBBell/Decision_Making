import React from 'react';
import ReactFlow from 'react-flow-renderer';

export default function FoodChoiceNode() {
    return(
        <div>
        <input placeholder="Enter Food Name..."></input> 
        Calories
        <input placeholder="Score out of 100"></input>
        Cost
        <input placeholder="Score out of 100"></input>
        Protein
        <input placeholder="Score out of 100"></input>
        Taste
        <input placeholder="Score out of 100"></input>
        Total Score: 100
        </div>  
    )
}