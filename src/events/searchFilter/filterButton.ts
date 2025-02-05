// Function to toggle visibility of searchContainer and checkboxContainer
export const toggleFilters = (
  filterButton: HTMLButtonElement,
  filterContainer: HTMLDivElement,
  searchContainer: HTMLDivElement,
  checkboxContainer: HTMLDivElement
) => {
  filterButton.addEventListener("click", () => {
    // Check if the searchContainer and checkboxContainer are already appended to filterContainer
    const isSearchVisible = filterContainer.contains(searchContainer);
    const isCheckboxVisible = filterContainer.contains(checkboxContainer);

    // If searchContainer and checkboxContainer are not visible, append them
    if (!isSearchVisible && !isCheckboxVisible) {
      filterContainer.appendChild(searchContainer);
      filterContainer.appendChild(checkboxContainer);
    } else {
      // Otherwise, remove them from the filterContainer
      filterContainer.removeChild(searchContainer);
      filterContainer.removeChild(checkboxContainer);
    }
  });
};
