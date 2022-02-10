const { Clock } = THREE;

const clock = new Clock();
let secCounter = 0;
class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      const delta = clock.getDelta();
      // render a frame
      this.renderer.render(this.scene, this.camera);
      this.tick(delta, secCounter);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick(delta) {
    if (secCounter > 6) secCounter = 0;
    secCounter += delta;
    for (const object of this.updatables) {
      object.tick(delta, secCounter);
    }
  }
}

export { Loop };
