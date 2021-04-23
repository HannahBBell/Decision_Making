import React from 'react';
import "./components.css";

export interface iWinnerNode{
    foodNameInput1: string;
    foodNameInput2: string;
    foodNameInput3: string;
    foodNameInput4: string;
    foodChoice1TotalScore: number;
    foodChoice2TotalScore: number;
    foodChoice3TotalScore: number;
    foodChoice4TotalScore: number;
}

export function winnerScore(props:iWinnerNode){
    const {foodChoice1TotalScore, foodChoice2TotalScore, foodChoice3TotalScore, foodChoice4TotalScore, foodNameInput1, foodNameInput2, foodNameInput3, foodNameInput4} = props;
    
    let arrayOfScores:number[] = [];
    let winner = ""

    arrayOfScores.push(foodChoice1TotalScore)
    arrayOfScores.push(foodChoice2TotalScore)
    arrayOfScores.push(foodChoice3TotalScore)
    arrayOfScores.push(foodChoice4TotalScore)
    
    const winningScore = (Math.max(...arrayOfScores))
    
    //When initally loading page - dont want the first (most-left) foodChoiceNode to be assigned winner automatically - when all scores are 0 we want nothing to be diplayed as winner
    if (winningScore === 0){
        winner = ""
    }
    else{
        if (winningScore === foodChoice1TotalScore){
            winner = foodNameInput1
        }
        else if (winningScore === foodChoice2TotalScore){
            winner = foodNameInput2
        }
        else if (winningScore === foodChoice3TotalScore){
            winner = foodNameInput3
        }
        else if (winningScore === foodChoice4TotalScore){
            winner = foodNameInput4
        }
    }
    return winner
};

export default function WinnerNode(props:iWinnerNode) {

    return(
        <div>
            Winner
            <br/>
            <div className="winner-name">{winnerScore(props)}</div>
        </div>  
    )
}