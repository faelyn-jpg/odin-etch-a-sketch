const boxContainer = document.querySelector('.box-container')
const gridBox = document.querySelector('.gridBox')
let isToggling = false

function addGlobalEventListener(type, selector, callback, parent = document) {
  parent.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e)
    }
  })
}
function addGrid() {
  for (let i = 0; i < 256; i++) {
    const box = document.createElement('div')
    box.setAttribute('ondragstart', 'handleDrag(event)')
    box.classList.add('gridBox', 'onHover')
    boxContainer.appendChild(box)
  }
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

addGrid()

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
