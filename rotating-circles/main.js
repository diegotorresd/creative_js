/* eslint-disable */

const w = x => window.innerWidth * x / 100
const h = y => window.innerHeight * y / 100

let t = 0

function setup () {
  createCanvas(w(99), h(99))
  frameRate(60)
}

function draw () {
  t++
  background(255) // clear background
  rotatingCircle(0.08, 'red')(t)
  rotatingCircle(0.06, 'green')(t)
  rotatingCircle(0.04, 'blue')(t)
  rotatingCircle(0.02, 'magenta')(t)
}


function rotatingCircle (o, color = 0) {
  let x = 50
  let y = 50
  stroke(color)
  noFill()
  return function (t) {
    let x_ = x + 25 * cos(0.25 * o * t)
    let y_ = y + 25 * sin(0.25 * o * t)
    ellipse(w(x_), h(y_), 80, 80)
  }
}
