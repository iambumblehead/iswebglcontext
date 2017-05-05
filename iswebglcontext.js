
const isweglcontext = module.exports = (() => {

  let canvaselem = typeof document === 'object'
        && document.createElement('canvas'),
      renderingcontext = typeof window === 'object'
        && window.WebGLRenderingContext;
  
  return Boolean(
    (() => {
      try {
        return renderingcontext &&
          (canvaselem.getContext('webgl') ||
           canvaselem.getContext('experimental-webgl'));
      } catch (e) {}
    })());
  
})();
