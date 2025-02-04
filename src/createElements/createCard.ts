import type {
  NookipediaBugs,
  NookipediaFish,
  NookipediaVillager,
  NookipediaData,
} from "../types/types";
import { allVillagers, allBugs, allFish } from "../scripts/fetchVillagers";
import { saveCardAsFavorite } from "../events/saveCardAsFavorite";

export const createCard = (
  data: NookipediaData,
  type: "villager" | "fish" | "bug"
) => {
  // Create Card container
  const card = document.createElement("div");
  card.className = `${type}-card`;

  // Create Image
  const image = document.createElement("img");
  image.src = data.image_url;
  image.alt = data.name;

  // Create Name
  const name = document.createElement("h3");
  name.textContent = data.name;

  // Create additional info based on type
  const details = document.createElement("div");
  details.className = "details";

  let additionalInfo = "";
  // Type guard to check if data is a NookipediaVillager
  if (type === "villager") {
    // Narrowing to NookipediaVillager
    const villager = data as NookipediaVillager;
    additionalInfo = `
      <p>Species: ${villager.species}</p>
      <p>Personality: ${villager.personality}</p>
      <p>Gender: ${villager.gender}</p>
      <p>Birthday: ${villager.birthday_month} ${villager.birthday_day}</p>
      <p>Catchphrase: "${(data as NookipediaVillager).phrase}"</p>
    `;
    // Type guard to check if data is a NookipediaFish
  } else if (type === "fish") {
    // Narrowing to NookipediaFish
    const fish = data as NookipediaFish;
    additionalInfo = `<p>Rarity: ${fish.rarity}</p>`;
    // Type guard to check if data is a NookipediaBugs
  } else if (type === "bug") {
    // Narrowing to NookipediaBugs
    const bug = data as NookipediaBugs;
    additionalInfo = `<p>Rarity: ${bug.rarity}</p>`;
  }
  details.innerHTML = additionalInfo;

  // Create Save button
  const saveButton = document.createElement("button");
  saveButton.className = "save-button";

  // Append all elements to the card
  card.append(image, name, details, saveButton);

  // Call function to toggle favorite status
  saveCardAsFavorite(card, data, type);

  return card;
};

// Assuming this is triggered after fetching data (e.g., button click)
export const createCardsFromFetchedData = (
  container: HTMLDivElement,
  type: "villager" | "bug" | "fish"
) => {
  let dataToUse: NookipediaData[] = [];

  if (type === "villager") {
    dataToUse = allVillagers;
  } else if (type === "bug") {
    dataToUse = allBugs;
  } else if (type === "fish") {
    dataToUse = allFish;
  }

  // Create cards for the relevant data
  dataToUse.forEach((data) => {
    const card = createCard(data, type);
    container.appendChild(card);
  });
};

/* export const favorites: Array<
  NookipediaVillager | NookipediaFish | NookipediaBugs
> = [];

// Functions which creates the villager cards
export const createVillagerCard = (villager: NookipediaVillager) => {
  // Create Card container
  const card = document.createElement("div");
  card.className = "villager-card";

  // Create Image
  const image = document.createElement("img");
  image.src = villager.image_url;
  image.alt = villager.name;
  image.style.borderColor = villager.title_color;

  // Create Name
  const name = document.createElement("h3");
  name.textContent = villager.name;
  name.style.color = villager.title_color;

  // Create Details
  const details = document.createElement("div");
  details.className = "details";
  details.innerHTML = `
      <p>Species: ${villager.species}</p>
      <p>Personality: ${villager.personality}</p>
      <p>Gender: ${villager.gender}</p>
      <p>Birthday: ${villager.birthday_month} ${villager.birthday_day}</p>
      <p>Catchphrase: "${villager.phrase}"</p>
    `;

  // Create Save button
  const saveButton = document.createElement("button");
  saveButton.className = "save-button";

  // Check if the villager is already saved
  const isSaved = favorites.some((v) => v.name === villager.name);
  saveButton.textContent = isSaved ? "Remove from Saved" : "Save Villager";

  // Find the index of the villager in the savedVillagers array
  saveButton.addEventListener("click", () => {
    const index = favorites.findIndex((v) => v.name === villager.name);

    // Villager is saved, remove it |  Villager is not saved, add it
    if (index !== -1) {
      favorites.splice(index, 1);
      saveButton.textContent = "Save Villager";
    } else {
      favorites.push(villager);
      saveButton.textContent = "Remove from Saved";
    }
  });

  // Append all elements to the card
  card.append(image, name, details, saveButton);
  return card;
};

export const createFishCard = (fish: NookipediaFish) => {
  // Create Card container
  const card = document.createElement("div");
  card.className = "fish-card";

  // Create Image
  const image = document.createElement("img");
  image.src = fish.image_url; // Assuming fish has an image_url
  image.alt = fish.name;

  // Create Name
  const name = document.createElement("h3");
  name.textContent = fish.name;

  // Create Rarity
  const rarity = document.createElement("p");
  rarity.textContent = `Rarity: ${fish.rarity}`;

  // Create Save button
  const saveButton = document.createElement("button");
  saveButton.className = "save-button";

  // Check if the fish is already saved
  const isSaved = favorites.some((f) => f.name === fish.name);
  saveButton.textContent = isSaved ? "Remove from Saved" : "Save Fish";

  // Find the index of the fish in the savedFish array
  saveButton.addEventListener("click", () => {
    const index = favorites.findIndex((f) => f.name === fish.name);

    // Fish is saved, remove it | Fish is not saved, add it
    if (index !== -1) {
      favorites.splice(index, 1);
      saveButton.textContent = "Save Fish";
    } else {
      favorites.push(fish);
      saveButton.textContent = "Remove from Saved";
    }
  });

  // Append all elements to the card
  card.append(image, name, rarity, saveButton);
  return card;
};

export const createBugCard = (bug: NookipediaBugs) => {
  // Create Card container
  const card = document.createElement("div");
  card.className = "bug-card";

  // Create Image
  const image = document.createElement("img");
  image.src = bug.image_url; // Assuming bug has an image_url
  image.alt = bug.name;

  // Create Name
  const name = document.createElement("h3");
  name.textContent = bug.name;

  // Create Rarity
  const rarity = document.createElement("p");
  rarity.textContent = `Rarity: ${bug.rarity}`;

  // Create Save button
  const saveButton = document.createElement("button");
  saveButton.className = "save-button";

  // Check if the bug is already saved
  const isSaved = favorites.some((b) => b.name === bug.name);
  saveButton.textContent = isSaved ? "Remove from Saved" : "Save Bug";

  // Find the index of the bug in the savedBugs array
  saveButton.addEventListener("click", () => {
    const index = favorites.findIndex((b) => b.name === bug.name);

    // Bug is saved, remove it | Bug is not saved, add it
    if (index !== -1) {
      favorites.splice(index, 1);
      saveButton.textContent = "Save Bug";
    } else {
      favorites.push(bug);
      saveButton.textContent = "Remove from Saved";
    }
  });

  // Append all elements to the card
  card.append(image, name, rarity, saveButton);
  return card;
}; */
