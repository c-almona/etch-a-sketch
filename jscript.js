const container = document.querySelector('#container');

let i = 0;
while (i < 256){
const square = document.createElement('div');
square.classList.toggle('squares');
container.appendChild(square);
i++;
}

const squares = document.querySelectorAll('.squares');

// helper function to make a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0–255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = getRandomColor();
  });
});
