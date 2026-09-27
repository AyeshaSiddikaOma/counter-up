// let head = document.querySelector('#oma')

let index = 0;
const count = setInterval( () =>{
// head.innerHTML = `  ${index}  `
index++
process.stdout.write(`\r${index}`)
if (index == 500) {
    clearInterval(count)
}

})