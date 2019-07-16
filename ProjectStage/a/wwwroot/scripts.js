const GRID_DIM = 6

class Cell {
  constructor(htmlCell) {
    this._htmlCell = htmlCell
    this._state = 0  
  }
  setStateOccupied() {
    this._state = 1
    this._htmlCell.style.backgroundColor = '#aaa'
    // console.log(this._htmlCell.style.backgroundColor)
  }
  setStateFree() {
    this._state = 0
    this._htmlCell.style.backgroundColor = '#fff'
  }
  isOccupied() {
    return this._state === 1
  }
}

class BasePiece {
  constructor(selectionCells) {
    this.selectionCells = selectionCells
  }
  putOnGrid(cells) {
    cells.forEach(c => {
      if (c.isOccupied()) {
        throw new Error('already occupied!')
      }
      c.setStateOccupied()
    })
  }
  render() {
    throw new Error('not implemented!')
  }
}

class UpRightPiece extends BasePiece {
  constructor(selectionCells) {
    super(selectionCells)
  }
  putOnGrid(cells, i, j) {
    console.log('UpRightPiece')
    super.putOnGrid([
      cells[(i * GRID_DIM) + j],
      cells[(i * GRID_DIM) + j+1],
      cells[((i+1) * GRID_DIM) + j+1],
    ])
  }
  render() {
    selectionCells[0].setStateOccupied();
    selectionCells[1].setStateOccupied();
    selectionCells[2].setStateFree();
    selectionCells[3].setStateOccupied();
  }
}

class DownRightPiece extends BasePiece {
  constructor(selectionCells) {
    super(selectionCells)
  }
  putOnGrid(cells, i, j) {
    console.log('DownRightPiece')
    super.putOnGrid([
      cells[(i * GRID_DIM) + j+1],
      cells[((i+1) * GRID_DIM) + j],
      cells[((i+1) * GRID_DIM) + j+1],
    ])
  }
  render() {
    selectionCells[0].setStateFree();
    selectionCells[1].setStateOccupied();
    selectionCells[2].setStateOccupied();
    selectionCells[3].setStateOccupied();
  }
}

class UpLeftPiece extends BasePiece {
  constructor(selectionCells) {
    super(selectionCells)
  }
  putOnGrid(cells, i, j) {
    console.log('UpLeftPiece')
    super.putOnGrid([
      cells[(i * GRID_DIM) + j],
      cells[(i * GRID_DIM) + (j+1)],
      cells[((i+1) * GRID_DIM) + j],
    ])
  }
  render() {
    selectionCells[0].setStateOccupied();
    selectionCells[1].setStateOccupied();
    selectionCells[2].setStateOccupied();
    selectionCells[3].setStateFree();
  }
}

class DownLeftPiece extends BasePiece {
  constructor(selectionCells) {
    super(selectionCells)
  }
  putOnGrid(cells, i, j) {
    console.log('DownLeftPiece')
    super.putOnGrid([
      cells[(i * GRID_DIM) + j],
      cells[((i+1) * GRID_DIM) + j],
      cells[((i+1) * GRID_DIM) + j+1],
    ])
  }
  render() {
    selectionCells[0].setStateOccupied();
    selectionCells[1].setStateFree();
    selectionCells[2].setStateOccupied();
    selectionCells[3].setStateOccupied();
  }
}

document.getElementById('grid-section').style.display = 'none'
document.getElementById('current-piece').style.display = 'none'

var boardCells = initGrid('grid', GRID_DIM)
var selectionCells = initGrid('current-piece-grid', 2)

var pieces = initPieces(selectionCells)

var currentPiece

function initGrid(tbodyId, dimension) {
  var cells = []
  var grid = document.getElementById(tbodyId)
  for(let i = 0; i < dimension; i++) {
    var tr = document.createElement('tr')
    for(let j = 0; j < dimension; j++) {
      var td = document.createElement('td')
      var cell = new Cell(td)
      td.style.backgroundColor = '#fff'
      td.onclick = () => handleClick(i, j)
      tr.appendChild(td)
      cells.push(cell)
    }
    grid.appendChild(tr)
  }
  return cells
}

function chooseRandomPiece(pieces) {
  var piece = pieces[Math.floor(Math.random() * pieces.length)]
  piece.render()
  return piece
}

function initPieces(selectionCells) {
  return [
    new UpRightPiece(selectionCells),
    new DownRightPiece(selectionCells),
    new UpLeftPiece(selectionCells),
    new DownLeftPiece(selectionCells)
  ]
}

function startGame() {
  clearCells()
  currentPiece = chooseRandomPiece(pieces)
  document.getElementById('grid-section').style.display = 'block'
  document.getElementById('current-piece').style.display = 'block'
}

function clearCells() {
  for(let c of boardCells) {
    c.setStateFree()
  }
}

function handleClick(i, j) {
  if (i === GRID_DIM - 1 || j === GRID_DIM - 1) {
    throw new Error('cannot click here!')
  }
  try {
    currentPiece.putOnGrid(boardCells, i, j)
  } catch(err) {
    document.getElementById('grid-section').style.display = 'none'
    document.getElementById('current-piece').style.display = 'none'
    alert(err.message)
    alert('YOU LOSE!')
  }

  let full = checkFull(boardCells)

  if (full) {
    alert('YOU WON!')
    document.getElementById('grid-section').style.display = 'none'
    document.getElementById('current-piece').style.display = 'none'
    return
  }

  currentPiece = chooseRandomPiece(pieces)
}

function checkFull(cells) {
  for(let c of cells) {
    if (!c.isOccupied()) {
      return false
    }
  }
  return true
}
