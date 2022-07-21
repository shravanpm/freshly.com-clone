export function loadData(key) {
  try {
    let data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch (error) {
    return "";
  }
}
const data = "sa";
export function saveData(key, data = "") {
  localStorage.setItem(key, JSON.stringify(data));
}
