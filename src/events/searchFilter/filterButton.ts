// Function to toggle visibility of searchContainer and checkboxContainer
export const toggleFilters = (
  filterButton: HTMLButtonElement,
  filterContainer: HTMLDivElement,
  checkboxContainer: HTMLDivElement
) => {
  filterButton.addEventListener("click", () => {
    // Check if the searchContainer and checkboxContainer are already appended to filterContainer
    const isCheckboxVisible = filterContainer.contains(checkboxContainer);

    // If searchContainer and checkboxContainer are not visible, append them
    if (!isCheckboxVisible) {
      filterContainer.appendChild(checkboxContainer);
    } else {
      // Otherwise, remove them from the filterContainer
      filterContainer.removeChild(checkboxContainer);
    }
  });
};
