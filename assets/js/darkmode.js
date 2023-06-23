const storageKey = "theme-preference";

/* Handles click event to toggle theme */
const onClick = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  setPreference();
};

/* Returns color preference based on localStorage or user system preference */
const getColorPreference = () => {
  const storedPreference = localStorage.getItem(storageKey);
  if (storedPreference) {
    return storedPreference;
  } else {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
};

/* Store the value of current theme in localStorage */
const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

/* Update attributes in the DOM to reflect the current theme */
const reflectPreference = () => {
  document.documentElement.setAttribute("data-theme", theme.value);
  const toggleIcon = document.querySelector("i.toggle-light");
  if (toggleIcon) {
    toggleIcon.setAttribute("aria-label", theme.value);
  }
};

/* Object to store the current theme value */
const theme = {
  value: getColorPreference(),
};

/* Setup click listener for toggle icon and apply the initial color theme */
window.onload = () => {
  reflectPreference();
  const toggleIcon = document.querySelector("i.toggle-light");
  if (toggleIcon) {
    toggleIcon.addEventListener("click", onClick);
  }
};

/* Listen for changes in the user's system color scheme preference */
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: isDark }) => {
  theme.value = isDark ? "dark" : "light";
  setPreference();
});
