import { Villager } from "../../types/villager";

const monthNumbers: { [key: string]: number } = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

export type Clue = {
  attribute: keyof Villager;
  status: "correct" | "incorrect" | "higher" | "lower";
  value: string;
};

export function compareClues(guess: Villager, target: Villager): Clue[] {
  const clues: Clue[] = [];

  // Compare simple attributes
  const attributes: (keyof Villager)[] = [
    "gender",
    "personality",
    "species",
    "hobby",
    "starSign",
  ];
  for (const attr of attributes) {
    clues.push({
      attribute: attr,
      status: guess[attr] === target[attr] ? "correct" : "incorrect",
      value: guess[attr],
    });
  }

  // Compare birth month separately
  const guessMonth = monthNumbers[guess.birthMonth];
  const targetMonth = monthNumbers[target.birthMonth];
  clues.push({
    attribute: "birthMonth",
    status:
      guessMonth === targetMonth
        ? "correct"
        : guessMonth < targetMonth
        ? "higher"
        : "lower",
    value: guess.birthMonth,
  });

  return clues;
}
