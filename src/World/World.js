import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";

import { Loop } from "./systems/Loop.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);

    container.append(renderer.domElement);

    const cube = createCube();
    const [Alight, Dlight] = createLights();

    loop.updatables.push(cube);
    scene.add(cube, Alight, Dlight);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }

  tick() {
    for (object in loop.updatables) {
      object.tick();
    }
  }
}

export { World };
