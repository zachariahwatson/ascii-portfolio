import { Link } from '@tanstack/react-router'
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
  const nodeRef = useRef(null)
  //const [isDragging, setIsDragging] = useState(false)

  const handleStop = (_: DraggableEvent, data: { x: number; y: number }) => {
    onMove(data.x, data.y)
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={{ x, y }}
      //grid={[grid.fontWidth, grid.fontHeight]}
      onStop={handleStop}
      handle="strong"
    >
      <div
        ref={nodeRef}
        className="ascii-border absolute ascii-shadow-bl ascii-parent"
        style={{
          width,
          height,
          zIndex,
        }}
      >
        <strong className="pointer-events-auto cursor-grab active:cursor-grabbing absolute w-full h-14 -top-[1ch]"></strong>
        <div className="w-full h-12 ascii ascii-border-b flex justify-end px-2 space-x-2">
          <div className="absolute left-6 top-8 ascii-text ascii-no-fill">
            {name}
          </div>
          <div className="absolute top-8 ascii-text ascii-no-fill">- □ ×</div>
        </div>
        <div className="absolute whitespace-pre top-12">
          {to.startsWith('/') ? (
            <Link to={to}>
              <div className="pl-6 ascii-text ascii-no-fill">{children}</div>
            </Link>
          ) : (
            <a href={to} target="_blank">
              <div className="pl-6 ascii-text ascii-no-fill">{children}</div>
            </a>
          )}
        </div>
      </div>
    </Draggable>
  )
}
