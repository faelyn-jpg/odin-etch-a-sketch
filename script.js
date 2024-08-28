const squareContainer = document.querySelector('.square-container')

function addGrid() {
  for (let i = 0; i < 256; i++) {
    const addSquare = document.createElement('div')
    addSquare.className = 'gridSquare'
    squareContainer.appendChild(addSquare)
  }
}
addGrid()
