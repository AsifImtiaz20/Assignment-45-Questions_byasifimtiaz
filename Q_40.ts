/*40. Album:  
Write a function called make_album() that builds an Object describing a music album. The 
function should take in an artist name and an album title, and it should return a Object containing 
these two pieces of information. Use the function to make three dictionaries representing different 
albums. Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make 
at least one new function call that includes the number of tracks on an album.*/



// function myAlbum(artistName: string , albumTitle: string){
// return {artistName, albumTitle}
// }


// let album1 = myAlbum("Ali", "Junoon");
// let album2 = myAlbum("Zafar", "PSL");
// let album3 = myAlbum("Rahat", "COckStudio");

// console.log(album1);
// console.log(album2);
// console.log(album3);
   

function myAlbum(artistName: string , albumTitle: string , numbersOfTracks?: number ){
    return {artistName, albumTitle, numbersOfTracks}
    }
    
    
    let album1 = myAlbum("Ali", "Junoon", 40);
    let album2 = myAlbum("Zafar", "PSL", 90);
    let album3 = myAlbum("Rahat", "COckStudio");
    
    console.log(album1);
    console.log(album2);
    console.log(album3);
