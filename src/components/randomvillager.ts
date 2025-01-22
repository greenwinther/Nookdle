import { mockVillagers } from "../data/mockVillagers";
import { Villager } from "../types/villager";

// Function that selects a random villager for the game
export const getRandomVillager = (): Villager => {
  const randomIndex = Math.floor(Math.random() * mockVillagers.length);
  return mockVillagers[randomIndex];
};

// Function based on the villager to make it more dynamic and scalable (state)
export const getClues = (villager: Villager) => [
  { key: "gender", label: "Gender", value: villager.gender },
  {
    key: "personality",
    label: "Personality",
    value: villager.personality,
  },
  { key: "species", label: "Species", value: villager.species },
  { key: "hobby", label: "Hobby", value: villager.hobby },
  { key: "starSign", label: "Star Sign", value: villager.starSign },
  {
    key: "birthMonth",
    label: "Birth Month",
    value: villager.birthMonth,
  },
];
