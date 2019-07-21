const readlineSync = require('readline-sync');

// Create an array
// When using deadline sync key
// 0 = -1

//create a function for each donate, volunteer, foster, adopt
console.log( "Welcome to Pound Puppies!" )
console.log( "What do you want to do?" )
start = ['Donate','Volunteer','Adopt']
start_index = readlineSync.keyInSelect(start, "What's your choice")
level_2 = console.log('Great! You want to ' + start[start_index] + '!')

// console.log(start_index)

if ( start_index === 0 ) {
    dnt = ['Dog Food', 'Dog Bed', 'Dog Toys', 'Money']
    dnt_index = readlineSync.keyInSelect(dnt, "What would you like to give?")
    // console.log(dnt_index)
    if ( dnt_index === 0 ) {
        console.log("YaY! Puppies love food! Thank you!")
    }else if( dnt_index === 1 ){
        console.log("Now the puppies will be extra cozy in their new dog beds! They'll be relaxed when families come by.💤")
    }else if( dnt_index === 2 ){
        console.log("Puppies 💖 Toys! Now the puppies will look happy when potential fur pawrents drop by. Thank you!")
    }else if( dnt_index === 3 ){
        console.log("Thank you for your monetary donation! Now the puppies will get happy homes.")
    }else{
        console.log("Why don't you like dogs!? Without donations none of the pupies will be adopted...😢🐶🐶🥺") 
    }
} else if ( start_index === 1 ) {
    vlntr = ['read to dogs', 'play with dogs', 'feed dogs', 'bathe dogs']
    vlntr_index = readlineSync.keyInSelect(vlntr, "What would you like to do?")
    if ( vlntr_index === 0 ) {
        console.log("Puppies love being read to🐶💖📚. Thank you!")
    }else if( vlntr_index === 1 ){
        console.log("Volunteers playing with puppies teaches them how to play well with humans.")
    }else if( vlntr_index === 2 ){
        console.log("Pound puppies staff thanks you!")
    }else if( vlntr_index === 3 ){
        console.log("Bubble baths for puppies are so fun.🛁🐶🥰 They'll be clean and sweet smelling for their new pawrents")
    }else{
        console.log("Why don't you like dogs!?😢🐶🥺 Why won't you play with us?!?")
    }
} else if ( start_index === 2 ) {
    console.log("YAY!!!🙌THANK🎉YOU✨FOR🎁GIVINGA🐶PUPPY🌈A💖HOME🏡!!!")
} else {
        console.log("Why don't you like dogs!? Without your help none of the pupies will be adopted...😢🐶🐶🥺") 
    }  
