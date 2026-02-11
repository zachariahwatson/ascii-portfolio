import { createFileRoute } from '@tanstack/react-router'
import { useRef } from 'react'
import Draggable from 'react-draggable'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const nodeRef = useRef(null)

  return (
    <>
      <Draggable nodeRef={nodeRef} handle="strong">
        <div ref={nodeRef} className="ascii-border ascii-text h-64 w-64 m-10">
          <strong className="pointer-events-auto cursor-grab react-draggable-dragging:cursor-grabbing">
            <div className="w-full h-8 ascii-border-b" />
          </strong>
        </div>
      </Draggable>
      <Draggable nodeRef={nodeRef} handle="strong">
        <div ref={nodeRef} className="ascii-border ascii-text h-64 w-64 m-10">
          <strong className="pointer-events-auto cursor-grab react-draggable-dragging:cursor-grabbing">
            <div className="w-full h-8 ascii-border-b" />
          </strong>
        </div>
      </Draggable>
      <Draggable nodeRef={nodeRef} handle="strong">
        <div ref={nodeRef} className="ascii-border ascii-text h-64 w-64 m-10">
          <strong className="pointer-events-auto cursor-grab react-draggable-dragging:cursor-grabbing">
            <div className="w-full h-8 ascii-border-b" />
          </strong>
        </div>
      </Draggable>
    </>
  )
}
