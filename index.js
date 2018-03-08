function getFirstSelector(x) {
  return document.querySelector(x)
}

function nestedTarget(n, t) {
  let nested = n
  let target = t
  return document.getElementById('#nested').querySelector('.target')
}
