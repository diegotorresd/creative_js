/* globals THREE */
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
var geometry = new THREE.BoxGeometry(1, 1, 1)
var material = new THREE.MeshPhongMaterial({
  color: 0x00ff00,
  side: THREE.DoubleSide,
  shininess: 30
})
var cube = new THREE.Mesh(geometry, material)
scene.add(cube)
camera.position.z = 5
var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4)
scene.add(ambientLight)
var pointLight = new THREE.PointLight(0xffffff, 0.8)
camera.add(pointLight)
scene.add(camera)

function animate () {
  window.requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}

animate()
