const { DirectionalLight, AmbientLight } = THREE;

function createLights() {
  // Create a directional light
  const Dlight = new DirectionalLight("white", 8);
  const Alight = new AmbientLight(0x404040);
  Alight.intensity = 10;
  // move the light right, up, and towards us
  Dlight.position.set(-5, 5, 2);
  Dlight.intensity = 3;
  return [Alight, Dlight];
}

export { createLights };
