// Functions which creates the sorting buttons
export const createSortButtons = (): HTMLDivElement => {
  // Create Button Container
  const container = document.createElement("div");
  container.className = "sort-buttons-container";

  // Button state
  const buttonsConfig = [
    { key: "name", label: "Name" },
    { key: "species", label: "Species" },
    { key: "personality", label: "Personality" },
    { key: "gender", label: "Gender" },
    { key: "birthday", label: "Birthday" },
  ];

  // Create buttons
  buttonsConfig.forEach(({ key, label }) => {
    const button = document.createElement("button");
    button.className = "sort-button";
    button.dataset.sortKey = key;
    button.dataset.direction = "asc";
    button.innerHTML = `
        ${label} 
        <span class="arrow">↑</span>
      `;

    container.appendChild(button);
  });

  return container;
};

export const sortButtons = createSortButtons();
