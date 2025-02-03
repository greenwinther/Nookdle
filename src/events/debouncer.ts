/* Old version 
 // A function which handles search input updates with debounce
  // If I type Ace real quick I dont want it to search on A then AC then ACE.
  // This gives it a slight delay after I make an input
  const handleUpdate = () => {
    clearTimeout((handleUpdate as any).timeout);
    (handleUpdate as any).timeout = setTimeout(() => {
      const search = searchfield.searchInput.value;
      updateDisplay(search, currentSort, showingSaved);
    }, 50);
  }; */

// A function which handles search input updates with debounce
// If I type Ace real quick I dont want it to search on A then AC then ACE.
// This gives it a slight delay after I make an input

// A function which handles search input updates with debounce
// A function to handle search input updates with debounce
export const handleSearchUpdate = (
  searchfield: { searchInput: HTMLInputElement },
  updateDisplay: Function,
  currentSort: string,
  showingSaved: boolean
) => {
  clearTimeout((handleSearchUpdate as any).timeout);
  (handleSearchUpdate as any).timeout = setTimeout(() => {
    const search = searchfield.searchInput.value;
    updateDisplay(search, currentSort, showingSaved);
  }, 50);
};
