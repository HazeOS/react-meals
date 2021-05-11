export const findIndexById = (array, id) => {
  return array.findIndex(item => {
    return item.id === id
  });
}