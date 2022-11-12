import { useEffect } from "react";
import "./App.css";
import { SideButton, SidePane } from "./components";

function App() {
  
  useEffect(() => {
    if (window && document) {
      const canvasElm = document.querySelector("#canvas");
      const LEFT_PANE_WIDTH = document.querySelector("#leftPane").offsetWidth;
      const RIGHT_PANE_WIDTH = document.querySelector("#rightPane").offsetWidth;

      // Give canvas the remaining middle space
      canvasElm.width = window.innerWidth - LEFT_PANE_WIDTH - RIGHT_PANE_WIDTH;
      canvasElm.height = window.innerHeight;
    }
  }, [window, document]);

  return (
    <div className="h-screen w-full text-black flex">
      <SidePane id="leftPane">
        <SideButton id="1" targetId="7" />
        <SideButton id="2" targetId="6" />
        <SideButton id="3" targetId="6" />
        <SideButton id="4" targetId="6" />
        <SideButton id="5" targetId="6" />
      </SidePane>
      <canvas id="canvas" className="m-auto bottom-0"></canvas>
      <SidePane id="rightPane" pos="right">
        <SideButton id="6" targetId="5" />
        <SideButton id="7" targetId="1" />
      </SidePane>
    </div>
  );
}

export default App;
