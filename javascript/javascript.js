'use strict';


let  username=prompt('welcome to my website! what is your name?')
alert("welcome "+username+" i am happy that you visited my website! you are welcome!")
alert("lets play a quick guessing game !")


let job=(prompt(username+",do you think that i work as an engineer? answer with (YES or NO) or (Y or N) only!?")).toUpperCase();



switch (job) {
    case 'YES':
    case 'Y':
        alert('thats correct answer amazing !')
        console.log('thats correct answer amazing !')
        break;
    case 'NO':
    case 'N':
        alert('false! i am sorry but you are wrong!')
        console.log('false! i am sorry but you are wrong!')
        break;
    default:
        alert('please answer with (YES or NO) or (Y or N) only!')
        console.log('please answer with (YES or NO) or (Y or N) only!')
        break;
}






let country=(prompt(username+",do you think that i live in jordan? answer with (YES or NO) or (Y or N) only!")).toUpperCase()



if(country==='YES'||country==='Y'){
    alert('thats correct answer amazing !')
    console.log('thats correct answer amazing !')


}else if(country==='NO'||country==='N'){
    alert('false! i am sorry but you are wrong!')
    console.log('false! i am sorry but you are wrong!')

}else{

    alert('please answer with (YES or NO) or (Y or N) only!')
    console.log('please answer with (YES or NO) or (Y or N) only!')
}



let learning=(prompt(username+",do you think that i am learning programming ?answer with (YES) or (NO) only?")).toUpperCase()



if(learning==='YES'||learning==='Y'){
    alert('thats correct answer amazing !')
    console.log('thats correct answer amazing !')


}else if(learning==='NO'||learning==='N'){
    alert('false! i am sorry but you are wrong!')
    console.log('false! i am sorry but you are wrong!')

}else{

    alert('please answer with (YES or NO) or (Y or N) only!')
    console.log('please answer with (YES or NO) or (Y or N) only!')
}





let university=(prompt(username+",do you think that i graduated from harvard university ?answer with (YES) or (NO) only?")).toUpperCase()



if(university==='YES'||university==='Y'){

    alert('false! i am sorry but you are wrong!')
    console.log('false! i am sorry but you are wrong!')


}else if(university==='NO'||university==='N'){
    alert('thats correct answer amazing !')
    console.log('thats correct answer amazing !')

}else{

    alert('please answer with (YES or NO) or (Y or N) only!')
    console.log('please answer with (YES or NO) or (Y or N) only!')
}





let workhistory=(prompt(username+",do think that i was working as a customer service agent ?answer with (YES) or (NO) only?")).toUpperCase()



if(workhistory==='YES'||workhistory==='Y'){
    alert('thats correct answer amazing !')
    console.log('thats correct answer amazing !')
   


}else if(workhistory==='NO'||workhistory==='N'){
    alert('false! i am sorry but you are wrong!')
    console.log('false! i am sorry but you are wrong!')

}else{

    alert('please answer with (YES or NO) or (Y or N) only!')
    console.log('please answer with (YES or NO) or (Y or N) only!')
}



alert("thank you "+username+" for answering my questions have a nice day !!")







