let input = document.querySelector('#input')
let img = document.querySelector('#img')
let linia = document.querySelector('.linia')


let nul = 0
img.onclick = function () {
    nul ++
    if (nul%2 == 1) {
        linia.style=`
        display: none;
        `
        input.setAttribute('type', 'text')
    }
    else{
        linia.style=`
        display: flex;
        `
        input.setAttribute('type','password')
    }
}
linia.onclick = function () {
    nul ++
    if (nul%2 == 1) {
        linia.style=`
        display: none;
        `
        input.setAttribute('type', 'text')
    }
    else{
        linia.style=`
        display: flex;
        `
        input.setAttribute('type','password')
    }
}










