export const titleCase = (string) => {
  const words = string.split(" ");
  const returnArray = [];
  words.forEach((word) => {
    let lc = word.toLowerCase();
    returnArray.push(lc.charAt(0).toUpperCase() + lc.slice(1));
  });
  return returnArray.join(" ");
};
