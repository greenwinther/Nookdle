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
export const checkboxContainer = createContainer("checkbox");
export const filterContainer = createContainer("filter");
export const speciesContainer = createContainer("species");
export const personalityContainer = createContainer("personality");
export const genderContainer = createContainer("gender");
checkboxContainer.appendChild(speciesContainer);
checkboxContainer.appendChild(personalityContainer);
checkboxContainer.appendChild(genderContainer);
