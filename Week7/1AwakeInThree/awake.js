let camera3D, scene, renderer;
let cube, light
let dir = 1;

init3D(); //have to call the setup yourself

function init3D() { //like setup
    scene = new THREE.Scene();
    camera3D = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, -30);
    cube.scale.set(10, 10, 10);
    scene.add(cube);


    light = new THREE.PointLight(0xFF00);
    /* position the light so it shines on the cube (x, y, z) */
    light.position.set(0, 0, 0);
    scene.add(light);
    camera3D.position.z = 5;
    animate();  // have to kickstart the draw-like function
}

function animate() {  //like draw
    requestAnimationFrame(animate);  //call it self, almost recursive
    cube.position.setZ(cube.position.z + dir);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    if (cube.position.z < -100 || cube.position.z > -10) {
        dir = -dir;
    }
    renderer.render(scene, camera3D);
}

//testing 

