import { totalScoreOfWeightedAttribute } from "./FoodChoiceNode";

test("takes 2 numbers and multiplies them together", () => {
    expect(totalScoreOfWeightedAttribute(1, 5)).toBe(5);
    expect(totalScoreOfWeightedAttribute(0, 2)).toBe(0);
    expect(totalScoreOfWeightedAttribute(-2, 4)).toBe(-8);
});

