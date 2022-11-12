import {
  draw4thQuadrantArc,
  draw1stQuadrantArc,
  draw3rdQuadrantArc,
  draw2ndQuadrantArc,
} from "./drawArc";
import { drawArrowHead } from "./drawArrowHead";

export function drawArrow(id, targetId) {
  const CANVAS = document.querySelector("#canvas");
  const CTX = CANVAS.getContext("2d");
  const START_ELM = document.querySelector(id);
  const END_ELM = document.querySelector(targetId);

  const START = {
    x: START_ELM.offsetLeft,
    y: START_ELM.offsetTop + START_ELM.offsetHeight / 2,
  };
  const END = {
    x: END_ELM.offsetLeft,
    y: END_ELM.offsetTop + END_ELM.offsetHeight / 2,
  };

  if (!CANVAS) {
    throw Error("Canvas not founds!!");
    return;
  }
  if (!START_ELM || !END_ELM) {
    throw Error(
      "Unable to find START element or target element. Make sure you passed the correct ids"
    );
    return;
  }

  let midDistance = (END.x - START.x) / 2;

  let DIRECTION = "LEFT-RIGHT";

  if (midDistance < 0) {
    DIRECTION = "RIGHT-LEFT";
    END.x = END_ELM.offsetLeft;
    START.x = START_ELM.offsetLeft - 175;
  } else {
    END.x = END_ELM.offsetLeft - 175;
  }

  if (START.y === END.y) {
    DIRECTION = "STRAIGHT";
  }

  midDistance = Math.abs(midDistance);

  console.log("START => ", START);
  console.log("END => ", END);
  console.log(midDistance);

  switch (DIRECTION) {
    // line start from left and end to right and line is not straight
    case "LEFT-RIGHT":
      // the line will have to bEND in the middle
      CTX.beginPath();
      CTX.moveTo(START.x, START.y);
      CTX.lineTo(midDistance - 5, START.y);
      if (START.y > END.y) {
        // line have to bend up i.e., turn left;
        draw4thQuadrantArc(CTX, midDistance - 5, START.y - 5, 5, false);
      } else {
        // line have to bend down i.e., turn right;
        draw1stQuadrantArc(CTX, midDistance - 5, START.y + 5, 5, true);
      }
      if (START.y > END.y) {
        CTX.lineTo(midDistance, END.y + 5);
        draw2ndQuadrantArc(CTX, midDistance + 5, END.y + 5, 5, true);
      } else {
        CTX.lineTo(midDistance, END.y - 5);
        draw3rdQuadrantArc(CTX, midDistance + 5, END.y - 5, 5, false);
      }
      CTX.lineTo(END.x, END.y);
      drawArrowHead(CTX, END.x, END.y, true);

      break;

    // line start from right and end to left and line is not straight
    case "RIGHT-LEFT":
      // line have to bEND in the middle
      CTX.beginPath();
      CTX.moveTo(START.x, START.y);
      CTX.lineTo(midDistance + 5, START.y);
      if (START.y > END.y) {
        draw3rdQuadrantArc(CTX, midDistance + 5, START.y - 5, 5, true);
      } else {
        draw2ndQuadrantArc(CTX, midDistance + 5, START.y + 5, 5, false);
      }
      if (START.y > END.y) {
        draw1stQuadrantArc(CTX, midDistance - 5, END.y + 5, 5, false);
      } else {
        draw4thQuadrantArc(CTX, midDistance - 5, END.y - 5, 5, true);
      }
      CTX.lineTo(END.x, END.y);
      drawArrowHead(CTX, END.x, END.y, false);
      break;
    // straight line
    case "STRAIGHT":
      CTX.beginPath();
      CTX.moveTo(START.x, START.y);
      CTX.lineTo(END.x, END.y);

    default:
      break;
  }

  CTX.strokeStyle = "#000";
  CTX.stroke();
}
