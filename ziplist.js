const alphaList = ['a', 'b', 'c'];
const numList = [1, 2, 3];

function zipList(list1, list2) {
  const combinedList = [];
  const combinedListLength = Math.max(list1.length, list2.length);
  for (let i = 0; i < combinedListLength; i++) {
    if (i < list1.length) {
      combinedList.push(list1[i]);
    }
    if (i < list2.length) {
      combinedList.push(list2[i]);
    }
  }
  return combinedList;
}
console.log(zipList(alphaList, numList));

function zipListTheSimpleWay(list1, list2) {
  let easyZipList = [];
  easyZipList = _.flatten(_.zip(list1, list2));
  return easyZipList;
}
console.log(zipListTheSimpleWay(alphaList, numList));
