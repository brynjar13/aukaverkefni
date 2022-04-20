import * as THREE from 'three';

function makeEarth(scene, camera, renderer) {
  const geometry = new THREE.SphereGeometry(15, 32, 16);
  const texture = new THREE.TextureLoader().load('img/2k_earth_daymap.jpg');
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const earth = new THREE.Mesh(geometry, material);
  earth.position.set(0, 0, 0);
  scene.add(earth);

  const animate = () => {
    requestAnimationFrame(animate);

    earth.rotation.x += 0.01;
    earth.rotation.y += 0.01;

    renderer.render(scene, camera, renderer);
  };
  animate();
}

function makeVenus(scene, camera, renderer) {
  const geometry = new THREE.SphereGeometry(15, 32, 16);
  const texture = new THREE.TextureLoader().load('img/2k_venus_surface.jpg');
  const material = new THREE.MeshStandardMaterial({
    map: texture,
  });
  const venus = new THREE.Mesh(geometry, material);
  venus.position.set(200, 0, 0);
  scene.add(venus);
  const animate = () => {
    requestAnimationFrame(animate);

    venus.rotation.x += 0.01;
    venus.rotation.y += 0.01;

    renderer.render(scene, camera, renderer);
  };
  animate();
}

function makeMercury(scene, camera, renderer) {
  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const texture = new THREE.TextureLoader().load('img/2k_mercury.jpg');
  const material = new THREE.MeshStandardMaterial({
    map: texture,
  });
  const mercury = new THREE.Mesh(geometry, material);
  mercury.position.set(400, 0, 0);
  scene.add(mercury);
  const animate = () => {
    requestAnimationFrame(animate);

    mercury.rotation.x += 0.01;
    mercury.rotation.y += 0.01;

    renderer.render(scene, camera, renderer);
  };
  animate();
}

function makeSun(scene, camera, renderer) {
  const geometry = new THREE.SphereGeometry(60, 32, 16);
  const texture = new THREE.TextureLoader().load('img/2k_sun.jpg');
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const sun = new THREE.Mesh(geometry, material);
  sun.position.set(500, 0, 0);
  scene.add(sun);
}

function makeMars(scene, camera, renderer) {
  const geometry = new THREE.SphereGeometry(12, 32, 16);
  const texture = new THREE.TextureLoader().load('img/2k_mars.jpg');
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const mars = new THREE.Mesh(geometry, material);
  mars.position.set(-200, 0, 0);
  scene.add(mars);
  const animate = () => {
    requestAnimationFrame(animate);

    mars.rotation.x += 0.01;
    mars.rotation.y += 0.01;

    renderer.render(scene, camera, renderer);
  };
  animate();
}

function makeJupiter(scene, camera, renderer) {
  const geometry = new THREE.SphereGeometry(25, 32, 32);
  const texture = new THREE.TextureLoader().load('img/2k_jupiter.jpg');
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const jupiter = new THREE.Mesh(geometry, material);
  jupiter.position.set(-400, 0, 0);
  scene.add(jupiter);
  const animate = () => {
    requestAnimationFrame(animate);

    jupiter.rotation.x += 0.01;
    jupiter.rotation.y += 0.01;

    renderer.render(scene, camera, renderer);
  };
  animate();
}

function makeSaturn(scene, camera, renderer) {
  const ringGeometry = new THREE.TorusGeometry(30, 0.1, 16, 100);
  const saturnRingMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
  });
  const saturnRing = new THREE.Mesh(ringGeometry, saturnRingMaterial);
  saturnRing.rotateX(Math.PI / 2);
  const ringGeometry2 = new THREE.TorusGeometry(32, 0.1, 16, 100);
  const saturnRingMaterial2 = new THREE.MeshStandardMaterial({
    color: 0xffffe0,
  });
  const saturnRing2 = new THREE.Mesh(ringGeometry2, saturnRingMaterial2);
  saturnRing2.rotateX(Math.PI / 2);
  const geometry = new THREE.SphereGeometry(23, 32, 16);
  const texture = new THREE.TextureLoader().load('img/2k_saturn.jpg');
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const saturn = new THREE.Mesh(geometry, material);
  saturn.position.set(-600, 0, 0);
  saturnRing.position.set(-600, 0, 0);
  saturnRing2.position.set(-600, 0, 0);
  scene.add(saturn);
  scene.add(saturnRing);
  scene.add(saturnRing2);
  const animate = () => {
    requestAnimationFrame(animate);

    saturn.rotation.x += 0.01;
    saturn.rotation.y += 0.01;

    renderer.render(scene, camera, renderer);
  };
  animate();
}

function makeUranus(scene, camera, renderer) {
  const geometry = new THREE.SphereGeometry(18, 32, 16);
  const texture = new THREE.TextureLoader().load('img/2k_uranus.jpg');
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const uranus = new THREE.Mesh(geometry, material);
  uranus.position.set(-800, 0, 0);
  scene.add(uranus);
  const animate = () => {
    requestAnimationFrame(animate);

    uranus.rotation.x += 0.01;
    uranus.rotation.y += 0.01;

    renderer.render(scene, camera, renderer);
  };
  animate();
}

function makeNeptune(scene, camera, renderer) {
  const geometry = new THREE.SphereGeometry(17, 32, 16);
  const texture = new THREE.TextureLoader().load('img/2k_neptune.jpg');
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const neptune = new THREE.Mesh(geometry, material);
  neptune.position.set(-1000, 0, 0);
  scene.add(neptune);
  const animate = () => {
    requestAnimationFrame(animate);

    neptune.rotation.x += 0.01;
    neptune.rotation.y += 0.01;

    renderer.render(scene, camera, renderer);
  };
  animate();
}

export function makePlanets(scene, camera, renderer) {
  makeSun(scene, camera, renderer);
  makeMercury(scene, camera, renderer);
  makeVenus(scene, camera, renderer);
  makeEarth(scene, camera, renderer);
  makeMars(scene, camera, renderer);
  makeJupiter(scene, camera, renderer);
  makeSaturn(scene, camera, renderer);
  makeUranus(scene, camera, renderer);
  makeNeptune(scene, camera, renderer);
}
