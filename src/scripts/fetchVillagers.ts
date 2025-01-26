// Fetch and handle villager data
// Fetch all villagers from the API
// Cache the data to avoid repeated API calls
// Filter villagers based on search input

import { API_KEY } from "../apiKey";
import type { NookipediaCharacter } from "../types/villager";

export const fetchVillagers = async (
  searchTerm?: string,
  sortBy?: keyof NookipediaCharacter
): Promise<NookipediaCharacter[]> => {
  const url = new URL("https://api.nookipedia.com/villagers");

  if (searchTerm) url.searchParams.set("name", searchTerm);
  if (sortBy) url.searchParams.set("sort", sortBy);

  const response = await fetch(url.toString(), {
    headers: {
      "X-API-KEY": API_KEY,
      Accept: "application/json",
    },
  });

  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return response.json();
};
