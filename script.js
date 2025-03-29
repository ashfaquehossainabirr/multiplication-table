const input = document.querySelector(".input")
const submitBtn = document.querySelector(".submit")
const display = document.querySelector(".display")

let num = 5

submitBtn.addEventListener("click", () => {
    if(input.value <= 0 || isNaN(input.value)) {
        display.style.padding = "10px"
        display.style.background = "red"
        display.innerHTML = `
                                <span class="error">
                                    Invalid Number. Please type positive value or greater than zero.
                                </span>
                            `
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

        display.style.padding = "20px 0 10px"
        display.style.width = "400px"
        display.style.color = "#000"
        display.style.background = "lightgreen"
        display.innerHTML = text
    }
})