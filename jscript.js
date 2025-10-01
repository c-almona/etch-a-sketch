const container = document.querySelector('#container');

let i = 0;
while (i < 256){
const square = document.createElement('div');
square.classList.toggle('squares');
container.appendChild(square);
i++;
}

const squares = document.querySelectorAll('.squares');

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'pink';
  });
});
