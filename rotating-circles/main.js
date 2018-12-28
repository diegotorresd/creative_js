/* eslint-disable */

const w = x => window.innerWidth * x / 100
const h = y => window.innerHeight * y / 100

let t = 0

function setup () {
  createCanvas(w(99), h(99))
  frameRate(60)
}

const circles = []

function draw () {
  t++
  background(255) // clear background
  for (let circle of circles) {
    circle(t)
  }
}

function mouseClicked () {
  circles.push(rotatingCircle(Math.random() * 0.07 + 0.01))
}

function rotatingCircle (o) {
  let x = 50
  let y = 50
  return function (t, color = 0) {
    stroke(color)
    strokeWeight(Math.ceil(0.75 / o))
    noFill()  
    let x_ = x + 25 * cos(0.25 * o * t)
    let y_ = y + 25 * sin(0.25 * o * t)
    let s = 80
    ellipse(w(x_), h(y_), s, s)
  }
}
