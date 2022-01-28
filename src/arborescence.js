function te() {

}

function Arborescence(tab) {
    const map1 = new Map();

    tab.forEach(function (elt){
        map1.set(elt[0], elt);
    });

    return map1;
}

function getAbsolutePath(tree, id) {
    
}

module.exports = Arborescence;