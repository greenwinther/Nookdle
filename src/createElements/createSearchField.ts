// Function which creates a searchfield and attaches it to a container
export const createSearchField = (container: HTMLDivElement) => {
  // Create Search field
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search villagers...";
  searchInput.className = "search-input";

  // Append the search input to the provided container
  container.appendChild(searchInput);

  return searchInput;
};
