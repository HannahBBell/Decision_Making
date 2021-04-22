import React from 'react';
import "./components.css";

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
        debugger
        let arrayOfScores:number[] = [];
        //console.log(props.foodChoice2TotalScore)
        let winner = ""
        arrayOfScores.push(Number(props.foodChoice1TotalScore))
        arrayOfScores.push(Number(props.foodChoice2TotalScore))
        arrayOfScores.push(Number(props.foodChoice3TotalScore))
        arrayOfScores.push(Number(props.foodChoice4TotalScore))
        //console.log(props.foodChoice1TotalScore)
        const winningScore = (Math.max(...arrayOfScores)).toString()
        console.log(winningScore)
        if (winningScore === props.foodChoice1TotalScore){
             winner = props.foodNameInput1
        }
        else if (winningScore === props.foodChoice2TotalScore){
            winner = props.foodNameInput2
        }
        else if (winningScore === props.foodChoice3TotalScore){
            winner = props.foodNameInput3
        }
        else if (winningScore === props.foodChoice4TotalScore){
            winner = props.foodNameInput4
        }
        console.log(winner)
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