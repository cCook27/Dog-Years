// This is my age (human age), use const because this won't change

const myAge = 25

// We want to change this, so use var. The first 2 years are going to be multiplied by 10.5 because the first 2 years of a dogs life count as 10.5 each
var earlyYears = 2

earlyYears *= 10.5

// we want to change this so use var. We will account for those 2 years we take off in early years. each subsequent yr after the first 2 count as 4 years
var laterYears = myAge - 2

laterYears *= 4

// This will give us both peices of data we've saved. Both the first 2 years and the subsequent years.
var myAgeInDogYears = earlyYears + laterYears

// I'm unaware and searched how I could change the string within the variable to a lower case, so I decided to use it when I consoled it. I also tried to manipulate the variable, that didn't work either. I know you could probably use another variable to do it though, so that's what I did.
var myName = 'CONNOR'

var myNameLC = myName.toLocaleLowerCase()



console.log(`My name is ${myNameLC}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
