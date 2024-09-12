const boxContainer = document.querySelector('.box-container')
const gridBox = document.querySelector('.gridBox')
const body = document.querySelector('body')
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
  const boxCalc = containerSize + 1 - (gridSize - 1)
  const boxWidthAndHeight = boxCalc / gridSize
  return boxWidthAndHeight
}

function createCustomGrid() {
  let gridSize = prompt(
    'What size grid would you like? Grid will be created number x number, enter a number from 1 to 100.',
    '32'
  )
  boxWidthAndHeight = calculateBoxSize(containerSize, gridSize)
  // removeGrid()
  amountOfBoxes = gridSize * gridSize

  //dynamically change css rules in addGrid()
  addGrid(amountOfBoxes)
}
//propmt user for grid size
//calculate grid size
//run add grid with calculated grid w/h

function addGrid(amountOfBoxes) {
  for (let i = 0; i < amountOfBoxes; i++) {
    const box = document.createElement('div')
    box.setAttribute('ondragstart', 'handleDrag(event)')
    box.classList.add('gridBox', 'onHover')
    boxContainer.appendChild(box)
  }
}

function removeGrid() {
  boxContainer.remove()
  const addContainer = document.createElement('div')
  addContainer.classList.add('box-container')
  body.appendChild(addContainer)
}

function handleDrag(event) {
  event.preventDefault()
  console.log('Event default prevented')
}
function enableToggle() {
  console.log('enableToggle')
  return true
}

function disableToggle() {
  console.log('disableToggle')
  return false
}

let button = document.querySelector('click-button')
addGrid(amountOfBoxes)

addGlobalEventListener(
  'click',
  'button',
  (e) => {
    removeGrid()
  },
  document
)

addGlobalEventListener(
  'mousedown',
  '.gridBox',
  (e) => {
    isToggling = enableToggle()
    console.log(isToggling)
  },
  boxContainer
)
addGlobalEventListener(
  'mouseup',
  '.gridBox',
  (e) => {
    isToggling = disableToggle()
    console.log(isToggling)
  },
  boxContainer
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
