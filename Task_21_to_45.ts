// // TASK 21 (They think of something you could store in a TypeScript Object....)
// // Datatype of person object
// interface person {
//     age:number,
//     name:string,
//     nationality:string,
//     student:boolean,
// }
// let person: person = {
//     age:24,
//     name:'Fatima',
//     nationality:'pakistani',
//     student:true,
// }
// console.log(person);
// // Datatype of car object
// interface car{
//     maker:string,
//     color:string,
//     automatic:boolean,
// }
// let car={
//     maker:'Honda',
//     color:'White',
//     automatic:'true',
// }
// console.log(car);

import { addAbortListener } from "events"
import { features, title } from "process"


// TASK 22 (Intentional Error)
// let newArray: string[]=['Sara','Bina','zara'];
// console.log(newArray[5]);
// // correct the error
// console.log(newArray);


// // TASK 23 (Conditional Tests)
// let car:string='subaru'
//                //TEST NO. 1
// console.log("Is car === 'subaru'? I predict true.");
// console.log(car ==='subaru');

//              //TEST NO. 2
// console.log("Is car == 'subaru'? I predict true.");
// console.log(car =='subaru');

// //TEST NO. 3
// console.log("Is car != 'Toyota'? I predict true.");
// console.log(car !='Toyota');

// //TEST NO. 4
// console.log("Is car !== 'Audi'? I predict true.");
// console.log(car !=='Audi');

// //TEST NO. 5
// console.log("Is car.Upper case =='SUBARU'? I predict true.");
// console.log(car.toUpperCase()=='SUBARU');

// //TEST NO. 6
// console.log("Is car =='SUBARU'? I predict false.");
// console.log(car=='SUBARU');

// //TEST NO. 7
// console.log("Is car === 'SUBARU'? I predict false.");
// console.log(car === 'SUBARU');

// //TEST NO. 8
// console.log("Is car === 'Train'? I predict false.");
// console.log(car === 'Train');

// //TEST NO. 9
// console.log("Is car === 'Bus'? I predict false.");
// console.log(car === 'Bus');

// //TEST NO. 10
// console.log("Is car === 'Rickshaw'? I predict false.");
// console.log(car === 'Rickshaw');

// // TASK 24 (More Conditional Tests)


// // equality and inequality test 1
// console.log('Equality test with strings:','Apple' === 'Apple');

// // equality and inequality test 2
// console.log('Inequality test with strings:',('Apple' as string) != 'Orange');

// // Tests using the lower case function
// console.log("Lower case function test:",'HELLO'.toLowerCase() === 'hello');

// //Numerical tests involving equality
// console.log("Equality test with numbers:",26 === 26);

// //Numerical tests involving inequality
// console.log("Inequality test with numbers:",(26 as number) != 35);

// //greater than test
// console.log("Greater than test:",10 > 5);

// //less than test
// console.log("Less than test:",5 < 10);

// //greater than or equal to
// console.log("Greater than and equal to test:",10>=10);

// //less than or equal to
// console.log("Less than or equal to test:",5<=10);

// //Tests using "and" operators
// console.log("And operator test:", 5===5 && 10 > 5);

// //Tests using "or" operators
// console.log("or operator test:",5===5 || false);

// //Test whether an item is in a array
// const fruits: string[] = ['orange','banana','pear'];
// console.log('Test "orange" in the array:', fruits.includes('orange'));

// //Test whether an item is not in a array
// console.log('Testing "apple" is not in the array:', !fruits.includes('apple'));


// // TASK 25 (Alien Colors #1)

// let alien_color: string = "green";
// if(alien_color === "green"){
//      console.log("player just earned 5 points.");
// }

// alien_color = "yellow";
// if(alien_color === "green"){
//      console.log("player just earned 5 points.");
// }


// // TASK 26 (Alien Colors #2)

// let alien_color: string = "green";
//    if(alien_color === "green"){
//     console.log("player just earned 5 points for shooting the alien.");
//    }else{
//     console.log("player just earned 10 points.")
//    }

//    alien_color = "yellow";
//    if(alien_color === "green"){
//     console.log("player just earned 5 points for shooting the alien.");
//    }else{
//     console.log("player just earned 10 points.")
//    }


// // TASK 27 (Alien Colors #3)

// let alien_color: string = "green";

// // version 1 of the program
// if(alien_color === "green"){
//          console.log("version 1: player earned 5 points.");
//         }
//         else if(alien_color === "yellow"){
//         console.log("player just earned 10 points.");
//        }
//        else if(alien_color === "red"){
//         console.log("player just earned 15 points.");
//        }
//        else{
//         console.log("please selesct right color")
//        }

//  // version 2 of the program
// alien_color = "yellow";

// if(alien_color === "green"){
//     console.log("player earned 5 points.");
//    }
//    else if(alien_color === "yellow"){
//    console.log("version 2: player earned 10 points.");
//   }
//   else if(alien_color === "red"){
//    console.log("player earned 15 points.");
//   }
//   else{
//    console.log("please select right color")
//   }

//    // version 3 of the program
// alien_color = "red";

// if(alien_color === "green"){
//     console.log("player earned 5 points.");
//    }
//    else if(alien_color === "yellow"){
//    console.log("player earned 10 points.");
//   }
//   else if(alien_color === "red"){
//    console.log("version 3: player earned 15 points.");
//   }
//   else{
//    console.log("please selesct right color")
//   }


// // TASK 28 (Stages of Life)

// let age: number = 25;
//  if(age < 2){
//     console.log("person is a baby.");
//  }
//  else if(age >= 2 && age < 4){
//     console.log("person is a toddler.");
//  }

//  else if(age >= 4 && age < 13){
//     console.log("person is a kid.");
//  }

//  else if(age >= 13 && age < 20){
//     console.log("person is a teenager.");
//  }

//  else if(age >= 20 && age < 65){
//     console.log("person is an adult.");
//  }

//  else{
//     console.log("person is an elder.");
//  }


// // TASK 29 (Favorite Fruit)

// let favorite_fruits: string[] = ['banana','strawberry','mango'];

// if(favorite_fruits.includes('banana')){
//     console.log('I really like bananas.');
// }

// if(favorite_fruits.includes('strawberry')){
//     console.log('I really like strawberries.');
// }

// if(favorite_fruits.includes('mango')){
//     console.log('I really like mangos.');
// }

// if(favorite_fruits.includes('orange')){
//     console.log('I really like oranges.');
// }

// if(favorite_fruits.includes('chikoo')){
//     console.log('I really like chikoo.');
// }


// // TASK 30 (Hello Admin)

// const userNames: string[] = ['admin','sara','zara','amna','bina'];

// for(let i=0; i<userNames.length; i++){
    
//     if(userNames[i] === 'admin')
// {
//     console.log('Hello admin, would you like to see a status report?');
// }
// else{
//     console.log(`Hello ${userNames[i]}, thank you for logging in again.`)
// }
// }


// // TASK 31 (No Users)

// let userNames: string[] = ['admin','sara','zara','amna','bina'];

// if(userNames.length === 0){
//      console.log('We need to find some users!');
// }else{
//     userNames = [];
//     console.log("All user names has been removed." +userNames.length);
// }


// // TASK 32 (Checking Usernames)

// let current_users: string[] = ['saRa','zaRa','amNa','Bina','mona'];

// let new_users: string[] = ['sonia','saRa','Mehak','fatima','Bina'];

// new_users.forEach(newUsername => {
//     let lowerCase: string = newUsername.toLowerCase();

// if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
//      console.log(`The username ${newUsername} is not available. Please write a different username`);
// }
// else{
//     console.log(`The username ${newUsername} is available.`);
// }
// })


// //TASK 33 (Ordinal Numbers)

// let number: number[] = [1,2,3,4,5,6,7,8,9];

// for(let num of number){

//     let ordinalEnding: string;

//     if (num === 1){
//         ordinalEnding = "st";
//     }
//     else if (num === 2){
//         ordinalEnding = "nd";
//     }
//     else if (num === 3){
//         ordinalEnding = "rd";
//     }
//    else{
//         ordinalEnding = "th";
//     }
// console.log(`${num}${ordinalEnding}`);
// }


// // TASK 34 (Pizzas)

// let Pizzas: string[] = ['pepperoni','fajita','supreme'];

// for(let pizza of Pizzas){
//     console.log(`I like ${pizza} pizza`);
// }
// console.log("I really love pizza!");


// // TASK 35 (Animals)

// let Animals: string[] = ['cat','cow','goat'];

// for(let Animal of Animals){

//     console.log(`A ${Animal} would make a great pet.`);
// }
// console.log(`Any of these animals would make a great pet!`);


// //TASK 36 (T-Shirt)

// function make_shirt(size:string, text:string){

//     console.log(`Creating a ${size} shirt with message: ${text}`);
// }
// make_shirt('small','My favorite shirt');
// make_shirt('medium','My favorite shirt');
// make_shirt('large','My favorite shirt');


// //TASK 37 (Large Shirts)

// function make_shirt(size:string = 'Large', text:string = 'I Love TypeScript'){

//      console.log(`Creating a ${size} shirt with the message: ${text}`);
//      }
//      make_shirt();
//      make_shirt('Medium');
//      make_shirt('Small','I Love Javascript');


// // TASK 38 (Cities)

// function describe_city(city:string, country:string = 'Default Country.'){

//     console.log(`${city} is in ${country}`);
// }

// describe_city('Karachi','Pakistan');
// describe_city('Jeddah','Saudia Arab');
// describe_city('Dubai');


// // TASK 39 (City Names)

// function city_country(city:string, country:string){

//     return `${city},${country}`;
// }

// console.log(city_country('Karachi','Pakistan'));
// console.log(city_country('Jeddah','Saudia Arab'));
// console.log(city_country('Sharjah','Dubai'));


// // TASK 40 (Album)

// function make_album(artist: string, title: string, tracks?:number){

//     const album: {artist: string, title: string, tracks?:number} = {

//         artist: artist,
//         title:title
//     }
//     if(tracks !== undefined){
//         album.tracks = tracks;
//     }
//     return album;
// }

// const album1 = make_album('Artist1','Album Title 1');
// console.log(album1);

// const album2 = make_album('Artist2','Album Title 2');
// console.log(album2);

// const album3 = make_album('Artist3','Album Title 3',12);
// console.log(album3);


// // TASK 41 (Magicians)

// let magician: string[] = ['Ron weasley','Harry potter','Mr.India'];

// function show_magicians(magicians: string[]){

//     magicians.forEach(element => {
//         console.log(element);
//     });
// }
// show_magicians(magician)


// // TASK 42 (Great Magicians)

// let magician: string[] = ['Ron weasley','Harry potter','Mr.India'];

// function make_great (magicianArray:string[]){
    
//     for(let i=0; i<magicianArray.length; i++){

//        magician [i] = 'The Great ' + magicianArray[i]
// }
// }
// function show_magicians(magicians: string[]){

//      magicians.forEach(element => {
//       console.log(element);
//      });
//     }
//     make_great(magician);
//  show_magicians(magician);


// // TASK 43 (Unchanged Magicians)

// let magician: string[] = ['Ron weasley','Harry potter','Mr.India'];

// function copyArray(arr:string[]){
//      return [...arr]
// }
//  function make_great (magicianArray:string[]){
    
//      for(let i=0; i<magicianArray.length; i++){

//         magicianArray[i] = 'The Great ' + magicianArray[i]
//  }
//  }
//  function show_magicians(magicians: string[]){

//       magicians.forEach(element => {
//        console.log(element);
//       });
//      }
//      const copyMagicianArray = copyArray(magician)

//      make_great(copyMagicianArray);
//      console.log('\n\nThis is my original Array:');
//   show_magicians(magician);

//   console.log('\n\nThis is my modified copy of the Array:');
//   show_magicians(copyMagicianArray);


// // TASK 44 (Sandwiches)

// function make_sandwich(item: string[]) {
//     console.log('\nMaking your sandwich with');

//     item.forEach(element=> console.log("- " + element));

//     console.log("Enjoy your sandwich!\n");
// }
//    make_sandwich(['chicken','mayonise','ketchup']);
//    make_sandwich(['bread','ice burg','cheese']);
//    make_sandwich(['egg','cucumber','fries']);


// // TASK 45 (Cars)

// function storeCarInfo(manufacturer: string, modelName: string, ...extraOption:{[key:string]: any} [] ):object {

// const carInfo = {
//     manufacturer,
//     modelName,
//     ...Object.assign({}, ...extraOption)
// }
// return carInfo;
// };

// let answer = storeCarInfo('Toyota','Carola',{color:'White'}, {features: ['Navigation','power window']})

// console.log(answer)