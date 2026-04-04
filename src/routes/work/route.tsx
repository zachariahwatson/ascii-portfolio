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
    <div className="flex flex-col">
      <Banner back>
        <div className="whitespace-pre ascii-text ascii-no-fill">
          {grid.windowWidth >= queries.lg
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
          className="grid min-[1204px]:grid-cols-2 grid-cols-1 gap-8 place-content-center p-4 ascii-parent max-[1204px]:max-w-2xl max-md:max-w-xl break-keep"
          style={{
            width:
              grid.windowWidth >= queries.xxl
                ? queries.xl
                : grid.windowWidth >= 1204
                  ? queries.lg
                  : queries.md,
          }}
        >
          <WorkCard
            desc="html-to-ascii is a React component that dynamically converts an HTML page into pure, selectable, ASCII text. (Hey, this website looks an awful lot like ASCII!)"
            tags="#react #vite"
            github="https://github.com/zachariahwatson/html-to-ascii"
          >
            {grid.windowWidth >= 520 ? (
              <div className="flex justify-center items-center h-28 ascii-border-b ascii-no-fill">
                <div className="whitespace-pre ascii-text ascii-no-fill pt-4">
                  {String.raw`
 ⣇⡀ ⣰⡀ ⣀⣀  ⡇    ⣰⡀ ⢀⡀    ⢀⣀ ⢀⣀ ⢀⣀ ⠄ ⠄
 ⠇⠸ ⠘⠤ ⠇⠇⠇ ⠣ ⠉⠉ ⠘⠤ ⠣⠜ ⠉⠉ ⠣⠼ ⠭⠕ ⠣⠤ ⠇ ⠇
`}
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center h-12 ascii">
                <div className="whitespace-pre ascii-text ascii-no-fill pt-4">
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
            websiteWidth={132}
            github="https://github.com/zachariahwatson/thispage"
          >
            {grid.windowWidth >= 520 ? (
              <div className="flex justify-center items-center h-28 ascii-border-b ascii-no-fill">
                <div className="whitespace-pre ascii-text ascii-no-fill pt-4">
                  {String.raw`      
_|_ |_  o  _ ._   _.  _   _
 |_ | | | _> |_) (_| (_| (/_
             |        _|
`}
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center h-12 ascii-border-b">
                <div className="whitespace-pre ascii-text ascii-no-fill pt-4">
                  thispage
                </div>
              </div>
            )}
          </WorkCard>
          <WorkCard
            desc="FORMATIC FOBS was an interactive art exhibit during Art Blocks Marfa Weekend 2024 in Marfa, TX. Visitors would customize a UFO keychain in real-time using a MIDI controller and have it 3D printed on the fly."
            tags="#nextjs #threejs #serialport #webmidi #redis #bullmq"
            github="https://github.com/zachariahwatson/formatic-fobs"
          >
            {grid.windowWidth >= 520 ? (
              <div className="flex justify-center items-center h-28 ascii-border-b ascii-no-fill">
                <div className="whitespace-pre -mt-4 ascii-text ascii-no-fill pb-1">
                  {String.raw`
 ___ __  __       _ ____  _   __ _  _  __
(_  /  )/__)/|/| /_| /  // ) |_ / \|_)(_
/  (__// ( /   |(  |(  ((__  |  \_/|_)__)
`}
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center h-12 ascii">
                <div className="whitespace-pre ascii-text ascii-no-fill pt-8">
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
            websiteWidth={160}
          >
            {grid.windowWidth >= 520 ? (
              <div className="flex justify-center items-center h-28 ascii-border-b ascii-no-fill">
                <div className="whitespace-pre ascii-text ascii-no-fill pb-4">
                  {String.raw`
  __    ___   ___    __    ___   _    __
 / /\  | |_) / / \  / /\  | | \ | |  / /\
/_/--\ |_| \ \_\_, /_/--\ |_|_/ |_| /_/--\
`}
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center h-12 ascii">
                <div className="whitespace-pre ascii-text ascii-no-fill pt-8">
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
