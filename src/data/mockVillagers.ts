import { Villager } from "../types/villager";

// Test vills to make sure the program works before I fetch any data
export const mockVillagers: Villager[] = [
  {
    name: "Ribbot",
    gender: "Male",
    personality: "Jock",
    species: "Frog",
    hobby: "Fitness",
    starSign: "Aquarius",
    birthMonth: "February",
  },
  {
    name: "Fauna",
    gender: "Female",
    personality: "Normal",
    species: "Deer",
    hobby: "Nature",
    starSign: "Pisces",
    birthMonth: "March",
  },
  {
    name: "Bob",
    gender: "Male",
    personality: "Lazy",
    species: "Cat",
    hobby: "Fishing",
    starSign: "Taurus",
    birthMonth: "May",
  },
  {
    name: "Rosie",
    gender: "Female",
    personality: "Peppy",
    species: "Cat",
    hobby: "Music",
    starSign: "Gemini",
    birthMonth: "June",
  },
];

export let guessedVillagers: Villager[] = [];
