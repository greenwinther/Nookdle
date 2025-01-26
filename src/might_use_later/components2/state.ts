import { Villager } from "../../types/villager";

// State for the guessed villager's attributes
export const attributes = (villager: Villager) => [
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
