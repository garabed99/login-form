function setLocalStorage(key, value) {
  const jsonString = JSON.stringify(value);
  localStorage.setItem(key, jsonString);
  return true;
}

export default setLocalStorage;
