// Function which creates a searchfield and attaches it to a container
export const createSearchField = () => {
  // Create Search field container
  const container = document.createElement("div");
  container.className = "search-container";

  // Create Search field
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search villagers...";
  searchInput.className = "search-input";

  container.append(searchInput);

  return {
    container,
    searchInput,
  };
};
