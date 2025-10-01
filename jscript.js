const container = document.querySelector('#container');

let i = 0;
while (i < 256){
const square = document.createElement('div');
square.classList.toggle('squares');
container.appendChild(square);
i++;
}