const loadOrNot = (json, numberProjects) => {
  return numberProjects >= json.length ? 4 : numberProjects + 4;
};
const spin = (json, currectPosition, spin) => {
  return currectPosition >= json.length && !spin
    ? "fa-solid fa-angles-up"
    : spin
    ? "fa-solid fa-spinner fa-spin"
    : "fa-solid fa-angles-down";
};
export { loadOrNot, spin };
