

let canvaselem = typeof document === 'object'
    && document.createElement('canvas'),
    renderingcontext = typeof window === 'object'
    && window.WebGLRenderingContext;

export default Boolean((() => {
  try {
    return renderingcontext &&
      (canvaselem.getContext('webgl') ||
       canvaselem.getContext('experimental-webgl'));
  } catch (e) { return false }
})());
