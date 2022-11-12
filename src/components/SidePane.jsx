export function SidePane({ children, id }) {
  return (
    <div id={id} className="border w-fit h-full px-3 py-2 min-w-fit">
      {children}
    </div>
  )
}
