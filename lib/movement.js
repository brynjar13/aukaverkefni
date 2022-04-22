import * as TWEEN from '@tweenjs/tween.js';
import * as THREE from 'three';

const controls = document.querySelector('.controls');
export function moveMent(scene, camera) {
  const planetTitle = document.querySelector('.planet__title');
  const cubeGeometry = new THREE.BoxGeometry(0, 0, 0);
  const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x666333 });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0, 8, 50);
  cube.position.set(0, 8, 20);
  camera.position.y = 8;
  scene.add(light);
  scene.add(cube);
  let keydown = false;
  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'a':
        controls.textContent = '';
        if (cube.position.x === -1000 || keydown) {
          break;
        } else {
          keydown = true;
          const tween = new TWEEN.Tween(cube.position).to(
            { x: cube.position.x - 200, y: 8, z: 20 },
            1000
          );
          tween
            .onUpdate((object) => {
              planetTitle.textContent = '';
              cube.position.set(object.x, object.y, object.z);
              camera.position.set(object.x, object.y, camera.position.z);
              light.position.set(object.x, object.y, camera.position.z);
            })
            .onComplete(() => {
              keydown = false;
              switch (cube.position.x) {
                case -1000:
                  planetTitle.textContent = 'Neptune';
                  break;
                case -800:
                  planetTitle.textContent = 'Uranus';
                  break;
                case -600:
                  planetTitle.textContent = 'Saturn';
                  break;
                case -400:
                  planetTitle.textContent = 'Jupiter';
                  break;
                case -200:
                  planetTitle.textContent = 'Mars';
                  break;
                case 0:
                  planetTitle.textContent = 'Earth';
                  break;
                case 200:
                  planetTitle.textContent = 'Venus';
                  break;
                case 400:
                  planetTitle.textContent = 'Mercury';
                  break;
                default:
                  break;
              }
            });

          tween.start();
        }
        break;
      case 'd':
        controls.textContent = '';
        if (cube.position.x === 400 || keydown) {
          break;
        } else {
          keydown = true;
          const tween = new TWEEN.Tween(cube.position).to(
            { x: cube.position.x + 200, y: 8, z: 20 },
            1000
          );

          tween
            .onUpdate((object) => {
              planetTitle.textContent = '';
              cube.position.set(object.x, object.y, object.z);
              camera.position.set(object.x, object.y, camera.position.z);
              light.position.set(object.x, object.y, camera.position.z);
            })
            .onComplete(() => {
              keydown = false;
              switch (cube.position.x) {
                case -1000:
                  planetTitle.textContent = 'Neptune';
                  break;
                case -800:
                  planetTitle.textContent = 'Uranus';
                  break;
                case -600:
                  planetTitle.textContent = 'Saturn';
                  break;
                case -400:
                  planetTitle.textContent = 'Jupiter';
                  break;
                case -200:
                  planetTitle.textContent = 'Mars';
                  break;
                case 0:
                  planetTitle.textContent = 'Earth';
                  break;
                case 200:
                  planetTitle.textContent = 'Venus';
                  break;
                case 400:
                  planetTitle.textContent = 'Mercury';
                  break;
                default:
                  break;
              }
            });

          tween.start();
        }
        break;
      case 'w':
        controls.textContent = '';
        if (
          cube.position.x === 0 ||
          cube.position.x === 200 ||
          cube.position.x === 400 ||
          cube.position.x === -200 ||
          cube.position.x === -400 ||
          cube.position.x === -600 ||
          cube.position.x === -800 ||
          cube.position.x === -1000
        ) {
          keydown = true;
          const tween = new TWEEN.Tween(camera.position).to(
            {
              x: cube.position.x,
              y: 8,
              z: 0,
            },
            1000
          );
          tween.onUpdate((object) => {
            camera.position.set(object.x, object.y, object.z);
            light.position.set(object.x, object.y, object.z);
          });
          tween.start();
        }
        break;
      case 's':
        controls.textContent = '';
        if (
          cube.position.x === 0 ||
          cube.position.x === 200 ||
          cube.position.x === 400 ||
          cube.position.x === -200 ||
          cube.position.x === -400 ||
          cube.position.x === -600 ||
          cube.position.x === -800 ||
          cube.position.x === -1000
        ) {
          keydown = true;
          const tween = new TWEEN.Tween(camera.position).to(
            {
              x: cube.position.x,
              y: 8,
              z: 50,
            },
            1000
          );
          tween.onUpdate((object) => {
            camera.position.set(object.x, object.y, object.z);
            light.position.set(object.x, object.y, object.z);
          });
          tween.onComplete(() => {
            keydown = false;
          });
          tween.start();
        }
        break;
      default:
        break;
    }
  });
}
