import {
  searchContainer,
  searchMenuContainer,
} from "../containers/createContainers";

// Function which creates a searchfield and attaches it to a container
export const createSearchField = (
  container: HTMLDivElement,
  placeholder: string,
  className: string
) => {
  // Create Search field
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = placeholder;
  searchInput.classList.add(className);

  // Append the search input to the provided container
  container.appendChild(searchInput);

  return searchInput;
};

export const searchInput = createSearchField(
  searchContainer,
  "filter...",
  "search-input"
);
