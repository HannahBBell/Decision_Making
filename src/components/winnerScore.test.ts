import {winnerScore, iWinnerNode} from "./WinnerNode";

const highestNumberIsWinner:iWinnerNode = {
    winnerNodeFoodNameInputArray:["chicken", "burrito", "sushi", "pizza"],
    winnerNodeFoodChoiceTotalScoreArray:[0,80.5,64.5,72.9]
};

const allScoresAreZero:iWinnerNode = {
    winnerNodeFoodNameInputArray:["chicken", "burrito", "sushi", "pizza"],
    winnerNodeFoodChoiceTotalScoreArray:[0,0,0,0]
};

test("takes in 4 numbers and returns the string of the highest number", () => {
    expect(winnerScore(highestNumberIsWinner)).toBe("burrito")
    expect(winnerScore(allScoresAreZero)).toBe("")
});