// Selectors
// Single Selectors
// Multiple Selectors

//  const jj = document.getElementById("topic")

//  const jj = document.querySelector("#topic")


//  console.log(jj)

//  Multiple Selectors

// const yy = document.getElementsByTagName("h1")
// const yy = document.querySelectorAll("")

// console.log(yy)

 const heading = document.querySelector("#topic")

 const heading2 = document.querySelector("#tt")

 const div = document.querySelector(".container")



 heading.textContent = "Sampson David"

//  heading2.innerText = "Shittu"

//  div.innerHTML = `<li>Welcome Home</li>`



//  CSS IN JAVASCRIPT

// heading.style.color = "red" 
// heading.style.backgroundColor = "blue" 
// heading.style.fontSize = "100px" 


// Events
// const headingg = document.querySelector("#topic")
// const button = document.querySelector(".btn")

// const runEvent = ()=>{
//     headingg.style.color = "red" 
//     headingg.style.backgroundColor = "blue" 
//     headingg.textContent = "Welcome To Nigeria"

// }

// button.addEventListener("click", runEvent)


// const arrayOfFruits = ["mango", "Oraneg", "appkle", "pineapple", "ll", "watermelon", "Wisdom"]

const ul = document.querySelector(".list")

// arrayOfFruits.forEach((item, i)=>{
//     ul.innerHTML += `<li>${item}</li>`
// })

// asynchronous, javascript promises



const makeRequest = ()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")

    .then(response => response.json())

    .then(res => {

        console.log(res)


        res.forEach((item, index) => {
            ul.innerHTML += `

                <div>
                    <h3>${item.id}</h3>
                    <h4>${item.completed}</h4>
                    <p>${item.title}</p>
                    <hr>
                </div>
            `
        });
    })

   
}

makeRequest()