import { API_KEY } from "../apiKey";
import type { NookipediaCharacter } from "../types/villager";

export let allVillagers: NookipediaCharacter[] = [];

// Fetches all villagers only if not already fetched
export const fetchAllVillagers = async (): Promise<NookipediaCharacter[]> => {
  if (allVillagers.length === 0) {
    const response = await fetch("https://api.nookipedia.com/villagers", {
      headers: { "X-API-KEY": API_KEY },
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    allVillagers = await response.json();
  }
  return allVillagers;
};
