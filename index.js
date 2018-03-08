function getFirstSelector(x) {
  return document.querySelector(x)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const targ = document.querySelectorAll('.ranked-list li')

  for(let i in targ) {
    let x = parseInt(targ[i].innerHTML) + n
    targ[i].innerHTML = x
  }

}

function deepestChild() {
  const n = document.querySelectorAll('#grand-node div')
  const l = n.length

  for (let x = 0; x < l; x++) {
      
  }
  
}