

function createTree(tab) { // format des elts du tableau: id, nom, parent
    let map = new Map();

    tab.forEach(function (elt){
        map.set(elt[0], elt);
    });
    return map;
}

function getAbsolutePath(table_tree, id) {
    let tree_map = new Map();
    tree_map = createTree(table_tree)
    
    let t_ids = []; // table des ids
    let t_racine = tree_map.get(id); // noeud considéré comme racine
    t_ids.push(t_racine[0])

    while (t_racine[2]!= -1){ //tant que le parent n'est pas egal a -1, on ajoute l id dans le tableau et on passe au noeud suivant
        t_racine = tree_map.get(t_racine[2])
        t_ids.push(t_racine[0])
    }
    return t_ids;
}

module.exports =  getAbsolutePath;
