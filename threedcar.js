const scene = new THREE.Scene()
const thaw = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(thaw)
const thawdirection = new THREE.DirectionalLight(0xffffff, 0.6)
thawdirection.position.set(-100, 35, 70)
scene.add(thawdirection)

// setting up camera
const aspectRatio = window.innerWidth / window.innerHeight
const cameraWidth = 150;
const cameraHeight = cameraWidth / aspectRatio;
const camera = new THREE.OrthographicCamera(
  cameraWidth / -2, // left
  cameraWidth / 2, // right
  cameraHeight / 2, // top
  cameraHeight / -2, // bottom
  0,
  1000
);
camera.position.set(-100, 300, 900)
camera.lookAt(0, 10, 0)

// set up renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// building a city
function createCity() {
  const city = new THREE.Group();  // Corrected from THREE.group() to THREE.Group()
  const street = new THREE.Mesh(
    new THREE.BoxBufferGeometry(90, 1, 25),
    new THREE.MeshLambertMaterial({ color: 0x808080 })
  )
  street.position.x = 4;
  street.position.y = -4;
  street.position.z = 7;
  city.add(street);
  const partere = new THREE.Mesh(
    new THREE.BoxBufferGeometry(300, 1, 300),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  )
  partere.position.set(0, -5, -30);
  city.add(partere);
  const street2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(10, 1, 140),
    new THREE.MeshLambertMaterial({ color: 0x808080 })
  )
  street2.position.x = -37;
  street2.position.y = -4;
  street2.position.z = -50.5;
  city.add(street2);
  const rond = new THREE.Mesh(
    new THREE.CylinderGeometry(3.5, 3.5, 4, 10), // Creates a cylinder with radius 5 and height 20
    new THREE.MeshLambertMaterial({ color: 0x89858480 })
  );
  rond.position.set(42.5, -4.5, 9);
  rond.rotation.x = Math.PI / 18; // Optional: Rotate the cylinder to align it horizontally
  city.add(rond);
  const rond2 = new THREE.Mesh(
    new THREE.CylinderGeometry(3.5, 3.5, 4, 10), // Creates a cylinder with radius 5 and height 20
    new THREE.MeshLambertMaterial({ color: 0x89858480 })
  );
  rond2.position.set(-36, -4.5, 9);
  rond2.rotation.x = Math.PI / 18; // Optional: Rotate the cylinder to align it horizontally
  city.add(rond2);
  const sun = new THREE.Mesh(
    new THREE.IcosahedronGeometry(7, 7, 7),
    new THREE.MeshLambertMaterial({ color: 0xffff00 })
  )
  sun.position.x = 65;
  sun.position.y = 33;
  sun.position.z = -5;
  scene.add(sun);

  const street3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(10, 1, 140),
    new THREE.MeshLambertMaterial({ color: 0x808080 })
  )
  street3.position.x = 45;
  street3.position.y = -4;
  street3.position.z = -50.5;
  city.add(street3);
  const box1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(18, 20, 19),
    new THREE.MeshLambertMaterial({ color: 0xffb6c1 })
  )
  box1.position.set(4, 0, -22);
  city.add(box1);
  const pyramidGeometry = new THREE.ConeGeometry(13, 10, 4, 1); // 4 radial segments for a pyramid shape
  const pyramidMaterial = new THREE.MeshLambertMaterial({ color: 0xd2b48c });
  const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);

  // Adjust the pyramid's position
  pyramid.position.set(29, 14.8, -22.5);
  pyramid.rotation.y = Math.PI / 4;
  // Add the pyramid to the scene
  city.add(pyramid);
  const pyramiddGeometry = new THREE.ConeGeometry(13, 10, 4, 1); // 4 radial segments for a pyramid shape
  const pyramiddMaterial = new THREE.MeshLambertMaterial({ color: 0x90EE90 });
  const pyramidd = new THREE.Mesh(pyramidGeometry, pyramidMaterial);

  // Adjust the pyramid's position
  pyramidd.position.set(4, 14.8, -22.5);
  pyramidd.rotation.y = Math.PI / 4;
  // Add the pyramid to the scene
  city.add(pyramidd);
  const pyramidddGeometry = new THREE.ConeGeometry(13, 10, 4, 1); // 4 radial segments for a pyramid shape
  const pyramidddMaterial = new THREE.MeshLambertMaterial({ color: 0x90EE90 });
  const pyramiddd = new THREE.Mesh(pyramidGeometry, pyramidMaterial);

  // Adjust the pyramid's position
  pyramiddd.position.set(-20, 14.8, -22.5);
  pyramiddd.rotation.y = Math.PI / 4;
  // Add the pyramid to the scene
  city.add(pyramiddd);
  const box3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(18, 20, 19),
    new THREE.MeshLambertMaterial({ color: 0xffd700 })
  )
  box3.position.set(-20, 0, -22);
  city.add(box3);
  const pieton = new THREE.Mesh(
    new THREE.BoxBufferGeometry(12, 1, 3),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  )
  pieton.position.set(-10, -3.9, 8);
  city.add(pieton);
  const pieton2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(12, 1, 3),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  )
  pieton2.position.set(15, -3.9, 8);
  city.add(pieton2);
  const pieton3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1.5, 1, 17),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  )
  pieton3.position.set(45, -3.9, -20);
  city.add(pieton3);
  const box2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(18, 20, 19),
    new THREE.MeshLambertMaterial({ color: 0xADD8E6 })
  )
  box2.position.set(29, 0, -22);
  city.add(box2);
  const pieton4 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1.5, 1, 17),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  )
  pieton4.position.set(-37, -3.9, -20);
  city.add(pieton4);
  const partere2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(30, 1, 70),
    new THREE.MeshLambertMaterial({ color: 0x00ff00 })
  )
  partere2.position.set(-59, -4.5, -13);
  city.add(partere2);
  const branch = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 11, 5),
    new THREE.MeshLambertMaterial({ color: 0x8B4513 })
  )
  branch.position.set(-48, -3, -33);
  city.add(branch);
  const arbre = new THREE.Mesh(
    new THREE.IcosahedronGeometry(3, 3, 3),
    new THREE.MeshLambertMaterial({ color: 0x006400 })
  )
  arbre.position.set(-48, 3.6, -33);
  city.add(arbre);
  const branch2 = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 11, 5),
    new THREE.MeshLambertMaterial({ color: 0x8B4513 })
  )
  branch2.position.set(-48, -3, 16);
  city.add(branch2);
  const arbre2 = new THREE.Mesh(
    new THREE.IcosahedronGeometry(3, 3, 3),
    new THREE.MeshLambertMaterial({ color: 0x006400 })
  )
  arbre2.position.set(-48, 3.6, 16);
  city.add(arbre2);
  const door = new THREE.Mesh(
    new THREE.BoxBufferGeometry(4, 7, 3),
    new THREE.MeshLambertMaterial({ color: 0x8B4513 })
  )
  door.position.set(29, 0, -13);
  city.add(door);
  const door2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(4, 7, 3),
    new THREE.MeshLambertMaterial({ color: 0x8B4513 })
  )
  door2.position.set(4, 0, -13);
  city.add(door2);
  const door3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(4, 7, 3),
    new THREE.MeshLambertMaterial({ color: 0x8B4513 })
  )
  door3.position.set(-20, 0, -13);
  city.add(door3);
  const box4 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(18, 20, 19),
    new THREE.MeshLambertMaterial({ color: 0xffa500 })
  )
  box4.position.set(-63.5, 1, 0);
  city.add(box4);
  const pyramiddddGeometry = new THREE.ConeGeometry(13, 10, 4, 1); // 4 radial segments for a pyramid shape
  const pyramiddddMaterial = new THREE.MeshLambertMaterial({ color: 0x90EE90 });
  const pyramidddd = new THREE.Mesh(pyramidGeometry, pyramidMaterial);

  // Adjust the pyramid's position
  pyramidddd.position.set(-63.5, 16, 0);
  pyramidddd.rotation.y = Math.PI / 4;
  // Add the pyramid to the scene
  city.add(pyramidddd);
 
  const sky = new THREE.Mesh(
    new THREE.BoxBufferGeometry(200, 100, 1),
    new THREE.MeshLambertMaterial({ color: 0xADD8E6 })
  )
  sky.position.set(0, 0, -35);
  city.add(sky);
  return city;
}
const city = createCity();
scene.add(city);

// Rendering the scene after everything is added
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
