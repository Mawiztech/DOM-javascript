// iF/Else Statements == === !== !=

// const gg = "2";

// if(gg == 10){
//     console.log("Yes")
// } else if(gg == 20) {
//     console.log("No")
// } else if(gg == 20) {
//     console.log("Maybe")
// } else {
//     console.log("first")
// }


// if (gg === 2) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// Ternary operators


// const a = 10

// a == 5 ? console.log("first")  : console.log("secomd")



// Functions

// function nathaniel (nameOfStudent){
 
//     const cert = `Good morning ${nameOfStudent}`
//     console.log(cert)
// }

// Hoisting




// function nathaniel (a = 0, b = "Joshua"){
 
//     const answer = `Your name is ${b} and score is ${a}`
//     console.log(answer)
// }


// const yyy = ()=>{
//     const hh = ( a = 0, b = "Joshua" )=>{
//         const answer = `Your name is ${b} and score is ${a}`
//     console.log(answer)


//     hh()
// }
// }

// yyy()

// const nath = (a = 0)=>{
//     console.log(a + 1)
// }
// const nathan = (wisdom = 3)=>{
//     const d = 60
//     nath(d)
// }

// const nathaniel = ( c = 5)=>{
//     nathan(c)
// }

// nathaniel(10)


// Higher Array Functions /Methods
// forEach, map, Filter etc

const students = [
    {
        name: "Davcid",
        score: 90,
        location: "Rivers"
    },
    {
        name: "Wisdom",
        score: 60,
        location: "Lagos"

    },
    {
        name: "Joshua",
        score: 30,
        location: "Owerri"

    }
]

// Add score

students.forEach( (each, index)=>{
    console.log(each.score + 10 )
})

// All names

const names = students.map((each, index)=>{
    return `${each.location}, ${each.score}`
})

console.log(names)

// By score / location

const result = students.filter((each, index)=>{
    return each.score > 50
}).filter((each)=>{
    return each.location === "Lagos"
})



console.log(res)




