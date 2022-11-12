export function drawArrow(id, targetId) {
  const canvasElm = document.querySelector("#canvas");
  if (!canvasElm) {
    throw Error("Canvas not founds!!");
    return;
  }
  const ctx = canvasElm.getContext("2d");

  const fromElm = document.querySelector(id);
  const targetElm = document.querySelector(targetId);

  if (!fromElm || !targetElm) {
    throw Error(
      "Unable to find Start element or target element. Make sure you passed the correct ids"
    );
    return;
  }

  const start = {
    x: fromElm.offsetLeft,
    y: fromElm.offsetTop + fromElm.offsetHeight / 2,
  };
  const end = {
    x: targetElm.offsetLeft - 175,
    y: targetElm.offsetTop + targetElm.offsetHeight / 2,
  };

  let x_axis_mid_distance = (end.x - start.x) / 2;
  let DIRECTION = "LEFT-RIGHT";
  if (x_axis_mid_distance < 0) {
    DIRECTION = "RIGHT-LEFT";
    end.x = targetElm.offsetLeft;
    start.x = fromElm.offsetLeft-175;
  }
  x_axis_mid_distance = Math.abs(x_axis_mid_distance);

  switch (DIRECTION) {
    case "LEFT-RIGHT":
      if (start.y !== end.y) {
        // the line will have to bend in the middle
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(x_axis_mid_distance - 5, start.y);
        ctx.arc(x_axis_mid_distance - 5,start.y - 5,5,0.5 * Math.PI,0,true);
        ctx.lineTo(x_axis_mid_distance, end.y + 5);
        ctx.arc(x_axis_mid_distance + 5,end.y,5,Math.PI,1.5 * Math.PI,false);
        ctx.lineTo(end.x, end.y);
      } else {
        // straight line
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
      }
      // drawing arrow head
      ctx.moveTo(end.x - 10, end.y - 7);
      ctx.lineTo(end.x, end.y);
      ctx.moveTo(end.x - 10, end.y + 7);
      ctx.lineTo(end.x, end.y);
      ctx.strokeStyle = "#000";
      ctx.stroke();
      break;
    case "RIGHT-LEFT":
      if(start.y !== end.y){
        // line have to bend in the middle
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(x_axis_mid_distance + 5, start.y);
        ctx.arc(x_axis_mid_distance + 5, start.y + 5, 5, 1.5 * Math.PI, Math.PI, true);
        ctx.lineTo(x_axis_mid_distance, end.y - 5);
        ctx.arc(x_axis_mid_distance - 5, end.y -5, 5 , 0, 0.5 * Math.PI,false);
        ctx.lineTo(end.x, end.y);
      }else{
        // straight line
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
      }
      ctx.moveTo(end.x + 10, end.y - 7);
      ctx.lineTo(end.x, end.y);
      ctx.moveTo(end.x + 10, end.y + 7);
      ctx.lineTo(end.x, end.y);
      ctx.strokeStyle = "#000";
      ctx.stroke();
    default:
      break;
  }
}
