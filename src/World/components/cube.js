const { BoxGeometry, Mesh, MeshStandardMaterial, MathUtils } = THREE;
function createCube(degToRad) {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshStandardMaterial({ color: "orchid" });
  const cube = new Mesh(geometry, material);
  let radiansPerSecond = MathUtils.degToRad(degToRad);

  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.position.set(0, -1, 0);
  let newPos = new THREE.Vector3(0, 1, 0);
  cube.tick = (delta, secCounter) => {
    if (secCounter < 5) radiansPerSecond = MathUtils.degToRad(50);
    if (secCounter > 5) radiansPerSecond = MathUtils.degToRad(360);
    if (cube.position.y < -1) newPos = new THREE.Vector3(0, 1, 0);
    if (cube.position.y > 1) newPos = new THREE.Vector3(0, -1, 0);
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    cube.position.y += newPos.y / 25;
  };
  return cube;
}

export { createCube };
