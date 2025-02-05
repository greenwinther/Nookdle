// Creates a main container with a dynamic class for different item types
export const createContainer = (type: string): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = `${type}-container`;
  return container;
};

export const cardContainer = createContainer("card");
export const fetchContainer = createContainer("fetch");
export const villagersContainer = createContainer("villagers");
export const bugsContainer = createContainer("bugs");
export const fishContainer = createContainer("fish");
export const favoritesContainer = createContainer("favorites");
export const searchContainer = createContainer("search");
export const myFavoritebtnContainer = createContainer("myfavoritebtn");
export const searchMenuContainer = createContainer("searchmenu");
export const checkboxContainer = createContainer("checkbox");

/* // Creates a main container with a dynamic class for different item types
export const createContainer = (
  type: "villagers" | "bugs" | "fish" | "fetch"
): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = `${type}-container`;
  return container;
};

export const villagersContainer = createContainer("villagers");
export const bugsContainer = createContainer("bugs");
export const fishContainer = createContainer("fish");
export const fetchContainer = createContainer("fetch");
 */

/* Old functions
// Creates the main container for the villagers
export const createVillagersContainer = (): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = "villagers-grid";
  return container;
};

// Creates the main container for bugs
export const createBugsContainer = (): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = "bugs-grid"; // Unique class for styling
  return container;
};

// Creates the main container for fish
export const createFishContainer = (): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = "fish-grid"; // Unique class for styling
  return container;
}; */
