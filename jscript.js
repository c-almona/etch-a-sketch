const container = document.querySelector('#container');

// to draw my squares
let i = 0;
while (i < 256){
const square = document.createElement('div');
square.classList.toggle('squares');
square.style.width = '20px';
  square.style.height = '20px';
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

const totalSize = 352;
const button = document.querySelector('#btn');

button.addEventListener('click', () => {
  let size = prompt("Enter new grid size (max 100)");
  if (size > 100) { size = 100;};

  // code to remove all existing squares
  const container = document.querySelector('#container');

  while (container.firstChild) { //container.firstchild gets the first element inside the container.
    container.removeChild(container.firstChild); //removeChild removes that element.
  }

  // draw the new grid size
  let i = 0;
  while (i < (size*size)){
    const square = document.createElement('div');
    square.classList.toggle('squares');

     // Calculate square size to fit evenly in total width
    const squareSize = Math.floor(totalSize / size);
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    container.appendChild(square);
    i++;
  }
  const squares = document.querySelectorAll('.squares');
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = getRandomColor();
    });
  });
  
});
