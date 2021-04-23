import React from 'react';
import "./components.css";

export interface iWinnerNode{
    winnerNodeFoodNameInputArray:string[];
    winnerNodeFoodChoiceTotalScoreArray:number[];
};

export function winnerScore(props:iWinnerNode){
    const {winnerNodeFoodNameInputArray, winnerNodeFoodChoiceTotalScoreArray} = props;
    
    let winner = ""
    const winningScore = (Math.max(...winnerNodeFoodChoiceTotalScoreArray))
    
    //When initally loading page - dont want the first (most-left) foodChoiceNode to be assigned winner automatically - when all scores are 0 we want nothing to be diplayed as winner
    if (winningScore === 0){
        winner = ""
    }
    else{
        if (winningScore === winnerNodeFoodChoiceTotalScoreArray[0]){
            winner = winnerNodeFoodNameInputArray[0]
        }
        else if (winningScore === winnerNodeFoodChoiceTotalScoreArray[1]){
            winner = winnerNodeFoodNameInputArray[1]
        }
        else if (winningScore === winnerNodeFoodChoiceTotalScoreArray[2]){
            winner = winnerNodeFoodNameInputArray[2]
        }
        else if (winningScore === winnerNodeFoodChoiceTotalScoreArray[3]){
            winner = winnerNodeFoodNameInputArray[3]
        }
    }
    return winner
};

export default function WinnerNode(props:iWinnerNode) {
    return(
        <div className="winner-node">
            Winner
            <br/>
            <div className="winner-name">{winnerScore(props)}</div>
        </div>  
    )
}