export function drawArrowHead(CTX, x, y, pointedToRight = true) {
  if (pointedToRight) {
    CTX.moveTo(x - 10, y - 7);
    CTX.lineTo(x, y);
    CTX.moveTo(x - 10, y + 7);
    CTX.lineTo(x, y);
    return;
  }
  CTX.moveTo(x + 10, y - 7);
  CTX.lineTo(x, y);
  CTX.moveTo(x + 10, y + 7);
  CTX.lineTo(x, y);
}
