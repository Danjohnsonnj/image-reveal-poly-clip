const poly = (bound, total = 3) => {
  const dist = 100 + (50 * (total - 1))
  const mod = bound === 'start' ? dist : 0
  return new Array(total).fill('').reduce((acc, i, idx) => {
    const x1 = Math.floor(0 - mod - 50 * idx)
    const x2 = Math.floor(dist - mod - 50 * idx)
    const y1 = Math.floor(100 / total * idx)
    const y2 = Math.floor(100 / total * (idx + 1))
    const str = `${x1}% ${y1}%, ${x2}% ${y1}%, ${x2}% ${y2}%, ${x1}% ${y2}%, ${x1}% ${y1}%${idx < total - 1 ? ', ' : ''}`
    acc += str
    return acc
  }, '')
}

// Set up
const control = document.getElementById('segments')
const imgParent = document.querySelector('.revealer')
const src = `https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=70&width=${imgParent.clientWidth * window.devicePixelRatio}`

const setUpImg = container => {
  const segments = parseInt(control.value, 10)
  container.classList.remove('ready')
  container.innerHTML = ''
  const img = document.createElement('img')
  container.appendChild(img)
  container.style.WebkitClipPath = `polygon(${poly('start', segments)})`

  img.addEventListener('load', e => {
    container.classList.add('ready')
    img.classList.add('loaded')
    container.style.WebkitClipPath = `polygon(${poly('end', segments)})`
  }, { once: true, })
  requestAnimationFrame(() => {
    img.src = src
  })
}
control.addEventListener('change', () => setUpImg(imgParent))

setUpImg(imgParent)
