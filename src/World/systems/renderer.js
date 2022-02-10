const { WebGLRenderer } = THREE;

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: false });

  // turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
