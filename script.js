const boxContainer = document.querySelector('.box-container')

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
    box.classList.add('gridBox', 'onHover')
    boxContainer.appendChild(box)
  }
}

addGrid()
// addGlobalEventListener(
//   'mouseover',
//   '.gridBox',
//   (e) => {
//     e.target.className += ' onHover'
//   },
//   boxContainer
// )
