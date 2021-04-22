import React, {useState} from 'react';

interface IFoodChoiceNode {
    attributeNameInput1: string;
    attributeNameInput2: string;
    attributeNameInput3: string;
    attributeNameInput4: string;
}
//still to be done: need to add in attribute names to the correct line 

export default function FoodChoiceNode(props:IFoodChoiceNode) {

    const [calorieScore, setCalorieScore] = useState("0")
    const [costScore, setCostScore] = useState("0")
    const [proteinScore, setProteinScore] = useState("0")
    const [tasteScore, setTasteScore] = useState("0")

    const [foodNameInput, setFoodNameInput] = useState("") //input of food stored in foodNameInput so can be used for 'winner'
    
    const sumScore = +calorieScore + +costScore + +proteinScore + +tasteScore
    
    const [totalScore, setTotalScore] = useState("0")

    return(
        <div>
        <input placeholder="Enter Food Name..." onChange={(e)=> setFoodNameInput(e.target.value)}></input> 
        <br/>
        {props.attributeNameInput1}: {calorieScore}
        <br/>
        <input type="range" id="calorieScore" name="calorieScore" onChange={(e)=> setCalorieScore(e.target.value)} value={calorieScore}
         min="0" max="100"/>
        <br/>
        {props.attributeNameInput2}: {costScore}
        <br/>
        <input type="range" id="costScore" name="costScore" onChange={(e)=> setCostScore(e.target.value)} value={costScore}
         min="0" max="100"/>
        <br/>
        {props.attributeNameInput3}: {proteinScore}
        <br/>
        <input type="range" id="proteinScore" name="proteinScore" onChange={(e)=> setProteinScore(e.target.value)} value={proteinScore}
         min="0" max="100"/>
        <br/>
        {props.attributeNameInput4}: {tasteScore}
        <br/>
        <input type="range" id="tasteScore" name="tasteScore" onChange={(e)=> setTasteScore(e.target.value)} value={tasteScore}
         min="0" max="100"/>
        Total Score: {sumScore}
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