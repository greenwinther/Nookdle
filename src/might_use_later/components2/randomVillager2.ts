import { Villager } from "../../types/villager";

// Arrow function to select a random villager
export const selectRandomVillager = (villagers: Villager[]): Villager => {
  return villagers[Math.floor(Math.random() * villagers.length)];
};
