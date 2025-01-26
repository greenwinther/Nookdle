import { Villager } from "../../types/villager";
import { mockVillagers } from "../../data/mockVillagers";
import { randomVillager } from "../../data/randomVillager";

// Create base UI
export const createGameUI = () => {
  const app = document.getElementById("app")!;

  // Create main container
  const container = document.createElement("div");
  container.id = "game-container";

  // Create title
  const title = document.createElement("h1");
  title.textContent = "Animal Crossing Villager Guesser";

  // Create form
  const form = document.createElement("form");
  form.id = "guess-form";

  // Create input with datalist
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter villager name";

  // Create datalist
  const datalist = document.createElement("datalist");
  datalist.id = "villagers-list";

  // Create submit button
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Guess";

  // Assemble components
  form.appendChild(input);
  form.appendChild(button);
  form.appendChild(datalist);
  container.appendChild(title);
  container.appendChild(form);
  app.appendChild(container);

  // Handle guesses
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const guess = input.value.trim();

    if (
      mockVillagers.some((v) => v.name.toLowerCase() === guess.toLowerCase())
    ) {
      console.log("Valid guess!");
      input.value = "";
    } else {
      console.log("Not a valid villager");
    }
  });
};
