import Banner from '@/components/Banner'
import { useGridMediaQueries } from '@/hooks/useGridMediaQueries'
import { createFileRoute } from '@tanstack/react-router'
import { useGridContext } from 'html-to-ascii'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  const grid = useGridContext()
  const queries = useGridMediaQueries(grid)

  return (
    <>
      <Banner back>
        <div className="whitespace-pre ascii-text ascii-no-fill">
          {grid.windowWidth >= queries.lg
            ? String.raw`
         /\      .                         .-.
     _  / |     /                /           /|/|
    (  /  |  . /-.  .-._.)  (---/---        /   |  .-.
     '/.__|_.'/   )(   )(    ) /           /    |./.-'_
 .:' /    | .''--''-'-'  '--':/       .-' /     |(__.'
(__.'     '-'                        (__.'      '.

`
            : grid.windowWidth >= queries.md
              ? String.raw`
   ____                     __    __)
  (, / |   /)              (, /|/|
    /--|  (/_ ___   _/_      /   |   _
 ) /   |_/_) (_)(_(_(__   ) /    |__(/_
(_/                      (_/
`
              : String.raw`
  ___,
 ( / |   /)
  /--|  (/__ _   _/_
_/   |_/_)(_)(_(_(__

`}
        </div>
      </Banner>
      <div className="flex justify-center items-center">
        <div
          className="relative whitespace-pre ascii-text flex flex-row px-8"
          style={{
            width:
              grid.windowWidth >= queries.xxl
                ? queries.xl
                : grid.windowWidth >= 1080
                  ? queries.lg
                  : queries.md,
          }}
        >
          {/* ASCII frame */}
          {String.raw`
   _______________________________
  |\_____________________________/|
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||                             ||
  ||_____________________________||
  '/_____________________________\'
`}
          {/* <img
            src="./portrait.png"
            className="absolute inset-0 w-[37ch] h-full object-cover pl-16"
          /> */}
          <div className="flex-1 pt-8 pl-4 break-keep text-wrap">
            <p className="ascii-text">
              Zachariah "Zach" Watson is a web developer.
            </p>
            <br />
            <p className="ascii-text">
              Zachariah "Zach" Watson is an algorithmic artist.
            </p>
            <br />
            <p className="ascii-text">
              Zachariah "Zach" Watson is a singer-songwriter and producer.
            </p>
            <br />
            <p className="ascii-text">
              Zachariah "Zach" Watson is{' '}
              <span className="ascii-underline ascii-text">not</span>
              {'    '}
              subliminally reinforcing his name in your memory.
            </p>
            <div className="ascii-text whitespace-pre">
              {String.raw`
┏━╸┏━┓┏┓╻╺┳╸┏━┓┏━╸╺┳╸
┃  ┃ ┃┃┗┫ ┃ ┣━┫┃   ┃ 
┗━╸┗━┛╹ ╹ ╹ ╹ ╹┗━╸ ╹
---------------------
`}
            </div>
            <br />
            <div className="flex flex-wrap space-x-8">
              <a
                href="mailto:zachariahwatson@gmail.com"
                className="ascii-text ascii-underline"
              >
                email
              </a>
              <a
                href="https://instagram.com/zchwtsn"
                className="ascii-text ascii-underline"
              >
                instagram
              </a>
              <a
                href="https://x.com/zchwtsn"
                className="ascii-text ascii-underline"
              >
                twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
