// code your solution here
function superbowlWin(array) {
  const found = array.find(element => element.result === 'W');
  return found !== undefined ? found.year : found;
}