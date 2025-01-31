import { API_KEY } from "../apiKey";
import type {
  NookipediaVillager,
  NookipediaBugs,
  NookipediaFish,
} from "../types/types";

export let allVillagers: NookipediaVillager[] = [];
export let allFish: NookipediaFish[] = [];
export let allBugs: NookipediaBugs[] = [];

/* old functions
 // Fetches all villagers only if not already fetched
export const fetchAllVillagers = async (): Promise<NookipediaVillager[]> => {
  if (allVillagers.length === 0) {
    const response = await fetch("https://api.nookipedia.com/villagers", {
      headers: { "X-API-KEY": API_KEY },
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    allVillagers = await response.json();
  }
  return allVillagers;
};

export const fetchAllFish = async (): Promise<NookipediaFish[]> => {
  if (allFish.length === 0) {
    const response = await fetch("https://api.nookipedia.com/nh/fish", {
      headers: { "X-API-KEY": API_KEY },
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    allFish = await response.json();
  }
  return allFish;
};

export const fetchAllBugs = async (): Promise<NookipediaBugs[]> => {
  if (allBugs.length === 0) {
    const response = await fetch("https://api.nookipedia.com/nh/bugs", {
      headers: { "X-API-KEY": API_KEY },
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    allBugs = await response.json();
  }
  return allBugs;
}; */

// A generic fetch function that works for villagers, fish, and bugs
export const fetchData = async <T>(
  url: string,
  apiKey: string
): Promise<T[]> => {
  const response = await fetch(url, {
    headers: { "X-API-KEY": apiKey },
  });

  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  const data = await response.json();
  return data;
};

// Function to fetch all villagers
export const fetchAllVillagers = async (): Promise<NookipediaVillager[]> => {
  if (allVillagers.length === 0) {
    allVillagers = await fetchData(
      "https://api.nookipedia.com/villagers",
      API_KEY
    );
  }
  return allVillagers;
};

// Function to fetch all fish
export const fetchAllFish = async (): Promise<NookipediaFish[]> => {
  if (allFish.length === 0) {
    allFish = await fetchData("https://api.nookipedia.com/nh/fish", API_KEY);
  }
  return allFish;
};

// Function to fetch all bugs
export const fetchAllBugs = async (): Promise<NookipediaBugs[]> => {
  if (allBugs.length === 0) {
    allBugs = await fetchData("https://api.nookipedia.com/nh/bugs", API_KEY);
  }
  return allBugs;
};
