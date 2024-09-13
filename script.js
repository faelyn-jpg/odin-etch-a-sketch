const boxContainer = document.querySelector('.box-container')
const gridBox = document.querySelector('.gridBox')
const body = document.querySelector('.container-wrapper')
let isToggling = false
const containerSize = 735
let amountOfBoxes = 256
let boxWidthAndHeight = 45

function addGlobalEventListener(type, selector, callback, parent = document) {
  parent.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e)
    }
  })
}

function calculateBoxSize(containerSize, gridSize) {
  const boxCalc = containerSize + 1 - gridSize
  const boxWidthAndHeight = boxCalc / gridSize
  return boxWidthAndHeight
}

function createCustomGrid() {
  let gridSize = prompt(
    'What size grid would you like? Grid will be created number x number, enter a number from 1 to 100.',
    '32'
  )
  if (gridSize > 100 || gridSize < 0) {
    do {
      gridSize = prompt('Please enter a valid number from 1 to 100')
    } while (gridSize > 100 || gridSize < 0)
  }
  removeGrid()
  amountOfBoxes = gridSize * gridSize
  boxWidthAndHeight = calculateBoxSize(containerSize, gridSize)
  addGrid(amountOfBoxes, boxWidthAndHeight)
}
//propmt user for grid size
//calculate grid size
//run add grid with calculated grid w/h

function addGrid(amountOfBoxes, boxWidthAndHeight) {
  for (let i = 0; i < amountOfBoxes; i++) {
    const boxContainer = document.querySelector('.box-container')
    const box = document.createElement('div')
    box.setAttribute('ondragstart', 'handleDrag(event)')
    box.style.cssText =
      'width: ' + boxWidthAndHeight + 'px; height: ' + boxWidthAndHeight + 'px;'
    box.classList.add('gridBox', 'onHover')
    addGlobalEventListener(
      'mousedown',
      '.gridBox',
      (e) => {
        isToggling = true
      },
      document
    )
    addGlobalEventListener(
      'mouseup',
      '.gridBox',
      (e) => {
        isToggling = false
      },
      document
    )
    addGlobalEventListener(
      'mouseover',
      '.gridBox',
      (e) => {
        if (isToggling === true) {
          e.target.classList.add('drawnBox')
        } else return
      },
      boxContainer
    )
    addGlobalEventListener(
      'mousedown',
      '.gridBox',
      (e) => {
        e.target.classList.add('drawnBox')
      },
      boxContainer
    )
    boxContainer.addEventListener('mouseleave', (e) => {
      isToggling = false
    })

    boxContainer.appendChild(box)
  }
}

function removeGrid() {
  const boxContainer = document.querySelector('.box-container')
  boxContainer.remove()
  const addContainer = document.createElement('div')
  addContainer.classList.add('box-container')
  body.appendChild(addContainer)
}

function handleDrag(event) {
  event.preventDefault()
}

let button = document.querySelector('click-button')
addGrid(amountOfBoxes, boxWidthAndHeight)

addGlobalEventListener(
  'click',
  'button',
  (e) => {
    createCustomGrid()
  },
  document
)
