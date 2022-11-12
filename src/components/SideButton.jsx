import { drawArrow, eraseCanvas } from "../utils";

export function SideButton({ id, targetId }) {
  return (
    <div
      id={"button" + id}
      onMouseEnter={() => drawArrow(("#button" + id), ("#button" + targetId))}
      onMouseLeave={eraseCanvas}
      className="border border-white w-fit rounded-md p-3 px-4 my-2 cursor-pointer hover:scale-105 hover:rotate-2"
    >
      <h3>This is item {id}</h3>
    </div>
  );
}
