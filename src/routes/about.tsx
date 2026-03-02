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
      <div className="whitespace-pre ascii-text">{String.raw`
   _______________________________________
  |\_____________________________________/|
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||                                     ||
  ||_____________________________________||
  '/_____________________________________\'
`}</div>
      <img src="./portrait.png"></img>
    </>
  )
}
