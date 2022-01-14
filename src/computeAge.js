
function computeAge(birthday, currentDate){

    let age = currentDate.year() - birthday.year();

     

    if(currentDate.monthIndex()> birthday.monthIndex()){
        return age;
    }
    if(currentDate.monthIndex()< birthday.monthIndex()){
        return age +1; 
    }
    
    if(currentDate.monthIndex()== birthday.monthIndex()){
        if(currentDate.day()>birthday.day()){
            return age;
        }else{
            return age+ 1; 
        }
    } 

}