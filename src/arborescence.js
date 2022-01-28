function Arborescence() {

}

function createTree(tab) {
    const map1 = new Map();

    map1.set('id', tab[0]);
    map1.set('nom', tab[1]);
    map1.set('parent', tab[2]);

    return map1;
}


module.exports = Arborescence;