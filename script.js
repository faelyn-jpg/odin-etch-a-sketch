const boxContainer = document.querySelector('.box-container')

function addGrid() {
  for (let i = 0; i < 256; i++) {
    const box = document.createElement('div')
    box.className = 'gridBox'
    boxContainer.appendChild(box)
  }
}
addGrid()
