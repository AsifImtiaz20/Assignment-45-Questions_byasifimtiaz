/*15. Changing Guest List:  
You just heard that one of your guests can’t make the dinner, so you need to send out a new 
set of invitations. You’ll have to think of someone else to invite. 
• Start with your program from Exercise 14. Add a print statement at the end of your program stating 
the name of the guest who can’t make it.*/


const myFriends: string [] = ["Ali", "Tariq", "Adeel", "Hashir"];

console.log(`due to some personal reasons Mr. ${myFriends[1]} is not coming in dinner`)
myFriends[1] = "Khubaib";

console.log(`New list of my friends who are coming to my dinner`)
for(let i = 0; i < myFriends.length; i++){
    console.log(`${i + 1}, ${myFriends[i]}`);
}