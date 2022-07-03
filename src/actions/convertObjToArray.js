export default (obj) => {
  let arrOfObjects = [];
  const keysArr = Object.keys(obj);
  const arrayOfArrays = Object.values(obj);
  const arrayOfSingleValues = arrayOfArrays
    .map((array) =>
      array.sort((a, b) => {
        return b.length - a.length;
      })
    )
    .map((array) => array[0]);

  arrOfObjects = keysArr.map((key, index) => {
    return { name: key, path: arrayOfSingleValues[index] };
  });

  return arrOfObjects;
};
