export function draw1stQuadrantArc(CTX, x, y, r, clockwise) {
  console.log("ARC -> ", {x:x,y:y, radius: r, clockwise: clockwise})
  if (clockwise) {
    return CTX.arc(x, y, r, 1.5 * Math.PI, 0,false);
  }
  return CTX.arc(x, y, r, 0, 1.5 * Math.PI, true);
}
export function draw2ndQuadrantArc(CTX, x, y, r, clockwise) {
  console.log("ARC -> ", {x:x,y:y, radius: r, clockwise: clockwise})
  if (clockwise) {
    return CTX.arc(x, y, r, Math.PI, 1.5 * Math.PI, false);
  }
  return CTX.arc(x, y, r, 1.5 * Math.PI, Math.PI, true);
}
export function draw3rdQuadrantArc(CTX, x, y, r, clockwise) {
  console.log("ARC -> ", {x:x,y:y, radius: r, clockwise: clockwise})
  if (clockwise) {
    return CTX.arc(x, y, r, 0.5 * Math.PI, Math.PI, false);
  }
  return CTX.arc(x, y, r, Math.PI, 0.5 * Math.PI, true);
}
export function draw4thQuadrantArc(CTX, x, y, r, clockwise) {
  console.log("ARC -> ", {x:x,y:y, radius: r, clockwise: clockwise})
  if (clockwise) {
    return CTX.arc(x, y, r, 0, 0.5 * Math.PI, false);
  }
  return CTX.arc(x, y, r, 0.5 * Math.PI, 0, true);
}
