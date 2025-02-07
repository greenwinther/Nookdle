import { API_KEY } from "../../apiKey";
import type {
  NookipediaVillager,
  NookipediaBugs,
  NookipediaFish,
} from "../../types/types";
import { villagersContainer } from "../../components/containers/createContainers";
import { createCard } from "../../components/cards/createCard";

export let allVillagers: NookipediaVillager[] = [];
export let allFish: NookipediaFish[] = [];
export let allBugs: NookipediaBugs[] = [];

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
    const villagers = (await fetchData<NookipediaVillager>(
      "https://api.nookipedia.com/villagers",
      API_KEY
    )) as NookipediaVillager[];

    allVillagers = villagers;
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

export const fetchVillagerByName = async (villagerName: string) => {
  if (!villagerName.trim()) return;

  try {
    const url = `https://api.nookipedia.com/villagers?name=${encodeURIComponent(
      villagerName
    )}`;

    const data = await fetchData<NookipediaVillager>(url, API_KEY);

    if (data.length === 0) {
      alert("Villager not found! Try another name.");
      return;
    }

    // Clear previous search results
    villagersContainer.innerHTML = "";

    // Create and append the villager card(s) using `createCard`
    data.forEach((villager) => {
      const villagerCard = createCard(villager, "villager");
      villagersContainer.appendChild(villagerCard);
    });
  } catch (error) {
    console.error("Error fetching villager:", error);
    alert("Something went wrong. Please try again.");
  }
};
