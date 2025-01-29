import { Villager } from "../types/types";
import { mockVillagers } from "./mockVillagers";

// Random villager selector
export const randomVillager = (): Villager => {
  return mockVillagers[Math.floor(Math.random() * mockVillagers.length)];
};
