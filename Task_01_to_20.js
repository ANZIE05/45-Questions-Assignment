// // TASK 01 HELLO WORLD
//  console.log("Hello, world!");
// // TASK 02 (Personal Message)
//  let personName: string= "ERIC";
//  console.log(`hello ${personName} would you like to learn some python today?`);
// // // TASK 03(Name Cases)
// // //lower case
//  let personName: string ="Annie"
//  console.log("lowercase:", personName.toLowerCase());
// // //upper case
//  console.log("uppercase:", personName.toLocaleUpperCase());
// // // Title case
//  console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
// // TASK 04(Famous Quote)
// let qoute: string= "A person who never made a mistake never tried anything new";
// let author: string= "Albert Einstein"
// console.log(`${author} once said, "${qoute}`);
// // TASK 05(Famous Quote 2)
// let qoute: string= "A person who never made a mistake never tried anything new";
// let famous_person="Albert Einstein";
// let message=`${famous_person} once said, ${qoute}`;
// console.log(message);
// // TASK 06(Stripping Names)
// let personName =`\n\t IMRAN KHAN\t\n`;
// console.log(personName);
// let stripped: string = personName.trim();
// console.log(stripped);
// // TASK 07-08(Number Eight)
// console.log(5 +3);
// console.log(11 -3);
// console.log(4 *2);
// console.log(16 /2);
// // TASK 09(Favorite Number)
// let favoriteNumber: number = 4;
// console.log(`My favourite number is ${favoriteNumber}`);
// // TASK 10(Adding Comments)
// //my name is ANNIE
// //Dated: 24/02/2024
// //this program will run simple code just like hello world
// console.log('hello world program');
// //this program will multiplication
// console.log(5 * 2);
// // TASK 11(Names)
//  let members: string[] =['sana','sara','saba','sofia'];
//  for(let i=0; i<members.length; i++){
//     console.log(members[i]);
//  }
// // TASK 12(Greetings)
// let members: string[] =['sana','sara','saba','sofia'];
// let message: string='\nwhat is day tomorrow\n';
// for(let i=0; i<members.length; i++){
//         console.log(message + members[i]);
//       }
// // TASK 13(Your Own Array)
// let transportation : string [] = ['car','rickshaw','bike','bus'];
// for(let i=0; i<transportation.length; i++){
//     console.log('I would like to own a ' + transportation[i]);
// }
// // TASK 14(Guest List) - 15(Changing Guest List)
// let guest_list : string [] = ['rizwana','saima','maryam'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Friend' + guest_list[i] + ',\n\nWe invited you on dinner tomorrow.\nThank You\n')
// }
// let not_present : string = 'rizwana';
// let new_guest : string = 'Mehak';
// guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Friend' + guest_list[i] + ',\n\nWe invited you on dinner tomorrow.\nThank You\n')
// }
// console.log(`Miss.${not_present} will not come tomorrow at dinner. `)
// export{guest_list}
// // TASK 16(More Guests) - 17(Shrinking Guest List)
// let guest_list : string [] = ['rizwana','saima','maryam'];
// //  for(let i=0; i<guest_list.length; i++){
//   //    console.log('Dear Friend' + guest_list[i] + ',\n\nWe invited you on dinner tomorrow.\nThank You\n')
//  // }
// let not_present : string = 'rizwana';
// let new_guest : string = 'Mehak';
// guest_list[0] = new_guest;
// // for(let i=0; i<guest_list.length; i++){
//   //   console.log('Dear Friend' + guest_list[i] + ',\n\nWe invited you on dinner tomorrow.\n\nThank You\n\n')
// // }
// console.log(`Miss.${not_present} will not come tomorrow at dinner. `);
// console.log('Good News! we find a big table for dinner so we are inviting 3 more guests.')
// guest_list.unshift('sanobar');
// guest_list.splice(2,0,'saniya');
// guest_list.push('mehwish');
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Friend' + guest_list[i] + ',\n\nWe invited you on dinner tomorrow.\n\nThank You\n\n')
// }
// console.log('\nSorry we cannot arrange the big table, only two people will be invited.');
// while(guest_list.length > 2){
//    let remove_guest = guest_list.pop();
//    console.log(`sorry Miss.${remove_guest}, you are not invited for dinner.`);
// }
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Friend' + guest_list[i] + ',\n\nyou are still invited.\n\nThank You\n\n')
// }
// guest_list.splice(0, 2);
// console.log(guest_list);
// // TASK 18(Seeing the World)
// let places :string[] = ['London','Saudia','Kuwait','Italy','Dubai'];
// console.log('original ' + places);
// console.log('copy ' + [...places].sort());
// console.log('original ' + places);
// console.log('copy ' + [...places].sort().reverse());
// console.log('original ' + places);
// console.log('original ' + places.reverse());
// console.log('original ' + places.reverse());
// console.log('original ' + places.sort());
// console.log('original ' + places.sort().reverse());
// // TASK 19(Dinner Guests)
// import{ guest_list } from '../Task 14-15(Guest List-Changing GL)/app';
// console.log(`n\ printing number of guest invited`);
// console.log(`we had finally invited ${guest_list.length} from exercise 14`);
// // TASK 20(Think of something you could store in a array....)
// var languages = ['english', 'urdu', 'hindi', 'arabic'];
// console.log("list of languages:");
// for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
//     var top_1 = languages_1[_i];
//     console.log(top_1);
// }