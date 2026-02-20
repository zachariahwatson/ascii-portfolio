import { useGridContext } from 'html-to-ascii'
import { useRef } from 'react'
import Draggable from 'react-draggable'

interface Props {
  children?: React.ReactNode
  width: number
  height: number
  x: number
  y: number
  name: string
}

export default function LinkCard({
  children,
  width,
  height,
  x,
  y,
  name,
}: Props) {
  const grid = useGridContext()
  const nodeRef = useRef(null)
  return (
    <Draggable
      nodeRef={nodeRef}
      grid={[grid.fontWidth, grid.fontHeight]}
      defaultPosition={{ x, y }}
      handle="strong"
    >
      <div
        ref={nodeRef}
        className="ascii-border ascii-text absolute"
        style={{
          width,
          height,
        }}
      >
        <strong className="pointer-events-auto cursor-grab react-draggable-dragging:cursor-grabbing">
          <div className="w-full h-8 ascii ascii-border-b whitespace-pre flex justify-end px-2 space-x-2">
            <div className="absolute left-5">{name}</div>
            <div>-</div>
            <div>□</div>
            <div>×</div>
          </div>
        </strong>
        <div className="absolute whitespace-pre pl-5 top-4">{children}</div>
      </div>
    </Draggable>
  )
}
