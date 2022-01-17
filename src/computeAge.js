
function computeAge(birthday, currentDate){

    let age = currentDate.getFullYear() - birthday.getFullYear();

     

    if(currentDate.getMonth()> birthday.getMonth()){
        return age;
    }
    if(currentDate.getMonth()< birthday.getMonth()){
        return age-1; 
    }
    
    if(currentDate.getMonth()== birthday.getMonth()){
        if(currentDate.getDay() > birthday.getDay()){
            return age;
        }else{
            return age-1; 
        }
    } 

}

module.exports  = computeAge