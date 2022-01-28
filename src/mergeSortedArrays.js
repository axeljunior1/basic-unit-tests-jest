function mergeSortedArrays(tab1, tab2){
    // variable pour la longueur des tableau 
    let len1 = tab1.length; 
    let len2 = tab2.length;
    // var et boucle pour le 
    //exchange table 

    let t = [];
    if (len1<len2) { // permuter pour avoir le tab 1 comme le tab le plus long
        t = tab1;
        tab1 = tab2;
        tab2 = t ; 
    }
    let tab = []; // tableau vide 
    
    len1 = tab1.length; 
    len2 = tab2.length;
    // initialisation de deux compteurs 
    let i = 0;
    let j = 0;
    do {
        if (tab1[i]< tab2[j]) {
            tab.push(tab1[i]);
            i = i + 1;
        }
        if (tab1[i]> tab2[j]) {
            tab.push(tab2[j]);
            j = j + 1;
        } 
        if (tab1[i] === tab2[j]) {
            tab.push(tab1[i]);
            tab.push(tab2[j]);
            i = i + 1;
            j = j + 1;
        }
    } while (i<len2 && j < len2);

        for (let index = i; index < len1; index++) {

            tab.push(tab1[i]);
            i = i + 1;
        }

    return tab ;

}

module.exports = mergeSortedArrays ; 