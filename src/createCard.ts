import type {
  NookipediaBugs,
  NookipediaFish,
  NookipediaVillager,
} from "./types/types";
import { savedBugs, savedFish, savedVillagers } from "./ui";

/* Old functions
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
  const isSaved = savedVillagers.some((v) => v.name === villager.name);
  saveButton.textContent = isSaved ? "Remove from Saved" : "Save Villager";

  // Find the index of the villager in the savedVillagers array
  saveButton.addEventListener("click", () => {
    const index = savedVillagers.findIndex((v) => v.name === villager.name);

    // Villager is saved, remove it |  Villager is not saved, add it
    if (index !== -1) {
      savedVillagers.splice(index, 1);
      saveButton.textContent = "Save Villager";
    } else {
      savedVillagers.push(villager);
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
  const isSaved = savedFish.some((f) => f.name === fish.name);
  saveButton.textContent = isSaved ? "Remove from Saved" : "Save Fish";

  // Find the index of the fish in the savedFish array
  saveButton.addEventListener("click", () => {
    const index = savedFish.findIndex((f) => f.name === fish.name);

    // Fish is saved, remove it | Fish is not saved, add it
    if (index !== -1) {
      savedFish.splice(index, 1);
      saveButton.textContent = "Save Fish";
    } else {
      savedFish.push(fish);
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
  const isSaved = savedBugs.some((b) => b.name === bug.name);
  saveButton.textContent = isSaved ? "Remove from Saved" : "Save Bug";

  // Find the index of the bug in the savedBugs array
  saveButton.addEventListener("click", () => {
    const index = savedBugs.findIndex((b) => b.name === bug.name);

    // Bug is saved, remove it | Bug is not saved, add it
    if (index !== -1) {
      savedBugs.splice(index, 1);
      saveButton.textContent = "Save Bug";
    } else {
      savedBugs.push(bug);
      saveButton.textContent = "Remove from Saved";
    }
  });

  // Append all elements to the card
  card.append(image, name, rarity, saveButton);
  return card;
}; */

// A generic function to create cards
export const createCard = <T>(
  item: T,
  type: "villager" | "fish" | "bug",
  savedItems: T[],
  saveCallback: (item: T, saveButton: HTMLButtonElement) => void
) => {
  // Create Card container
  const card = document.createElement("div");
  card.className = `${type}-card`;

  // Create Image
  const image = document.createElement("img");
  image.src = (item as any).image_url;
  image.alt = (item as any).name;

  // Create Name
  const name = document.createElement("h3");
  name.textContent = (item as any).name;

  // Create Specific Details (e.g., Species, Rarity)
  const details = document.createElement("div");
  details.className = "details";

  // Depending on the type, display different details
  if (type === "villager") {
    details.innerHTML = `
        <p>Species: ${(item as NookipediaVillager).species}</p>
        <p>Personality: ${(item as NookipediaVillager).personality}</p>
        <p>Gender: ${(item as NookipediaVillager).gender}</p>
        <p>Birthday: ${(item as NookipediaVillager).birthday_month} ${
      (item as NookipediaVillager).birthday_day
    }</p>
        <p>Catchphrase: "${(item as NookipediaVillager).phrase}"</p>
      `;
  } else if (type === "fish" || type === "bug") {
    details.innerHTML = `<p>Rarity: ${
      (item as NookipediaFish | NookipediaBugs).rarity
    }</p>`;
  }

  // Create Save button
  const saveButton = document.createElement("button");
  saveButton.className = "save-button";

  // Check if the item is already saved
  const isSaved = savedItems.some(
    (i) => (i as any).name === (item as any).name
  );
  saveButton.textContent = isSaved
    ? `Remove from Saved`
    : `Save ${type.charAt(0).toUpperCase() + type.slice(1)}`;

  // Save/Remove button event listener
  saveButton.addEventListener("click", () => {
    saveCallback(item, saveButton);
  });

  // Append all elements to the card
  card.append(image, name, details, saveButton);
  return card;
};

export const createVillagerCard = (villager: NookipediaVillager) => {
  return createCard(
    villager,
    "villager",
    savedVillagers,
    (item, saveButton) => {
      const index = savedVillagers.findIndex((v) => v.name === item.name);
      if (index !== -1) {
        savedVillagers.splice(index, 1);
        saveButton.textContent = "Save Villager";
      } else {
        savedVillagers.push(item);
        saveButton.textContent = "Remove from Saved";
      }
    }
  );
};

export const createFishCard = (fish: NookipediaFish) => {
  return createCard(fish, "fish", savedFish, (item, saveButton) => {
    const index = savedFish.findIndex((f) => f.name === item.name);
    if (index !== -1) {
      savedFish.splice(index, 1);
      saveButton.textContent = "Save Fish";
    } else {
      savedFish.push(item);
      saveButton.textContent = "Remove from Saved";
    }
  });
};

export const createBugCard = (bug: NookipediaBugs) => {
  return createCard(bug, "bug", savedBugs, (item, saveButton) => {
    const index = savedBugs.findIndex((b) => b.name === item.name);
    if (index !== -1) {
      savedBugs.splice(index, 1);
      saveButton.textContent = "Save Bug";
    } else {
      savedBugs.push(item);
      saveButton.textContent = "Remove from Saved";
    }
  });
};
