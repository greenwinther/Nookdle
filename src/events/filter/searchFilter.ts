export const filterCardsByName = (
  input: HTMLInputElement,
  container: HTMLDivElement
) => {
  input.addEventListener("input", () => {
    // Get the search text in lowercase
    const searchText = input.value.toLowerCase();

    // Select all cards within the container
    const cards = container.querySelectorAll(
      ".villager-card, .bug-card, .fish-card"
    );

    // Loop through each card and check if it matches the search input
    cards.forEach((card) => {
      // Get the name from the data attribute
      const name =
        (card as HTMLElement).getAttribute("data-name")?.toLowerCase() || "";

      // Show or hide the card based on whether it starts with the search input
      if (name.startsWith(searchText)) {
        (card as HTMLElement).style.display = "block";
      } else {
        (card as HTMLElement).style.display = "none";
      }
    });
  });
};
