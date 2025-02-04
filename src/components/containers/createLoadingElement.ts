// Creates the loading screen element
export const createLoadingElement = (): HTMLDivElement => {
  const loading = document.createElement("div");
  loading.className = "loading";
  loading.textContent = "Please give it a sec...";
  return loading;
};

export const loading = createLoadingElement();
