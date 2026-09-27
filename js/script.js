// let head = document.querySelector('#oma')

let index = 20;
const count = setInterval( () =>{
// head.innerHTML = `  ${index}  `
index--
process.stdout.write(`\r${index}`)
if (index == 0) {
    clearInterval(count)
}

},100)