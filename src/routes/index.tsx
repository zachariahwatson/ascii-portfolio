import LinkCard from '@/components/LinkCard'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useGridContext } from 'html-to-ascii'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

interface cardProps {
  width: number
  height: number
  x: number
  y: number
  name: string
}

function rectRect(
  r1x: number,
  r1y: number,
  r1w: number,
  r1h: number,
  r2x: number,
  r2y: number,
  r2w: number,
  r2h: number,
): boolean {
  return (
    r1x + r1w >= r2x && r1x <= r2x + r2w && r1y + r1h >= r2y && r1y <= r2y + r2h
  )
}

function generateRects(grid: ReturnType<typeof useGridContext>): cardProps[] {
  const baseRects: cardProps[] = [
    {
      width: grid.fontWidth * 34,
      height: grid.fontHeight * 19,
      x: 0,
      y: 0,
      name: 'resume.txt',
    },
    {
      width: grid.fontWidth * 18,
      height: grid.fontHeight * 14,
      x: 0,
      y: 0,
      name: 'me.txt',
    },
    {
      width: grid.fontWidth * 30,
      height: grid.fontHeight * 14,
      x: 0,
      y: 0,
      name: 'art.txt',
    },
    {
      width: grid.fontWidth * 32,
      height: grid.fontHeight * 18,
      x: 0,
      y: 0,
      name: 'work.txt',
    },
  ]

  const placed: cardProps[] = []

  let protection = 0

  while (baseRects.length > 0 && protection < 10000) {
    protection++
    const rect = baseRects.pop()!

    let randX =
      Math.random() * (1200 - rect.width) + (grid.windowWidth / 2 - 600)
    let randY =
      Math.random() * (600 - rect.height) +
      250 /*+ (grid.windowHeight / 2 - 300)*/

    rect.x = Math.round(randX / grid.fontWidth) * grid.fontWidth
    rect.y = Math.round(randY / grid.fontHeight) * grid.fontHeight

    const checkRect = {
      x: rect.x + rect.width / 6,
      y: rect.y + rect.height / 6,
      width: rect.width - rect.width / 3,
      height: rect.height - rect.height / 3,
    }

    let overlap = false

    for (const other of placed) {
      const otherCheck = {
        x: other.x + other.width / 6,
        y: other.y + other.height / 6,
        width: other.width - other.width / 3,
        height: other.height - other.height / 3,
      }

      if (
        rectRect(
          checkRect.x,
          checkRect.y,
          checkRect.width,
          checkRect.height,
          otherCheck.x,
          otherCheck.y,
          otherCheck.width,
          otherCheck.height,
        )
      ) {
        overlap = true
        break
      }
    }

    if (!overlap) placed.push(rect)
    else baseRects.unshift(rect)
  }

  return placed
}

function App() {
  const grid = useGridContext()
  const [rects, setRects] = useState<cardProps[]>([])

  // function to regenerate snapped, non-overlapping rectangles
  const updateRects = () => {
    if (!grid.windowWidth || !grid.windowHeight) return
    const newRects = generateRects(grid)
    setRects(newRects)
  }

  // initial generate
  useEffect(() => {
    updateRects()
  }, [grid.windowWidth, grid.windowHeight]) // also runs when grid dimensions are ready

  // update on window resize
  useEffect(() => {
    const handler = () => updateRects()
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const resumeProps = rects.find((r) => r.name === 'resume.txt')
  const aboutProps = rects.find((r) => r.name === 'me.txt')
  const artProps = rects.find((r) => r.name === 'art.txt')
  const workProps = rects.find((r) => r.name === 'work.txt')

  return (
    <>
      <div className="flex justify-center w-full absolute top-0 left-0">
        <div className="whitespace-pre ascii-text">
          {String.raw`                                                          
      ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
     ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
    ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
   ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
  ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
 ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
            ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
            ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
          ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
         ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
        ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
      `}
        </div>
      </div>
      {/* CV */}
      {resumeProps && (
        <LinkCard {...resumeProps}>
          <Link to="/">
            {String.raw`
   _______________________
 / \                      \
|   |       __  _    _    |
 \_ |      /  )' )  /     |
    |     /     (  /      |
    |    (__/    \/       |
    |                     |
    | ########            |
    |  . ~~~~~~~~~~~~~~~  |
    |  . ~~~~~~~          |
    |  ~~~~~              |
    | ###### ####         |
    |  . ~~~~~~~~~~~      |
    |  ___________________|___
    \_/______________________/   
            `}
          </Link>
        </LinkCard>
      )}

      {/* ABOUT */}
      {aboutProps && (
        <LinkCard {...aboutProps}>
          <Link to="/about">
            {String.raw`
   .''''"".
  /    /   \
  \__/' \   \
  |_  _  '. |
   6| 6   ')/
  | /_     |
   \ _,  / |
    \__.'  |_
    _|     / ''.
  -' \ __-'
            `}
          </Link>
        </LinkCard>
      )}

      {/* ART */}
      {artProps && (
        <LinkCard {...artProps}>
          <Link to="/">
            {String.raw`
             o\
   _________/__\__________
  |                  - (  |
 ,'-.                 . '-|
(____".       ,-.    '   ||
  |          /\,-\   ,-.  |
  |      ,-./     \ /'.-\ |
  |     /-.,\      /     \|
  |    /     \    ,-.     \
  |___/_______\__/___\_____\
            `}
          </Link>
        </LinkCard>
      )}

      {/* WORK  */}
      {workProps && (
        <LinkCard {...workProps}>
          <Link to="/work">
            {String.raw`
                    ________
                   | ______o|
  _______________  ||__---_||
 |  ___________  | | ______ |
 | |           | | ||______||
 | | ~#        | | |--------|
 | |           | | |      O |
 | |           | | |      | |
 | '-----------' | |      | |
 |_____________-_| |      | |
   __/_______\__   |::::::::|
  ________________'-.__
 /:::::::::':::'::\ .\\\---.
/::======::: .:.:::\ \\_)   \
'""""""""""""""""""'  '-----'
            `}
          </Link>
        </LinkCard>
      )}
    </>
  )
}
