import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js'; //https://cdnjs.cloudflare.com/ajax/libs/three.js/0.172.0/three.module.js

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("background") });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);
onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
	//camera.aspect = window.innerWidth / window.innerHeight;
};

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 20, 20);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);
	let x = THREE.MathUtils.randFloatSpread(200);
	let y = THREE.MathUtils.randFloatSpread(100);
	let z = Math.abs(THREE.MathUtils.randFloatSpread(150)) * -1;
    star.position.set(x, y, z);
	star.grow = 0;
    scene.add(star);
    return star;
  }
  
let stars = []; // Array(200).fill().forEach(addStar);
for(let i = 0; i < 200; i++) {
  	stars.push(addStar());
}

//let f = 0;
const animate = () => {
    requestAnimationFrame(animate);
	stars.map(x => {
		if(x.position.z > -100 && x.position.y > 50) {
			x.position.y = -50;
		}
		if(x.position.y > 70) {
			x.position.y = -70;
		}
		x.position.y += 0.1;
		
		// if(x.scale > THREE.Vector(2, 2, 2)){
		// 	x.grow = 0;
		// }
		// if(x.scale < THREE.Vector(0.5, 0.5, 0.5)){
		// 	x.grow = 1;
		// }
		// if(x.grow){
		// 	x.scale(x.scale.x += 0.01, x.scale.y += 0.01, x.scale.z += 0.01);
		// } 
		// else {
		// 	x.scale(x.scale.x -= 0.01, x.scale.y -= 0.01, x.scale.z -= 0.01);
		// }
	});
    renderer.render(scene, camera);
	//f++;
}

// setInterval(() => {
// 	console.log(f);
// 	f = 0;
// }, 1000);

animate();