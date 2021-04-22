import React, {useState} from 'react';

interface IFoodChoiceNode {
    attributeNameInput1: string;
    attributeNameInput2: string;
    attributeNameInput3: string;
    attributeNameInput4: string;
    weightedInput1:string;
    weightedInput2:string;
    weightedInput3:string;
    weightedInput4:string;
    setFoodNameInput: React.Dispatch<React.SetStateAction<string>>;
}
//still to be done: need to add in attribute names to the correct line 

export default function FoodChoiceNode(props:IFoodChoiceNode) {

    const [attributeScore1, setAttributeScore1] = useState("0")
    const [attributeScore2, setAttributeScore2] = useState("0")
    const [attributeScore3, setAttributeScore3] = useState("0")
    const [attributeScore4, setAttributeScore4] = useState("0")

    // const [foodNameInput, setFoodNameInput] = useState("") //input of food stored in foodNameInput so can be used for 'winner'
    
    //Weighted Calculations
    const sumWeightedAttribute1Score = Number(attributeScore1) * Number(props.weightedInput1)
    const sumWeightedAttribute2Score = Number(attributeScore2) * Number(props.weightedInput2)
    const sumWeightedAttribute3Score = Number(attributeScore3) * Number(props.weightedInput3)
    const sumWeightedAttribute4Score = Number(attributeScore4) * Number(props.weightedInput4)
    const sumWeightedAttributesScores = ((sumWeightedAttribute1Score + sumWeightedAttribute2Score + sumWeightedAttribute3Score + sumWeightedAttribute4Score).toFixed(1)).toString()
    

    
    const [totalScore, setTotalScore] = useState("0")

    return(
        <div>
        <input placeholder="Enter Food Name..." onChange={(e)=> props.setFoodNameInput(e.target.value)}></input> 
        <br/>
        {props.attributeNameInput1}: {attributeScore1}
        <br/>
        <input type="range" id="calorieScore" name="calorieScore" onChange={(e)=> setAttributeScore1(e.target.value)} value={attributeScore1}
         min="0" max="100"/>
        <br/>
        {props.attributeNameInput2}: {attributeScore2}
        <br/>
        <input type="range" id="costScore" name="costScore" onChange={(e)=> setAttributeScore2(e.target.value)} value={attributeScore2}
         min="0" max="100"/>
        <br/>
        {props.attributeNameInput3}: {attributeScore3}
        <br/>
        <input type="range" id="proteinScore" name="proteinScore" onChange={(e)=> setAttributeScore3(e.target.value)} value={attributeScore3}
         min="0" max="100"/>
        <br/>
        {props.attributeNameInput4}: {attributeScore4}
        <br/>
        <input type="range" id="tasteScore" name="tasteScore" onChange={(e)=> setAttributeScore4(e.target.value)} value={attributeScore4}
         min="0" max="100"/>
        Total Score: {sumWeightedAttributesScores} 
        </div>  
    )
}

//{numberAttribute1} {numberWeighted1} {sumNumbers} {props.weightedInput1}


// const [weightedInput, setWeightedInput] = useState("0")

//     return(
//         <div>
//         <input placeholder="Enter Attribute..."></input> 
//         <input type="range" id="weighting" name="weighting" onChange={(e)=> setWeightedInput(e.target.value)} value={weightedInput}
//          min="0" max="100"/>
//         {weightedInput}
//         </div>  