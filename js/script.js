let head = document.querySelector('#oma')

let index = 20;
const count = setInterval( () =>{
// head.innerHTML = `  ${index}  `
index--
head.innerHTML = `\r${index}`
if (index == 0) {
    clearInterval(count)
}

},100)