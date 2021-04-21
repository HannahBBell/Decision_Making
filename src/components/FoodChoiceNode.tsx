import React, {useState} from 'react';
import ReactFlow from 'react-flow-renderer';

export default function FoodChoiceNode() {

    const [calorieScore, setCalorieScore] = useState("0")
    const [costScore, setCostScore] = useState("0")
    const [proteinScore, setProteinScore] = useState("0")
    const [tasteScore, setTasteScore] = useState("0")

    const [foodNameInput, setFoodNameInput] = useState("") //input of food stored in foodNameInput so can be used for 'winner'
    
    const totalScore = +calorieScore + +costScore + +proteinScore + +tasteScore

    return(
        <div>
        <input placeholder="Enter Food Name..." onChange={(e)=> setFoodNameInput(e.target.value)}></input> 
        Calories: {calorieScore}
        <input type="range" id="calorieScore" name="calorieScore" onChange={(e)=> setCalorieScore(e.target.value)} value={calorieScore}
         min="0" max="100"/>
        Cost: {costScore}
        <input type="range" id="costScore" name="costScore" onChange={(e)=> setCostScore(e.target.value)} value={costScore}
         min="0" max="100"/>
        Protein: {proteinScore}
        <input type="range" id="proteinScore" name="proteinScore" onChange={(e)=> setProteinScore(e.target.value)} value={proteinScore}
         min="0" max="100"/>
        Taste: {tasteScore}
        <input type="range" id="tasteScore" name="tasteScore" onChange={(e)=> setTasteScore(e.target.value)} value={tasteScore}
         min="0" max="100"/>
        Total Score: {totalScore}
        </div>  
    )
}


// const [weightedInput, setWeightedInput] = useState("0")

//     return(
//         <div>
//         <input placeholder="Enter Attribute..."></input> 
//         <input type="range" id="weighting" name="weighting" onChange={(e)=> setWeightedInput(e.target.value)} value={weightedInput}
//          min="0" max="100"/>
//         {weightedInput}
//         </div>  