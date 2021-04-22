import React, {useState, useEffect} from 'react';
import "./components.css";

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
    setFoodChoiceTotalScore: React.Dispatch<React.SetStateAction<string>>;
}
//still to be done: need to add in attribute names to the correct line 

export default function FoodChoiceNode(props:IFoodChoiceNode) {

    const [attributeScore1, setAttributeScore1] = useState("0")
    const [attributeScore2, setAttributeScore2] = useState("0")
    const [attributeScore3, setAttributeScore3] = useState("0")
    const [attributeScore4, setAttributeScore4] = useState("0")

    //Weighted Calculations
    //does the multiplaction of attribute x weightedInput
    function totalScoreOfWeightedAttribute(attributeScore:string, weightedInput:string):number{
        return Number(attributeScore) * Number(weightedInput)
    }
    const sumWeightedAttributeScores = (totalScoreOfWeightedAttribute(attributeScore1, props.weightedInput1) + totalScoreOfWeightedAttribute(attributeScore2, props.weightedInput2) + totalScoreOfWeightedAttribute(attributeScore3, props.weightedInput3) + totalScoreOfWeightedAttribute(attributeScore4, props.weightedInput4)).toFixed(1).toString()
    
    //updating totalScore useState
    useEffect(()=>props.setFoodChoiceTotalScore(sumWeightedAttributeScores), [sumWeightedAttributeScores]) //everytime sumWeightedAttributeScore changes, update useState (foodChoiceTotalScore) with current value

    return(
        <div className="foodchoice-node">
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
        Total Score: {sumWeightedAttributeScores}
        </div>  
    )
}
