/* import type { SortableField } from "../types/types";

export const setupSortButtons = (
  sortButtons: HTMLElement,
  searchfield: { searchInput: HTMLInputElement },
  updateDisplay: Function,
  currentSort: SortableField,
  onlySaved: boolean
) => {
  sortButtons.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("sort-button")) {
      const sortKey = target.dataset.sortKey!;

      // Toggle direction based on current direction
      let currentDirection = "asc";
      if (target.classList.contains("active")) {
        currentDirection = target.dataset.direction === "asc" ? "desc" : "asc";
      }

      // Set the current sort state correctly
      currentSort = `${sortKey}-${currentDirection}` as SortableField;
      updateSortButtons(currentSort);
      updateDisplay(searchfield, currentSort, onlySaved);
    }
  });
};

// Function which updates the sort buttons based on the current sort field and direction
export const updateSortButtons = (sortBy: SortableField) => {
  const moreSortButtons = document.querySelectorAll(".sort-button");
  moreSortButtons.forEach((button) => {
    // Get the "data-sort-key" attribute from the button (e.g., "name", "birthday")
    const sortKey = button.getAttribute("data-sort-key");
    // Determine direction
    const direction = sortBy.endsWith("desc") ? "desc" : "asc";
    // If the button's sort key matches the current sort field, mark it as active

    if (sortBy.startsWith(sortKey!)) {
      button.classList.add("active");
      button.querySelector(".arrow")!.textContent =
        direction === "asc" ? "↑" : "↓";
      button.setAttribute("data-direction", direction);
    } else {
      button.classList.remove("active");
    }
  });
}; */
