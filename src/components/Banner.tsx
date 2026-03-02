import { useGridMediaQueries } from '@/hooks/useGridMediaQueries'
import { Link } from '@tanstack/react-router'
import { useGridContext } from 'html-to-ascii'

export default function Banner({
  children,
  back = false,
}: {
  children: React.ReactNode
  back?: boolean
}) {
  const grid = useGridContext()
  const queries = useGridMediaQueries(grid)

  return (
    <header>
      <div className="flex justify-center">
        <div
          className="flex justify-center relative pt-4"
          style={{
            width:
              grid.windowWidth >= queries.xxl
                ? queries.xl
                : grid.windowWidth >= queries.lg
                  ? queries.lg
                  : queries.md,
          }}
        >
          {back && (
            <div className="flex items-center pb-4 absolute left-0 h-full">
              <Link to="/">
                <div className="h-8 w-16 pl-4 pt-8 ascii-text ascii-underline whitespace-pre">
                  {grid.windowWidth >= queries.md ? '← back' : 'back'}
                </div>
              </Link>
            </div>
          )}
          {children}
        </div>
      </div>
      <div className="h-4 -mt-2 -mx-2 ascii-border-b ascii-b-_ ascii-no-fill overflow-hidden" />
      <div className="h-4 -mx-2 ascii-border-b ascii-b-◡ ascii-no-fill overflow-hidden" />
    </header>
  )
}
