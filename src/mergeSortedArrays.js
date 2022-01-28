function mergeSortedArrays(tab1, tab2){

    len1 = tab1.length;
    len2 = tab2.length;
    let mytab = [];
    let t = [];

    if (len1 > len2 ) {
        t = tab1;
        tab1 =tab2;
        tab2 = t ;

        len1 = tab1.length;
        len2 = tab2.length;
    }
    let i = 0;
    let j = 0;


    do {
        if(tab1[i]<tab2[j]){
            mytab.push(tab1[i])
            i++;
        }
        if(tab1[i]>tab2[j]){
            mytab.push(tab2[j])
            j++;
        }

    } while (i<len1 && j < len2);
    if(i < len1){
        for (let k = i; k < len1 ; k++) {
            mytab.push(tab1[k])
        }
    }else {
        for (let k = j; k < len2; k++) {
            mytab.push(tab2[k])
        }
    }

    return mytab ;
}

module.exports = mergeSortedArrays ; 