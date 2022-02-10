const { Clock } = THREE;

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // render a frame
      this.renderer.render(this.scene, this.camera);
      this.tick();
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    for (const object of this.updatables) {
      object.tick();
    }
  }
}

export { Loop };
