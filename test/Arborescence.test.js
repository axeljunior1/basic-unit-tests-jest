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



let tab = [ [0,"r", -1], [1,"fg", 0], [2,"fd", 0], [3,"fg", 2],[4,"fg", 3] ] ;

test('test arborescence de la racine ', () => {
    expect(getAbsolutePath(tab,0)).toStrictEqual([0]);
  });

test('test arborescence fils gauche ', () => {
    expect(getAbsolutePath(tab,1)).toStrictEqual([1,0]);
  });

test('test arborescence fils droit ', () => {
    expect(getAbsolutePath(tab,2)).toStrictEqual([2,0]);
  });

test('test arborescence un petit fils de la racine  ', () => {
    expect(getAbsolutePath(tab,3)).toStrictEqual([3,2,0]);
  });