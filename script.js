// Program to get a number from the user that is between 1 and 10

let user_num = prompt("Enter number from 1 - 10", "Enter number");

if (user_num >= 1 && user_num <=10){
    alert("Bravo, you are right");
}
else{
    alert("How could you be so wrong");
}

// // let counter = 2;
// // alert(counter);
// // counter ++;
// // alert(counter);

// // let counter = 2;
// // counter --;
// // alert(counter);

// // let counter = 5;
// // let a = ++counter;
// // alert(a);

// // let counter = 5;
// // counter++;
// // alert(counter);

// // let counter = 7;
// // let b = counter ++;
// // sum = b + b;
// // alert(sum);

// // let counter = 9;
// // alert(2 * ++counter);
// // let a,b;
// // a = 1;// a = 1
// // b = 1; // b = 1

// // let c = ++a; // c = 2;
// // let d = b++; // d = 1;

// // alert(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);

// // let a = 2;

// // let x = 1 + (a *= 2);
// // alert(`a = ${a}, x = ${x}`);
// // let result = undefined + 1 ;
// // alert(result);
// // alert(typeof result);

// // let a = prompt("First number?", 1);
// // let b = prompt("Second Number", 2);

// // alert(+a + +b);


// // alert("a" > "A");

// // alert("2" > 1);
// // alert("01" == 1);
// // alert("01" ===1);
// // alert(0 === false);
// // alert(Number(null));
// // alert(Number(undefined));
// // alert(null === undefined);
// // alert(5 > 4);
// // alert("apple" > "pineapple");
// // alert("2" > "12");
// // alert(undefined == null);
// // alert(undefined === null);


// // let year = prompt("In which year was ECMAScript-2015 specification published", 'year');

// // if(year == 2015) alert("you are write");

// // alert( typeof year);


// // if(0){
// //     alert("The boy has not come");
// // }
// // else{
// //     alert("The boy has come");
// // }


// let user_num = Number(prompt("Enter a number from 1 - 10", "Enter number"));

// if(user_num >= 1 && user_num <= 10){
//     alert("Bravo, you got it");
// }
// else{
//     alert("How can you be so wrong");
// }

// // let user_num = prompt("Enter a number from 1 - 10", "Enter number");

// // if(user_num <= 10){
// //     alert("Bravo, you got it");
// // }
// // else{
// //     alert("How can you be so wrong");
// // }
// let num = true;

// if (num) alert("The boy has been here since morning");
// else{
//     alert("The boy did not honour the appointment");
// }

// let firstname, middlename, surname;
// firstname = prompt("What is your Firstname", "Enter Firstname");
// middlename = prompt("What is your Middlename", "Enter Middlename");
// surname = prompt("What is your Surname", "Enter Surname");
// let age = prompt("How old are you?", "Enter age");

// if (+age >= 1 && +age <=12){
// alert("You are regarded as a child");
// alert(`${firstname + ' ' + middlename + ' ' + surname} your profile cannot be created`);
// }

// else if (+age >=13 && +age <=19){
//     alert("You are regarded as a teenager");
//     alert(`${firstname} ${middlename} ${surname} your profile has been created but you require confirmation from your guardian or parent`);
//     let user_address = prompt("What is your address", "Enter Address");
//     let confired_address = confirm(user_address);
//     alert(confired_address);

// }

// else{
//     alert("Your are an adult");
//     alert(`${firstname + " " + middlename + " " + surname} your profile has been fully created, welcome aboard`);
// }

let age = prompt("How old are you?", "Enter age" );
if(+age !=14 && +age >14 && +age <=90){
    // alert("Access granted");
    alert("Access denied");
}
else{
    // alert("Access denied");
    alert("Access granted");
}