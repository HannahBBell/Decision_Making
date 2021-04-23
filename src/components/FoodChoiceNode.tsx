import React, {useState, useEffect} from 'react';
import "./components.css";

interface IFoodChoiceNode {
    attributeNameInput1: string;
    attributeNameInput2: string;
    attributeNameInput3: string;
    attributeNameInput4: string;
    weightedInput1:number;
    weightedInput2:number;
    weightedInput3:number;
    weightedInput4:number;
    setFoodNameInput: React.Dispatch<React.SetStateAction<string>>;
    setFoodChoiceTotalScore: React.Dispatch<React.SetStateAction<number>>;
} 

export default function FoodChoiceNode(props:IFoodChoiceNode) {

    const {weightedInput1, weightedInput2, weightedInput3, weightedInput4, setFoodNameInput, setFoodChoiceTotalScore, attributeNameInput1, attributeNameInput2, attributeNameInput3, attributeNameInput4} = props;

    const [attributeScore1, setAttributeScore1] = useState(0);
    const [attributeScore2, setAttributeScore2] = useState(0);
    const [attributeScore3, setAttributeScore3] = useState(0);
    const [attributeScore4, setAttributeScore4] = useState(0);

    //Does weighted calcs for each attribute
    function totalScoreOfWeightedAttribute(attributeScore:number, weightedInput:number):number{
        return attributeScore * weightedInput
    }

    const sumWeightedAttributeScores = Math.round(((totalScoreOfWeightedAttribute(attributeScore1, weightedInput1) + totalScoreOfWeightedAttribute(attributeScore2, weightedInput2) + totalScoreOfWeightedAttribute(attributeScore3, weightedInput3) + totalScoreOfWeightedAttribute(attributeScore4, weightedInput4)))*100)/100
    
    //updating totalScore useState
    //everytime sumWeightedAttributeScore changes, update useState (foodChoiceTotalScore) with current value
    useEffect(()=>setFoodChoiceTotalScore(sumWeightedAttributeScores), [sumWeightedAttributeScores, setFoodChoiceTotalScore])

    return(
        <div className="foodchoice-node">
        <input placeholder="Enter Food Name..." onChange={(e)=> setFoodNameInput(e.target.value)}></input> 
        <br/>
        {attributeNameInput1}: {attributeScore1}
        <br/>
        <input type="range" id="calorieScore" name="calorieScore" onChange={(e)=> setAttributeScore1(Number(e.target.value))} value={attributeScore1}
         min="0" max="100"/>
        <br/>
        {attributeNameInput2}: {attributeScore2}
        <br/>
        <input type="range" id="costScore" name="costScore" onChange={(e)=> setAttributeScore2(Number(e.target.value))} value={attributeScore2}
         min="0" max="100"/>
        <br/>
        {attributeNameInput3}: {attributeScore3}
        <br/>
        <input type="range" id="proteinScore" name="proteinScore" onChange={(e)=> setAttributeScore3(Number(e.target.value))} value={attributeScore3}
         min="0" max="100"/>
        <br/>
        {attributeNameInput4}: {attributeScore4}
        <br/>
        <input type="range" id="tasteScore" name="tasteScore" onChange={(e)=> setAttributeScore4(Number(e.target.value))} value={attributeScore4}
         min="0" max="100"/>
        Total Score: {sumWeightedAttributeScores}
        </div>  
    )
}