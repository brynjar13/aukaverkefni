import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

const planetTitle = document.querySelector('.planet__title');
const planetText = document.querySelector('.section');
const planetAge = document.querySelector('.age');
const planetMass = document.querySelector('.mass');
const planetDistanceToSun = document.querySelector('.distance');
const planetRadius = document.querySelector('.radius');
const planetPopulated = document.querySelector('.populated');
planetText.classList.add('hidden');

function makeEarth(scene, camera, renderer) {
  const geometry = new THREE.SphereGeometry(15, 32, 16);
  const texture = new THREE.TextureLoader().load('img/2k_earth_daymap.jpg');
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const earth = new THREE.Mesh(geometry, material);
  earth.position.set(0, 0, 0);
  scene.add(earth);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'w' && camera.position.x === 0) {
      if (earth.position.z === 0) {
        const tween = new TWEEN.Tween(earth.position).to({
          x: earth.position.x - 20,
          y: 0,
          z: -20,
        });
        tween.onUpdate((object) => {
          earth.position.set(object.x, object.y, object.z);
        });
        tween.onComplete(() => {
          planetText.classList.remove('hidden');
          planetTitle.textContent = 'Earth';
          planetAge.textContent = 'Age: 4.54 billion years';
          planetMass.textContent = 'Mass: 5.972E24 kg';
          planetDistanceToSun.textContent = 'Distance to Sun: 149.600.000 km';
          planetRadius.textContent = 'Radius: 6.371 km';
          planetPopulated.textContent = 'Populated: Yes';
        });
        tween.start();
      }
    }
    if (event.key === 's' && camera.position.x === 0) {
      planetText.classList.add('hidden');
      const tween = new TWEEN.Tween(earth.position).to({
        x: 0,
        y: 0,
        z: 0,
      });
      tween.onUpdate((object) => {
        earth.position.set(object.x, object.y, object.z);
      });
      tween.onComplete(() => {
        planetText.classList.add('hidden');
      });
      tween.start();
    }
  });

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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'w' && camera.position.x === 200) {
      if (venus.position.z === 0) {
        const tween = new TWEEN.Tween(venus.position).to({
          x: venus.position.x - 20,
          y: 0,
          z: -20,
        });
        tween.onUpdate((object) => {
          venus.position.set(object.x, object.y, object.z);
        });
        tween.onComplete(() => {
          planetText.classList.remove('hidden');
          planetTitle.textContent = 'Venus';
          planetAge.textContent = 'Age: 4.6 billion years';
          planetMass.textContent = 'Mass: 4,867E24 kg ';
          planetDistanceToSun.textContent = 'Distance to Sun: 108.000.000 km';
          planetRadius.textContent = 'Radius: 6.051,8 km';
          planetPopulated.textContent = 'Populated: No';
        });
        tween.start();
      }
    }
    if (event.key === 's' && camera.position.x === 200) {
      planetText.classList.add('hidden');
      const tween = new TWEEN.Tween(venus.position).to({
        x: 200,
        y: 0,
        z: 0,
      });
      tween.onUpdate((object) => {
        venus.position.set(object.x, object.y, object.z);
      });
      tween.onComplete(() => {
        planetText.classList.add('hidden');
      });
      tween.start();
    }
  });

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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'w' && camera.position.x === 400) {
      if (mercury.position.z === 0) {
        const tween = new TWEEN.Tween(mercury.position).to({
          x: mercury.position.x - 5,
          y: 5,
          z: -5,
        });
        tween.onUpdate((object) => {
          mercury.position.set(object.x, object.y, object.z);
        });
        tween.onComplete(() => {
          planetText.classList.remove('hidden');
          planetTitle.textContent = 'Mercury';
          planetAge.textContent = 'Age: 4.5 billion years';
          planetMass.textContent = 'Mass: 3,285E23 kg ';
          planetDistanceToSun.textContent = 'Distance to Sun: 57.910.000 km';
          planetRadius.textContent = 'Radius: 2.439,7 km';
          planetPopulated.textContent = 'Populated: No';
        });
        tween.start();
      }
    }
    if (event.key === 's' && camera.position.x === 400) {
      planetText.classList.add('hidden');
      const tween = new TWEEN.Tween(mercury.position).to({
        x: 400,
        y: 0,
        z: 0,
      });
      tween.onUpdate((object) => {
        mercury.position.set(object.x, object.y, object.z);
      });
      tween.onComplete(() => {
        planetText.classList.add('hidden');
      });
      tween.start();
    }
  });

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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'w' && camera.position.x === -200) {
      if (mars.position.z === 0) {
        const tween = new TWEEN.Tween(mars.position).to({
          x: mars.position.x - 20,
          y: 0,
          z: -20,
        });
        tween.onUpdate((object) => {
          mars.position.set(object.x, object.y, object.z);
        });
        tween.onComplete(() => {
          planetText.classList.remove('hidden');
          planetTitle.textContent = 'Mars';
          planetAge.textContent = 'Age: 4.5 billion years';
          planetMass.textContent = 'Mass: 6,39E23 kg ';
          planetDistanceToSun.textContent = 'Distance to Sun: 227.900.000 km';
          planetRadius.textContent = 'Radius: 3.389,5 km';
          planetPopulated.textContent = 'Populated: No';
        });
        tween.start();
      }
    }
    if (event.key === 's' && camera.position.x === -200) {
      planetText.classList.add('hidden');
      const tween = new TWEEN.Tween(mars.position).to({
        x: -200,
        y: 0,
        z: 0,
      });
      tween.onUpdate((object) => {
        mars.position.set(object.x, object.y, object.z);
      });
      tween.onComplete(() => {
        planetText.classList.add('hidden');
      });
      tween.start();
    }
  });

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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'w' && camera.position.x === -400) {
      if (jupiter.position.z === 0) {
        const tween = new TWEEN.Tween(jupiter.position).to({
          x: jupiter.position.x - 20,
          y: 0,
          z: -30,
        });
        tween.onUpdate((object) => {
          jupiter.position.set(object.x, object.y, object.z);
        });
        tween.onComplete(() => {
          planetText.classList.remove('hidden');
          planetTitle.textContent = 'Jupiter';
          planetAge.textContent = 'Age: 4.6 billion years';
          planetMass.textContent = 'Mass: 1,898E27 kg ';
          planetDistanceToSun.textContent = 'Distance to Sun: 778.500.000 km';
          planetRadius.textContent = 'Radius: 69.911 km';
          planetPopulated.textContent = 'Populated: No';
        });
        tween.start();
      }
    }
    if (event.key === 's' && camera.position.x === -400) {
      planetText.classList.add('hidden');
      const tween = new TWEEN.Tween(jupiter.position).to({
        x: -400,
        y: 0,
        z: 0,
      });
      tween.onUpdate((object) => {
        jupiter.position.set(object.x, object.y, object.z);
      });
      tween.onComplete(() => {
        planetText.classList.add('hidden');
      });
      tween.start();
    }
  });

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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'w' && camera.position.x === -600) {
      if (saturn.position.z === 0) {
        const tween = new TWEEN.Tween(saturn.position).to({
          x: saturn.position.x - 20,
          y: 0,
          z: -30,
        });
        tween.onUpdate((object) => {
          saturn.position.set(object.x, object.y, object.z);
          saturnRing.position.set(object.x, object.y, object.z);
          saturnRing2.position.set(object.x, object.y, object.z);
        });
        tween.onComplete(() => {
          planetText.classList.remove('hidden');
          planetTitle.textContent = 'Saturn';
          planetAge.textContent = 'Age: 4.5 billion years';
          planetMass.textContent = 'Mass: 5,683E26 kg ';
          planetDistanceToSun.textContent = 'Distance to Sun: 1.4 billion km';
          planetRadius.textContent = 'Radius: 58.232 km';
          planetPopulated.textContent = 'Populated: No';
        });
        tween.start();
      }
    }
    if (event.key === 's' && camera.position.x === -600) {
      planetText.classList.add('hidden');
      const tween = new TWEEN.Tween(saturn.position).to({
        x: -600,
        y: 0,
        z: 0,
      });
      tween.onUpdate((object) => {
        saturn.position.set(object.x, object.y, object.z);
        saturnRing.position.set(object.x, object.y, object.z);
        saturnRing2.position.set(object.x, object.y, object.z);
      });
      tween.onComplete(() => {
        planetText.classList.add('hidden');
      });
      tween.start();
    }
  });

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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'w' && camera.position.x === -800) {
      if (uranus.position.z === 0) {
        const tween = new TWEEN.Tween(uranus.position).to({
          x: uranus.position.x - 20,
          y: 0,
          z: -20,
        });
        tween.onUpdate((object) => {
          uranus.position.set(object.x, object.y, object.z);
        });
        tween.onComplete(() => {
          planetText.classList.remove('hidden');
          planetTitle.textContent = 'Uranus';
          planetAge.textContent = 'Age: 4.5 billion years';
          planetMass.textContent = 'Mass: 8,681E25 kg ';
          planetDistanceToSun.textContent = 'Distance to Sun: 2.8 billion km';
          planetRadius.textContent = 'Radius: 25.362 km';
          planetPopulated.textContent = 'Populated: No';
        });
        tween.start();
      }
    }
    if (event.key === 's' && camera.position.x === -800) {
      planetText.classList.add('hidden');
      const tween = new TWEEN.Tween(uranus.position).to({
        x: -800,
        y: 0,
        z: 0,
      });
      tween.onUpdate((object) => {
        uranus.position.set(object.x, object.y, object.z);
      });
      tween.onComplete(() => {
        planetText.classList.add('hidden');
      });
      tween.start();
    }
  });

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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'w' && camera.position.x === -1000) {
      if (neptune.position.z === 0) {
        const tween = new TWEEN.Tween(neptune.position).to({
          x: neptune.position.x - 20,
          y: 0,
          z: -20,
        });
        tween.onUpdate((object) => {
          neptune.position.set(object.x, object.y, object.z);
        });
        tween.onComplete(() => {
          planetText.classList.remove('hidden');
          planetTitle.textContent = 'Neptune';
          planetAge.textContent = 'Age: 4.5 billion years';
          planetMass.textContent = 'Mass: 1,024E26 kg';
          planetDistanceToSun.textContent = 'Distance to Sun: 4.5 billion km';
          planetRadius.textContent = 'Radius: 24.622 km';
          planetPopulated.textContent = 'Populated: No';
        });
        tween.start();
      }
    }
    if (event.key === 's' && camera.position.x === -1000) {
      planetText.classList.add('hidden');
      const tween = new TWEEN.Tween(neptune.position).to({
        x: -1000,
        y: 0,
        z: 0,
      });
      tween.onUpdate((object) => {
        neptune.position.set(object.x, object.y, object.z);
      });
      tween.onComplete(() => {
        planetText.classList.add('hidden');
      });
      tween.start();
    }
  });

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
