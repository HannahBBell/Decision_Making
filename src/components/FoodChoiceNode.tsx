import React, { useState, useEffect } from 'react';
import "./components.css";

interface IFoodChoiceNode {
    foodChoiceNodeAttributeNameInputArray: string[];
    foodChoiceNodeWeightedInputArray: number[];
    setFoodNameInput: React.Dispatch<React.SetStateAction<string>>;
    setFoodChoiceTotalScore: React.Dispatch<React.SetStateAction<number>>;
};

//Does weighted calcs for each attribute
export function totalScoreOfWeightedAttribute(attributeScore: number, weightedInput: number): number {
    return attributeScore * weightedInput
};

export default function FoodChoiceNode(props: IFoodChoiceNode) {

    const { foodChoiceNodeAttributeNameInputArray, foodChoiceNodeWeightedInputArray, setFoodNameInput, setFoodChoiceTotalScore } = props;

    const [attributeScore1, setAttributeScore1] = useState(0);
    const [attributeScore2, setAttributeScore2] = useState(0);
    const [attributeScore3, setAttributeScore3] = useState(0);
    const [attributeScore4, setAttributeScore4] = useState(0);

    //sum of all weighted attribute scores - rounded to 2dp
    const sumWeightedAttributeScores = Math.round(((totalScoreOfWeightedAttribute(attributeScore1, foodChoiceNodeWeightedInputArray[0]) + totalScoreOfWeightedAttribute(attributeScore2, foodChoiceNodeWeightedInputArray[1]) + totalScoreOfWeightedAttribute(attributeScore3, foodChoiceNodeWeightedInputArray[2]) + totalScoreOfWeightedAttribute(attributeScore4, foodChoiceNodeWeightedInputArray[3]))) * 100) / 100

    //updating totalScore useState
    //everytime sumWeightedAttributeScore changes, update useState (foodChoiceTotalScore) with current value
    useEffect(() => setFoodChoiceTotalScore(sumWeightedAttributeScores), [sumWeightedAttributeScores, setFoodChoiceTotalScore])

    return (
        <div className="foodchoice-node">
            <input placeholder="Enter Food Name..." onChange={(e) => setFoodNameInput(e.target.value)}></input>
            <br />
            {foodChoiceNodeAttributeNameInputArray[0]}: {attributeScore1}
            <br />
            <input type="range" id="calorieScore" name="calorieScore" onChange={(e) => setAttributeScore1(Number(e.target.value))} value={attributeScore1}
                min="0" max="100" />
            <br />
            {foodChoiceNodeAttributeNameInputArray[1]}: {attributeScore2}
            <br />
            <input type="range" id="costScore" name="costScore" onChange={(e) => setAttributeScore2(Number(e.target.value))} value={attributeScore2}
                min="0" max="100" />
            <br />
            {foodChoiceNodeAttributeNameInputArray[2]}: {attributeScore3}
            <br />
            <input type="range" id="proteinScore" name="proteinScore" onChange={(e) => setAttributeScore3(Number(e.target.value))} value={attributeScore3}
                min="0" max="100" />
            <br />
            {foodChoiceNodeAttributeNameInputArray[3]}: {attributeScore4}
            <br />
            <input type="range" id="tasteScore" name="tasteScore" onChange={(e) => setAttributeScore4(Number(e.target.value))} value={attributeScore4}
                min="0" max="100" />
        Total Score: {sumWeightedAttributeScores}
        </div>
    )
}