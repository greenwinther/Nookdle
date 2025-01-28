import type { NookipediaCharacter, SortableField } from "./types/villager";
import { allVillagers } from "./scripts/fetchVillagers";
import { createVillagerCard, savedVillagers } from "./ui";

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
};

// Function which filters and displays villagers based on search term, sorting, and saved status
export const filterVillagers = (
  searchTerm: string,
  sortBy: SortableField,
  onlySaved: boolean = false
) => {
  const villagersContainer = document.querySelector(".villagers-grid");
  if (!villagersContainer) return;
  villagersContainer.innerHTML = "";

  // Determines which villager-list will be displayed: saved or all
  const villagersToDisplay = onlySaved ? savedVillagers : allVillagers;

  // Filter the villagers based on the search term and sort order
  const filtered = getFilteredVillagers(searchTerm, sortBy, villagersToDisplay);
  filtered.forEach((villager) => {
    villagersContainer.appendChild(createVillagerCard(villager));
  });
};

// Function which filters and sorts villagers based on search term and sort order
export const getFilteredVillagers = (
  searchTerm: string,
  sortBy: SortableField,
  villagers: NookipediaCharacter[] = allVillagers
): NookipediaCharacter[] => {
  // Clone the original array to avoid modifying the source
  let filtered = [...villagers];

  // Search filter, finds villagers whose names starts with the search term
  if (searchTerm) {
    const lowerSearch = searchTerm.toLowerCase();
    filtered = filtered.filter((villager) =>
      villager.name.toLowerCase().startsWith(lowerSearch)
    );
  }

  // Destructuring sortBy string into two parts ("birthday-asc" → ["birthday", "asc"])
  // This splits sortBy into a sortKey ("birthday") and sortDirection ("asc" or "desc")
  const [sortKey, sortDirection] = sortBy.split("-") as [
    string,
    "asc" | "desc"
  ];

  // Sort the filtered villagers array based on the selected criteria
  filtered.sort((a, b) => {
    // Set starting point at 0
    let comparison = 0;

    // If sorting by birthday, use month and day to compare
    if (sortKey === "birthday") {
      // An array of birthmonth
      const monthOrder = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // Create a varialbe which finds the index of the month for each villager
      const aMonth = monthOrder.indexOf(a.birthday_month);
      const bMonth = monthOrder.indexOf(b.birthday_month);
      // Compare months first, then compare the days if the months are the same
      comparison =
        aMonth - bMonth || parseInt(a.birthday_day) - parseInt(b.birthday_day);
    } else {
      // Declare a variable for the other keys and compare their strings ("name", "species")
      const aValue = a[sortKey as keyof NookipediaCharacter] as string;
      const bValue = b[sortKey as keyof NookipediaCharacter] as string;
      // Compare the two strings alphabetically. If a comes before b, return negative
      comparison = aValue.localeCompare(bValue);
    }
    // If SortDirection is "desc", it reverses the order
    return sortDirection === "desc" ? comparison * -1 : comparison;
  });

  return filtered;
};
