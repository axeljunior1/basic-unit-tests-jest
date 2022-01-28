const mergeSortedArrays = require("../src/mergeSortedArrays.js");

test('t1 et t2 sont des nombres consecutifs ', () => {
    expect(mergeSortedArrays([1,3,5],[2,4])).toStrictEqual([1,2,3,4,5]);
  });
/*
test('le min de t2 est plus grand que le max de t1 ', () => {
    expect(mergeSortedArrays([1,3,5],[6,7])).toStrictEqual([1,3,5,6,7]);
  });
*/
test('lenght(t1) < lenght(t2) ', () => {
    expect(mergeSortedArrays([1,3],[2,4,5])).toStrictEqual([1,2,3,4,5]);
  });
/*
test('le max de t2 est < au min de t1 ', () => {
    expect(mergeSortedArrays([6,9],[2,3,4])).toStrictEqual([2,3,4,6,9]);
  });
*/

