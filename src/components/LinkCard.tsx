import { Link } from '@tanstack/react-router'
import { useGridContext } from 'html-to-ascii'
import { useRef } from 'react'
import Draggable from 'react-draggable'
import type { DraggableEvent } from 'react-draggable'

interface Props {
  children?: React.ReactNode
  width: number
  height: number
  x: number
  y: number
  zIndex: number
  name: string
  to: string
  onMove: (x: number, y: number) => void
  //onTouch: () => void
}

export default function LinkCard({
  children,
  width,
  height,
  x,
  y,
  zIndex,
  name,
  to,
  onMove,
  //onTouch,
}: Props) {
  const grid = useGridContext()
  const nodeRef = useRef(null)
  //const [isDragging, setIsDragging] = useState(false)

  const handleStop = (_: DraggableEvent, data: { x: number; y: number }) => {
    onMove(data.x, data.y)
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={{ x, y }}
      grid={[grid.fontWidth, grid.fontHeight]}
      onStop={handleStop}
      handle="strong"
    >
      <div
        ref={nodeRef}
        className="ascii-border absolute ascii-shadow-bl"
        style={{
          width,
          height,
          zIndex,
        }}
      >
        <strong className="pointer-events-auto cursor-grab react-draggable-dragging:cursor-grabbing">
          <div className="w-full h-8 ascii ascii-border-b whitespace-pre flex justify-end px-2 space-x-2">
            <div className="absolute left-5 ascii-text ascii-no-fill">
              {name}
            </div>
            <div className="ascii-text ascii-no-fill">-</div>
            <div className="ascii-text ascii-no-fill">□</div>
            <div className="ascii-text ascii-no-fill">×</div>
          </div>
        </strong>
        <div className="absolute whitespace-pre pl-5 top-4">
          <Link className="ascii-text ascii-no-fill" to={to}>
            {children}
          </Link>
        </div>
      </div>
    </Draggable>
  )
}
