import type {
  NookipediaBugs,
  NookipediaFish,
  NookipediaVillager,
  NookipediaData,
} from "../../types/types";
import {
  allVillagers,
  allBugs,
  allFish,
} from "../../events/fetchDataEvent/fetchData";
import { saveCardAsFavorite } from "../../events/saveCard/saveCardAsFavorite";

export const createCard = (
  data: NookipediaData,
  type: "villager" | "fish" | "bug"
) => {
  // Create Card container
  const card = document.createElement("div");
  card.className = `${type}-card`;
  // Store name as an attribute
  card.setAttribute("data-name", data.name.toLowerCase());

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
      <p><strong>Species:</strong> ${villager.species}</p>
      <p><strong>Personality:</strong> ${villager.personality}</p>
      <p><strong>Gender:</strong> ${villager.gender}</p>
      <p><strong>Birthday:</strong> ${villager.birthday_month} ${villager.birthday_day}</p>
    `;
    // Type guard to check if data is a NookipediaFish
  } else if (type === "fish") {
    // Narrowing to NookipediaFish
    const fish = data as NookipediaFish;
    additionalInfo = `<p><strong>Rarity:</strong> ${fish.rarity}</p>
    <p><strong>Sell price:</strong> ${fish.sell_nook} bells</p>`;
    // Type guard to check if data is a NookipediaBugs
  } else if (type === "bug") {
    // Narrowing to NookipediaBugs
    const bug = data as NookipediaBugs;
    additionalInfo = `<p><strong>Sell price:</strong> ${bug.sell_nook} bells</p>`;
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
