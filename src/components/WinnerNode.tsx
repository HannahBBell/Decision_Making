import React from 'react';

interface iWinnerNode{
    foodNameInput1: string;
    foodNameInput2: string;
    foodNameInput3: string;
    foodNameInput4: string;

}

export default function WinnerNode(props:iWinnerNode) {

    return(
        <div>
        Winner
        <br/>
        Food
        </div>  
    )
}