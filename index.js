const main = document.querySelector('#main')
const cur = document.querySelector('#crsr')

main.addEventListener('mousemove', function (fjh) {
  cur.style.left = fjh.x + 'px'
  cur.style.top = fjh.y + 'px'
})