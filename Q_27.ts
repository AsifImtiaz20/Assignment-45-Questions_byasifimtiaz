/*27. Alien Colors #3:  
Turn your if-else chain from Exercise 5-4 into an if-else chain. 
• If the alien is green, print a message that the player earned 5 points. 
• If the alien is yellow, print a message that the player earned 10 points. 
• If the alien is red, print a message that the player earned 15 points. 
• Write three versions of this program, making sure each message is printed for the appropriate color 
alien.*/


let alien_color = "red";

if (alien_color == "green"){

    console.log(`The Player Earned 10 Ponts`);

}else if(alien_color == "yellow"){

    console.log(`The Player Earnes 20 Point`);

}else if (alien_color == "red"){
    
console.log(`The Player Earned 100 Points`)
    
}else {
    console.log(`The Player Earned 0 Points`)
}