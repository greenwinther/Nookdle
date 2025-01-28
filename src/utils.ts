import type { NookipediaCharacter, SortableField } from "./types/villager";
import { allVillagers } from "./scripts/fetchVillagers";
import { createVillagerCard } from "./ui";

export const filterVillagers = (searchTerm: string, sortBy: SortableField) => {
  const villagersContainer = document.querySelector(".villagers-grid");
  if (!villagersContainer) return;
  villagersContainer.innerHTML = "";
  const filtered = getFilteredVillagers(searchTerm, sortBy);
  filtered.forEach((villager) => {
    villagersContainer.appendChild(createVillagerCard(villager));
  });
};

export const updateSortButtons = (sortBy: SortableField) => {
  const moreSortButtons = document.querySelectorAll(".sort-button");
  moreSortButtons.forEach((button) => {
    const sortKey = button.getAttribute("data-sort-key");
    const direction = sortBy.endsWith("desc") ? "desc" : "asc";

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

// Functions which gives the buttons the order to sort the cards by their attributes
export const getFilteredVillagers = (
  searchTerm: string,
  sortBy: SortableField
): NookipediaCharacter[] => {
  let filtered = [...allVillagers];

  // Search filter, find villager that starts with
  if (searchTerm) {
    const lowerSearch = searchTerm.toLowerCase();
    filtered = filtered.filter((villager) =>
      villager.name.toLowerCase().startsWith(lowerSearch)
    );
  }

  // Destructuring which takes two parts of array and assigns to variables
  // Goes from "birthday-asc" to ["birthday", "asc"]
  // Then destructuring them to sortKey = "birthday", sortDirection = "asc"
  const [sortKey, sortDirection] = sortBy.split("-") as [
    string,
    "asc" | "desc"
  ];

  // Sort filtered which compares what come first
  filtered.sort((a, b) => {
    // Set starting point at 0
    let comparison = 0;

    // If sortKey is birthday
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
      // Create a varialbe which looks at the index of the birthmonth array
      const aMonth = monthOrder.indexOf(a.birthday_month);
      const bMonth = monthOrder.indexOf(b.birthday_month);
      // Check if the month are different. If they are, checks the days
      comparison =
        aMonth - bMonth || parseInt(a.birthday_day) - parseInt(b.birthday_day);
    } else {
      // Declare a variable for the other keys ("name", "species")
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
