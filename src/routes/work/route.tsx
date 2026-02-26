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
          className="grid lg:grid-cols-2 grid-cols-1 gap-8 place-content-center p-4"
          style={{
            width:
              grid.windowWidth >= queries.xxl
                ? queries.xl
                : grid.windowWidth >= queries.lg
                  ? queries.lg
                  : queries.md,
          }}
        >
          <WorkCard
            desc="html-to-ascii is a React component that dynamically converts an HTML page into pure, selectable, ASCII text."
            github="https://github.com/zachariahwatson/html-to-ascii"
          >
            <div className="flex justify-center h-20 border ascii">
              <div className="whitespace-pre border">
                {String.raw`
 ⣇⡀ ⣰⡀ ⣀⣀  ⡇    ⣰⡀ ⢀⡀    ⢀⣀ ⢀⣀ ⢀⣀ ⠄ ⠄
 ⠇⠸ ⠘⠤ ⠇⠇⠇ ⠣ ⠉⠉ ⠘⠤ ⠣⠜ ⠉⠉ ⠣⠼ ⠭⠕ ⠣⠤ ⠇ ⠇
            `}
              </div>
            </div>
          </WorkCard>
          <WorkCard
            desc="test"
            website="https://thispa.ge/"
            websiteLabel="thispa.ge"
            github="https://github.com/zachariahwatson/thispage"
          >
            <div className="flex justify-center h-20 border ascii">
              <div className="whitespace-pre border">
                {String.raw`      
_|_ |_  o  _ ._   _.  _   _
 |_ | | | _> |_) (_| (_| (/_
             |        _|
            `}
              </div>
            </div>
          </WorkCard>
          <WorkCard
            desc="test"
            github="https://github.com/zachariahwatson/formatic-fobs"
          >
            <div className="flex justify-center h-20 border ascii">
              <div className="whitespace-pre border -m-4">
                {String.raw`
 ___ __  __       _ ____  _   __ _  _  __
(_  /  )/__)/|/| /_| /  // ) |_ / \|_)(_
/  (__// ( /   |(  |(  ((__  |  \_/|_)__)
            `}
              </div>
            </div>
          </WorkCard>
          <WorkCard
            desc="test"
            website="https://www.artblocks.io/collection/arcadia-by-zachariah-watson"
            websiteLabel="artblocks.io"
          >
            <div className="flex justify-center h-20 border ascii">
              <div className="whitespace-pre border -m-4">
                {String.raw`
  __    ___   ___    __    ___   _    __
 / /\  | |_) / / \  / /\  | | \ | |  / /\
/_/--\ |_| \ \_\_, /_/--\ |_|_/ |_| /_/--\
            `}
              </div>
            </div>
          </WorkCard>
        </div>
      </div>
    </div>
  )
}
