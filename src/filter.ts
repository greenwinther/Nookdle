/* import type {
  NookipediaVillager,
  NookipediaBugs,
  NookipediaFish,
  SortableField,
} from "./types/types";
import { allVillagers, allBugs, allFish } from "./scripts/fetchVillagers";
import { favorites } from "./createElements/createCard";
import {
  createBugCard,
  createFishCard,
  createVillagerCard,
} from "./createElements/createCard";
import { cardContainer } from "./createElements/createContainer"; */

/* // Generic filter function using arrow syntax
export const filterEntities = <
  T extends NookipediaVillager | NookipediaFish | NookipediaBugs
>(
  allEntities: T[],
  createCardFn: (entity: T) => HTMLElement,
  searchTerm: string,
  showFavorite: boolean = false,
  typeGuard: (
    entity: NookipediaVillager | NookipediaFish | NookipediaBugs
  ) => entity is T,
  sortComparator?: (a: T, b: T) => number
): T[] => {
  if (!cardContainer) return [];
  cardContainer.innerHTML = "";

  const entitiesToDisplay = showFavorite
    ? favorites.filter(typeGuard)
    : allEntities;

  const filtered = getFilteredEntities(
    searchTerm,
    entitiesToDisplay,
    sortComparator
  );

  filtered.forEach((entity) => {
    cardContainer.appendChild(createCardFn(entity));
  });

  return filtered;
};

// Generic filtering and sorting function as arrow function
export const getFilteredEntities = <T extends NookipediaNames>(
  searchTerm: string,
  entities: T[],
  sortComparator?: (a: T, b: T) => number
): T[] => {
  let filtered = [...entities];

  if (searchTerm) {
    const lowerSearch = searchTerm.toLowerCase();
    filtered = filtered.filter((entity) =>
      entity.name.toLowerCase().startsWith(lowerSearch)
    );
  }

  if (sortComparator) {
    filtered.sort(sortComparator);
  }

  return filtered;
};

// Type guards remain the same
export const isVillager = (entity: unknown): entity is NookipediaVillager =>
  typeof entity === "object" && entity !== null && "birthday_month" in entity;

export const isFish = (entity: unknown): entity is NookipediaFish =>
  typeof entity === "object" && entity !== null && "shadow_size" in entity;

export const isBug = (entity: unknown): entity is NookipediaBugs =>
  typeof entity === "object" && entity !== null && "weather" in entity;

// Villager comparator as arrow function
export const createVillagerComparator = (
  sortBy: SortableField
): ((a: NookipediaVillager, b: NookipediaVillager) => number) => {
  const [sortKey, sortDirection] = sortBy.split("-") as [
    string,
    "asc" | "desc"
  ];
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

  return (a, b) => {
    let comparison = 0;
    if (sortKey === "birthday") {
      const aMonth = monthOrder.indexOf(a.birthday_month);
      const bMonth = monthOrder.indexOf(b.birthday_month);
      comparison =
        aMonth - bMonth || parseInt(a.birthday_day) - parseInt(b.birthday_day);
    } else {
      const aValue = a[sortKey as keyof NookipediaVillager] as string;
      const bValue = b[sortKey as keyof NookipediaVillager] as string;
      comparison = aValue.localeCompare(bValue);
    }
    return sortDirection === "desc" ? -comparison : comparison;
  };
};

// Usage examples remain identical to previous implementation
export const filterVillagers = filterEntities(
  allVillagers,
  createVillagerCard,
  "search term",
  false,
  isVillager,
  createVillagerComparator("birthday-asc")
);

export const filterFish = filterEntities(
  allFish,
  createFishCard,
  "search term",
  true,
  isFish
);

export const filterBugs = filterEntities(
  allBugs,
  createBugCard,
  "search term",
  false,
  isBug
); */

/* Old code
// Function which filters and displays villagers based on search term, sorting, and saved status
export const filterVillagers = (
  searchTerm: string,
  sortBy: SortableField,
  showFavorit: boolean = false
): NookipediaVillager[] => {
  if (!cardContainer) return [];
  cardContainer.innerHTML = "";

  // Determines which villager-list will be displayed: saved or all
  const villagersToDisplay = showFavorit
    ? favorites.filter((fav): fav is NookipediaVillager => "species" in fav)
    : allVillagers;

  // Filter the villagers based on the search term and sort order
  const filteredVillagers = getFilteredVillagers(
    searchTerm,
    sortBy,
    villagersToDisplay
  );

  // Create and append cards for each filtered villager
  filteredVillagers.forEach((villager) => {
    cardContainer.appendChild(createVillagerCard(villager));
  });

  return filteredVillagers;
};

// Function which filters and sorts villagers based on search term and sort order
export const getFilteredVillagers = (
  searchTerm: string,
  sortBy: SortableField,
  villagers: NookipediaVillager[] = allVillagers
): NookipediaVillager[] => {
  // Clone the original array to avoid modifying the source
  let filteredVillagers = [...villagers];

  // Search filter, finds villagers whose names starts with the search term
  if (searchTerm) {
    const lowerSearch = searchTerm;
    filteredVillagers = filteredVillagers.filter((villager) =>
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
  filteredVillagers.sort((a, b) => {
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
      const aValue = a[sortKey as keyof NookipediaVillager] as string;
      const bValue = b[sortKey as keyof NookipediaVillager] as string;
      // Compare the two strings alphabetically. If a comes before b, return negative
      comparison = aValue.localeCompare(bValue);
    }
    // If SortDirection is "desc", it reverses the order
    return sortDirection === "desc" ? comparison * -1 : comparison;
  });

  return filteredVillagers;
};

export const filterFish = (
  searchTerm: string,
  showFavorit: boolean = false
): NookipediaFish[] => {
  if (!cardContainer) return [];
  cardContainer.innerHTML = "";

  const fishToDisplay = showFavorit
    ? favorites.filter((fav): fav is NookipediaFish => "rarity" in fav)
    : allFish;

  const filteredFish = getFilteredFish(searchTerm, fishToDisplay);

  filteredFish.forEach((fish) => {
    cardContainer.appendChild(createFishCard(fish));
  });
  return filteredFish;
};

export const getFilteredFish = (
  searchTerm: string,
  fish: NookipediaFish[] = allFish
): NookipediaFish[] => {
  let filteredFish = [...fish];

  if (searchTerm) {
    const lowerSearch = searchTerm;
    filteredFish = filteredFish.filter((fish) => {
      return fish.name.toLowerCase().startsWith(lowerSearch);
    });
  }
  return filteredFish;
};

export const filterBugs = (
  searchTerm: string,
  showFavorit: boolean = false
): NookipediaBugs[] => {
  if (!cardContainer) return [];
  cardContainer.innerHTML = "";

  const bugsToDisplay = showFavorit
    ? favorites.filter((fav): fav is NookipediaBugs => "rarity" in fav)
    : allBugs;

  const filteredBugs = getFilteredBugs(searchTerm, bugsToDisplay);

  filteredBugs.forEach((bug) => {
    cardContainer.appendChild(createBugCard(bug));
  });
  return filteredBugs;
};

export const getFilteredBugs = (
  searchTerm: string,
  bugs: NookipediaBugs[] = allBugs
): NookipediaBugs[] => {
  let filteredBugs = [...bugs];

  if (searchTerm) {
    const lowerSearch = searchTerm;
    filteredBugs = filteredBugs.filter((bugs) => {
      return bugs.name.toLowerCase().startsWith(lowerSearch);
    });
  }
  return filteredBugs;
}; */
