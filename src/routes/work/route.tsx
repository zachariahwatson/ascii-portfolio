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
| |W  | | |O  | | |R  | | |K  | |
| |   | | |   | | |   | | |   | |
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
      <div className="flex-1 flex justify-center pt-8 pb-24">
        {/* <div className="2xl:w-384 xl:w-7xl lg:w-5xl w-3xl"> */}

        <div
          className="grid lg:grid-cols-2 grid-cols-1 gap-8 place-content-center p-4"
          style={{
            width:
              grid.windowWidth >= queries.xxl
                ? queries.xl
                : grid.windowWidth >= queries.md
                  ? queries.lg
                  : queries.md,
          }}
        >
          <WorkCard
            desc="html-to-ascii is a React component that dynamically converts an HTML page into pure, selectable, ASCII text. (Hey, this website looks an awful lot like ASCII!)"
            tags="#react #vite"
            github="https://github.com/zachariahwatson/html-to-ascii"
          >
            {grid.windowWidth >= queries.lg ? (
              <div className="flex justify-center h-20 border ascii-border-b ascii-no-fill">
                <div className="whitespace-pre border ascii-text ascii-no-fill">
                  {String.raw`
 ⣇⡀ ⣰⡀ ⣀⣀  ⡇    ⣰⡀ ⢀⡀    ⢀⣀ ⢀⣀ ⢀⣀ ⠄ ⠄
 ⠇⠸ ⠘⠤ ⠇⠇⠇ ⠣ ⠉⠉ ⠘⠤ ⠣⠜ ⠉⠉ ⠣⠼ ⠭⠕ ⠣⠤ ⠇ ⠇
`}
                </div>
              </div>
            ) : (
              <div className="flex justify-center h-16 border ascii">
                <div className="whitespace-pre border ascii-text ascii-no-fill pt-3">
                  html-to-ascii
                </div>
              </div>
            )}
          </WorkCard>
          <WorkCard
            desc="thispage is a web app that helps book clubs synchronize their readings. It automatically increments reading goals once all members have completed them, features spoiler-protected discussions, and allows clubs to run polls to choose their next book."
            tags="#nextjs #supabase #rls #zod #resend"
            website="https://thispa.ge/"
            websiteLabel="thispa.ge"
            github="https://github.com/zachariahwatson/thispage"
          >
            {grid.windowWidth >= queries.lg ? (
              <div className="flex justify-center h-20 border ascii">
                <div className="whitespace-pre border ascii-text ascii-no-fill">
                  {String.raw`      
_|_ |_  o  _ ._   _.  _   _
 |_ | | | _> |_) (_| (_| (/_
             |        _|
`}
                </div>
              </div>
            ) : (
              <div className="flex justify-center h-16 border ascii">
                <div className="whitespace-pre border ascii-text ascii-no-fill pt-3">
                  thispage
                </div>
              </div>
            )}
          </WorkCard>
          <WorkCard
            desc="FORMATIC FOBS was an interactive art exhibit during Art Blocks Marfa Weekend 2024 in Marfa, TX. Visitors would customize a UFO keychain in real-time using a MIDI controller and have it 3D-printed on the fly."
            tags="#nextjs #threejs #node #serialport #webmidi"
            github="https://github.com/zachariahwatson/formatic-fobs"
          >
            {grid.windowWidth >= queries.lg ? (
              <div className="flex justify-center h-20 border ascii">
                <div className="whitespace-pre border -m-4 ascii-text ascii-no-fill">
                  {String.raw`
 ___ __  __       _ ____  _   __ _  _  __
(_  /  )/__)/|/| /_| /  // ) |_ / \|_)(_
/  (__// ( /   |(  |(  ((__  |  \_/|_)__)
`}
                </div>
              </div>
            ) : (
              <div className="flex justify-center h-16 border ascii">
                <div className="whitespace-pre border ascii-text ascii-no-fill pt-3">
                  FORMATIC FOBS
                </div>
              </div>
            )}
          </WorkCard>
          <WorkCard
            desc="Arcadia is a long-form generative art project hosted on Art Blocks that generated 256 unique digital art pieces from a single algorithm during a 30 minute Dutch formatted auction."
            tags="#p5js #webgl #glsl"
            website="https://www.artblocks.io/collection/arcadia-by-zachariah-watson"
            websiteLabel="artblocks.io"
          >
            {grid.windowWidth >= queries.lg ? (
              <div className="flex justify-center h-20 border ascii">
                <div className="whitespace-pre border -m-4 ascii-text ascii-no-fill">
                  {String.raw`
  __    ___   ___    __    ___   _    __
 / /\  | |_) / / \  / /\  | | \ | |  / /\
/_/--\ |_| \ \_\_, /_/--\ |_|_/ |_| /_/--\
`}
                </div>
              </div>
            ) : (
              <div className="flex justify-center h-16 border ascii">
                <div className="whitespace-pre border ascii-text ascii-no-fill pt-3">
                  Arcadia
                </div>
              </div>
            )}
          </WorkCard>
        </div>
      </div>
    </div>
  )
}
