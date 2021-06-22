'use strict';


let  username=prompt('welcome to my website! what is your name?')
alert("welcome "+username+" i am happy that you visited my website! you are welcome!")
alert("lets play a quick guessing game !")


let job=(prompt(username+",do you think that i work as an engineer? answer with (YES or NO) or (Y or N) only!?")).toUpperCase();

let usergrade=0;

switch (job) {
    case 'YES':
    case 'Y':
        alert('thats correct answer amazing !')
        console.log('thats correct answer amazing !')
        usergrade++;
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
    usergrade++;


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
    usergrade++;


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
    usergrade++;

}else{

    alert('please answer with (YES or NO) or (Y or N) only!')
    console.log('please answer with (YES or NO) or (Y or N) only!')
}





let workhistory=(prompt(username+",do think that i was working as a customer service agent ?answer with (YES) or (NO) only?")).toUpperCase()



if(workhistory==='YES'||workhistory==='Y'){
    alert('thats correct answer amazing !')
    console.log('thats correct answer amazing !')
    usergrade++;
   


}else if(workhistory==='NO'||workhistory==='N'){
    alert('false! i am sorry but you are wrong!')
    console.log('false! i am sorry but you are wrong!')

}else{

    alert('please answer with (YES or NO) or (Y or N) only!')
    console.log('please answer with (YES or NO) or (Y or N) only!')
}











for(let i=0;i<4;i++){


    let guessnumber =Number(prompt("guess a number between 1 and 10 !you have only four attempts to guess it ! lets start!"))

    if (guessnumber==4){

        alert("congratulations ! excellent you guessed the number !")
        console.log("congratulations ! excellent you guessed the number !")
        usergrade++;
        break;

    }else if(guessnumber>6||guessnumber==1){

        alert("your guessing is too low!")
        console.log("your guessing is too low!")
        

    }else {

        alert("your guessing is too high!!")
        console.log("your guessing is too high!!")
        

    }


}

alert("the right number is 4 ! thanks!")
console.log("the right number is 4 ! thanks!")







let firstarray=['Beef burger','mansaff','Fried chicken'];

alert("guess one of my best three foods ever , you have 6 attempts only ! press enter to choose one of the choices!" );
console.log("guess one of my best three foods ever , you have 6 attempts only ! press enter to choose one of the choices!" );


for(let i=0;i<6;i++){


    let guessfood=prompt("choose one of those('Beef burger','mansaff','Fried chicken','Chicken rice','Tacos','French toast','Fish','Shish kebab','Donuts',' Sushi','Chocolate','pizza')")

    if (guessfood==firstarray[0]||guessfood==firstarray[1]||guessfood==firstarray[2]){

        alert("congratulations ! this is one of my best food dishes ever !")
        console.log("congratulations ! this is one of my best food dishes ever !")
        usergrade++;

        break;

    }else{

        alert("NO ! thats wrong please try again !you have 6 attempts only !")
        console.log("NO ! thats wrong please try again !you have 6 attempts only !")
        

    }


}

alert("my best food dishes is Beef burger,mansaff,Fried chicken!  ")
console.log("my best food dishes is Beef burger,mansaff,Fried chicken!  ")

alert("i asked you 7 questions and you correctly answered "+usergrade+" of 7 !!")







