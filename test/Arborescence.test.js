const createTree = require("../src/arborescence.js");
const getAbsolutePath = require("../src/arborescence.js");
/*
let map = new Map();
map.set(1, [1, "nom", "parent"]);
map.set(2, [2, "nom2", "prenom"]);
test('le min de t2 est plus grand que le max de t1 ',
    () => {
    let m = createTree([[1, "nom", "parent"], [2, "nom2", "prenom"]]);
    let t = m.get(1);
        expect(createTree([[1, "nom", "parent"], [2, "nom2", "prenom"]])).toStrictEqual(map);
    });
*/
let map = new Map();
map.set(0, [0,"r", -1]);
map.set(1, [1,"fg", 0]);
map.set(2, [2,"fd", 0]);
map.set(3, [3,"fg", 2]);
map.set(4, [4,"fg", 3]);


let mymap = [ [0,"r", -1], [1,"fg", 0], [2,"fd", 0], [3,"fg", 2],[4,"fg", 3] ] ;

test('test getAbsolutePath', () => {
    expect(getAbsolutePath(mymap,4)).toStrictEqual([2,0]);
  });
