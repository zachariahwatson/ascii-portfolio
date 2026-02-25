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
          className="flex justify-center relative"
          style={{
            width:
              grid.windowWidth >= queries.xxl
                ? queries.xxl
                : grid.windowWidth >= queries.xl
                  ? queries.xl
                  : grid.windowWidth >= queries.lg
                    ? queries.lg
                    : queries.md,
          }}
        >
          {back && (
            <div className="flex items-end pb-4 absolute left-0 h-full">
              <Link to="/" className="ascii-text">
                <div className="h-8 w-8 pl-4">back</div>
              </Link>
            </div>
          )}
          {children}
        </div>
      </div>
      <div className="h-4 ascii-border-b ascii-b-_ ascii-no-fill overflow-hidden" />
      <div className="h-4 ascii-border-b ascii-b-◡ ascii-no-fill overflow-hidden" />
    </header>
  )
}
