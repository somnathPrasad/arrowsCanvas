export function eraseCanvas() {
  const canvasElm = document.querySelector("#canvas");
  const ctx = canvasElm.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
