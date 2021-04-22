import React from 'react';

interface iWinnerNode{
    foodNameInput1: string;
    foodNameInput2: string;
    foodNameInput3: string;
    foodNameInput4: string;
    foodChoice1TotalScore: string;
    foodChoice2TotalScore: string;
    foodChoice3TotalScore: string;
    foodChoice4TotalScore: string;
}

export default function WinnerNode(props:iWinnerNode) {

    //Math.max(...array1)
    function winnerScore(){
        let arrayOfScores = [];
        let winner = ""
        arrayOfScores.push(Number(props.foodChoice1TotalScore))
        arrayOfScores.push(Number(props.foodChoice2TotalScore))
        arrayOfScores.push(Number(props.foodChoice3TotalScore))
        arrayOfScores.push(Number(props.foodChoice4TotalScore))
        const winningScore = (Math.max(...arrayOfScores)).toString()
        if (winningScore === props.foodChoice1TotalScore){
            winner = props.foodNameInput1
        }
        else if (winningScore === props.foodChoice2TotalScore){
            winner = props.foodNameInput2
        }
        else if (winningScore === props.foodChoice3TotalScore){
            winner = props.foodNameInput3
        }
        else {
            winner = props.foodNameInput4
        }
        return winner
    };

    winnerScore()

    return(
        <div>
        Winner
        <br/>
        {winnerScore()}
        </div>  
    )
}