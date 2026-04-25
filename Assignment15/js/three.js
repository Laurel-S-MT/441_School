var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x00ffff
});
var cube = new THREE.Mesh(geometry, material);


cube.position.x = -4;
cube.position.y = -5;
scene.add(cube);


var sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff});
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);


sphere.position.x = 6;
sphere.position.y = 5;
scene.add(sphere);





camera.position.z = 9;
//camera.position.y = 3;
camera.position.x = 1;

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
cube.rotation.y += 0.01;





    renderer.render( scene, camera );
}
animate();


//GPT help VVV hw example wasnt working for me

// add lighting
function getLight(scene) {
  var light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(20, 50, 20);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);

  return light;
}

function loadModel() {
  var loader = new THREE.OBJLoader();
  

  loader.load(
    
    'models/GLUB_GLUB.obj',
    function (object) {
      object.rotation.z = Math.PI;

      
      object.scale.set(0.5, 0.5, 0.5);
      object.position.set(0, 0, 0);
object.traverse(function(child) {
  if (child.isMesh) {
    child.material = new THREE.MeshBasicMaterial({ color: 0x00ffff});
  }
});
      scene.add(object);
    },
    undefined,
    function (error) {
      console.error('OBJ load error:', error);
    }
  );
}

loadModel();




camera.lookAt(scene.position);


var increment = 0;




//SETTINGS
var text = "aems",
  height = 0.5,
  size = 2,
  curveSegments = 15,
  bevelThickness = 0,
  bevelSize = 0,
  bevelSegments = 0,
  bevelEnabled = true,
  font = undefined;

var rotation = 0;



function loadFont() {
  var loader = new THREE.FontLoader();

  loader.load("fonts/helvetiker_regular.typeface.json", function (res) {
    font = res;
    createText();
    
  });
}

function createText() {
  // change the text here
  textGeo = new THREE.TextGeometry("Behold! Glub Glub!", {
    font: font,
    size: 1,
    height: height,
    curveSegments: curveSegments,
    weight: "normal",
    bevelThickness: bevelThickness,
    bevelSize: bevelSize,
    bevelSegments: bevelSegments,
    bevelEnabled: bevelEnabled
  });
  textGeo.computeBoundingBox();
  textGeo.computeVertexNormals();

  // change the color here
  var color = new THREE.Color(0xffffff);
  var textMaterial = new THREE.MeshBasicMaterial({
    color: color
  });
  var text = new THREE.Mesh(textGeo, textMaterial);
  text.position.x = -textGeo.boundingBox.max.x / 2;
  text.castShadow = true;
  scene.add(text);
}

loadFont();