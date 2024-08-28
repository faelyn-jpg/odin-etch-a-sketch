const boxContainer = document.querySelector('.box-container')

function addGlobalEventListener(type, selector, callback, parent = document) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e)
    }
  })
}

function addGrid() {
  for (let i = 0; i < 256; i++) {
    const box = document.createElement('div')
    box.className = 'gridBox'
    boxContainer.appendChild(box)
  }
}

addGrid()
addGlobalEventListener(
  'mouseover',
  '.gridBox',
  (e) => {
    e.target.className += ' onHover'
  },
  boxContainer
)
