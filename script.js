// const h1 = document.getElementsByTagName("h1")

// let h1Arr = [...h1]

// let hArr = new Array(...h1)

// for(i = 0; i < h1.length; i++) {
//     h1[i].style.color = 'red'
// }

// for(let h of h1) {
//     h.style.color = 'red'
// }

// console.log(hArr)
// console.log(h1Arr)

// hArr.forEach((h) => {
//     console.log(h.innerText)
// })

const input = document.querySelector(".input")
const submitBtn = document.querySelector(".submit")
const display = document.querySelector(".display")

let num = 5

submitBtn.addEventListener("click", () => {
    if(input.value <= 0 || isNaN(input.value)) {
        display.innerHTML = "Invalid Number. Please type positive value or greater than 0."
    } else {
        let text = ""
    
        for(let i = 1; i <= 10; i++) {
            // console.log(`${num} x ${i} = ${num * i}`)
        
            text += `
                                    <span class="table">
                                        ${input.value} x ${i} = ${input.value * i}
                                    </span>
                                    </br>
                                `
        }

        display.innerHTML = text
    }
})