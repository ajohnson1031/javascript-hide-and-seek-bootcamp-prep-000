function getFirstSelector(x) {
  return document.querySelector(x)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const targ = document.querySelectorAll('.ranked-list li')

  for(i in targ) {
    let x = parseInt(targ.innerHTML) + n
  }

}
