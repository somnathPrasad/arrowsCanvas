export function drawArrow(id, targetId) {
    const canvasElm = document.querySelector("#canvas");
    if(!canvasElm){
        throw Error("Canvas not founds!!")
        return;
    }
    const ctx = canvasElm.getContext("2d");

    const fromElm = document.querySelector(id);
    const targetElm = document.querySelector(targetId);

    if(!fromElm || !targetElm){
        throw Error("Unable to find Start element or target element. Make sure you passed the correct ids");
        return;
    }

    const start = { x: fromElm.offsetLeft, y: fromElm.offsetTop+(fromElm.offsetHeight/2) };
    const end = { x: targetElm.offsetLeft-175, y: targetElm.offsetTop+(targetElm.offsetHeight/2) };
  
    const x_axis_mid_distance = Math.abs((end.x - start.x) / 2);
  
      if (start.y !== end.y) {
        // the line will have to bend in the middle
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(x_axis_mid_distance, start.y);
        ctx.lineTo(x_axis_mid_distance, end.y);
        ctx.lineTo(end.x, end.y);
      } else {
        // straight line
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
      }
      // drawing arrow head
      ctx.moveTo(end.x-10, end.y-7);
      ctx.lineTo(end.x, end.y);
      ctx.moveTo(end.x-10, end.y+7);
      ctx.lineTo(end.x, end.y);
      ctx.strokeStyle = "#000";
      ctx.stroke();
  }