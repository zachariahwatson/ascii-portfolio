import Banner from '@/components/Banner'
import WorkCard from '@/components/WorkCard'
import { useGridMediaQueries } from '@/hooks/useGridMediaQueries'
import { createFileRoute } from '@tanstack/react-router'
import { useGridContext } from 'html-to-ascii'

export const Route = createFileRoute('/work')({
  component: RouteComponent,
})

function RouteComponent() {
  const grid = useGridContext()
  const queries = useGridMediaQueries(grid)

  return (
    <div className="flex flex-col h-screen">
      <Banner back>
        <div className="whitespace-pre ascii-text ascii-no-fill">
          {grid.windowWidth >= queries.xl
            ? String.raw`
 _______ _______ _______ _______ 
|\     /|\     /|\     /|\     /|
| '---' | '---' | '---' | '---' |
| |   | | |   | | |   | | |   | |
| |W  | | |O  | | |R  | | |K  | |
| .---. | .---. | .---. | .---. |
|/_____\|/_____\|/_____\|/_____\|
          `
            : String.raw`
 ____ ____ ____ ____ 
||W |||O |||R |||K ||
||__|||__|||__|||__||
|/__\|/__\|/__\|/__\|
          `}
        </div>
      </Banner>
      <div className="flex-1 flex justify-center pt-8 pb-24 border border-amber-600">
        {/* <div className="2xl:w-384 xl:w-7xl lg:w-5xl w-3xl"> */}
        <div
          className="grid lg:grid-cols-2 grid-cols-1 gap-4"
          style={{
            width:
              grid.windowWidth >= queries.xxl
                  ? queries.xl
                  : grid.windowWidth >= queries.lg
                    ? queries.lg
                    : queries.md,
          }}
        >
          <WorkCard>poop</WorkCard>
          <WorkCard>fart</WorkCard>
          <WorkCard>caca</WorkCard>
          <WorkCard>doo doo</WorkCard>
        </div>
      </div>
    </div>
  )
}
