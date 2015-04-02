function start() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(2, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    console.log(cube);
    var direction = "right";
    function render() {
        requestAnimationFrame(render);
        cube.rotation.x += 0.1;
        cube.rotation.y += 0.01;

        if(direction==="right") {
            cube.position.x += 0.1;
        } else if(direction==="left") {
            cube.position.x -= 0.1;
        }

        if(cube.position.x > 5) {
            direction = "left";
        } else if(cube.position.x < -5) {
            direction = "right";
        }

        renderer.render(scene, camera);
    }
    render();
}
