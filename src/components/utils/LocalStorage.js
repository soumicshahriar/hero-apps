export const getDataFromLs = () => {
  const appDataString = localStorage.getItem("appdata");
  if (appDataString) {
    const appInstalled = JSON.parse(appDataString);
    return appInstalled;
  }
  return [];
};

export const saveDataToLs = (id) => {
  const previousData = getDataFromLs();
  if (previousData.includes(id)) return;

  const updatedData = [...previousData, id];
  localStorage.setItem("appdata", JSON.stringify(updatedData));
};

export const removeDataFromLs = (id) => {
  const previousData = getDataFromLs();
  const updatedData = previousData.filter((appId) => appId !== id);
  localStorage.setItem("appdata", JSON.stringify(updatedData));
};
