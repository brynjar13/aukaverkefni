import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { makePlanets } from './lib/planets';
import { Vector3 } from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { moveMent } from './lib/movement';

const canvas = document.querySelector('#bg');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

async function init() {
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(50);
  // add 100 stars to the scene
  for (let i = 0; i < 3000; i++) {
    makeStars();
  }
  moveMent(scene, camera);
  makePlanets(scene, camera, renderer);
  renderer.render(scene, camera);
}

// fill the scene with stars
function makeStars() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(300)
    .fill()
    .map(() => THREE.Math.randFloatSpread(3000));

  star.position.set(x, y, z);
  scene.add(star);
}

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}

requestAnimationFrame(animate);
init();
