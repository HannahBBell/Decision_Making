import {winnerScore, iWinnerNode} from "./WinnerNode";

const highestNumberIsWinner:iWinnerNode = {
    foodNameInput1:"chicken", 
    foodNameInput2: "burrito", 
    foodNameInput3: "sushi", 
    foodNameInput4: "pizza", 
    foodChoice1TotalScore: 0, 
    foodChoice2TotalScore: 80.5, 
    foodChoice3TotalScore: 64.5, 
    foodChoice4TotalScore: 72.9
};

const allScoresAreZero:iWinnerNode = {
    foodNameInput1:"chicken", 
    foodNameInput2: "burrito", 
    foodNameInput3: "sushi", 
    foodNameInput4: "pizza", 
    foodChoice1TotalScore: 0, 
    foodChoice2TotalScore: 0, 
    foodChoice3TotalScore: 0, 
    foodChoice4TotalScore: 0
};

test("takes in 4 numbers and returns the string of the highest number", () => {
    expect(winnerScore(highestNumberIsWinner)).toBe("burrito")
    expect(winnerScore(allScoresAreZero)).toBe("")
});