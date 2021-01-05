// Code your solutions in this file
function writeCards(array, eventName){
    let newArray=[]
    for (let i=0; i<array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray
}

function countDown(number){
    var i= number
    while (i != -1) {
        console.log(i);
        i--;
    }
}