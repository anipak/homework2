///DZ Part 1
function emotion(... string){
    let str = string.slice()
    console.log(str)
}

emotion('happy', 'angry', 'sad', 'unhappy', 'boring')


//DZ Part 2
function average(...numbers){
let sum = numbers.reduce((a,b) => (a + b)) / numbers.length
    console.log(sum)
}
average(16,45,58,123,5,69,4,23,33,45)


// DZ part 3
var coffee = prompt('black or cream')
var object = {
    black: 'black',
    cream: 'cream'
}

var black = 'One black coffee coming right up!'
var cream = 'One coffee with cream coming right up!'

// if (coffee === object.black){
//     alert(black)
// } else if (coffee === object.cream){
//     alert(cream)
// } else {
//     alert('Sorry, we do not have')
// }


console.log(coffee === object.black ? 'One black coffee coming right up!': 'One coffee with cream coming right up!' )
