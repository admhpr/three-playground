import './style.css'

import GUI from 'lil-gui'
import {
  Scene,
  WebGLRenderer,
  SphereGeometry,
  MeshStandardMaterial,
  Mesh
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let canvas: HTMLElement
let renderer: WebGLRenderer
let scene: Scene
let gui: GUI

setup()
draw()

function createRenderer(){
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

  renderer = new WebGLRenderer({ canvas })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

function createSphere(radius: number, position: number){
  const sphereGeometry = new SphereGeometry(radius, 20, 20)
  const sphereMaterial = new MeshStandardMaterial({
      metalness: 0.3,
      roughness: 0.4,
      envMapIntensity: 0.5
  })
  const sphere = new Mesh(sphereGeometry, sphereMaterial)
  sphere.position.set(position, 0, 0)
  scene.add(sphere)
}

function createLight(){}
function createCamera(){}
function createBox(){}
function setup(){
  canvas = document.querySelector(`canvas#scene`)!
  scene = new Scene()
  createRenderer()
  createSphere(9, 0)
}
function draw(){}