import Banner from '@/components/Banner'
import LinkCard from '@/components/LinkCard'
import { useGridMediaQueries } from '@/hooks/useGridMediaQueries'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useGridContext } from 'html-to-ascii'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

interface cardProps {
  width: number
  height: number
  x: number
  y: number
  zIndex: number
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

function generateRects(
  grid: ReturnType<typeof useGridContext>,
  areaWidth: number,
  logoHeight: number,
): cardProps[] {
  const queries = useGridMediaQueries(grid)

  const baseRects: cardProps[] = [
    {
      width:
        grid.windowWidth >= queries.xxl
          ? grid.fontWidth * 32
          : grid.windowWidth >= queries.xl
            ? grid.fontWidth * 29
            : grid.windowWidth >= queries.md
              ? grid.fontWidth * 26
              : grid.fontWidth * 16,
      height:
        grid.windowWidth >= queries.xxl
          ? grid.fontHeight * 17
          : grid.windowWidth >= queries.xl
            ? grid.fontHeight * 16
            : grid.windowWidth >= queries.md
              ? grid.fontHeight * 14
              : grid.fontHeight * 10,
      x: 0,
      y: 0,
      zIndex: 10,
      name: 'cv.txt',
    },
    {
      width:
        grid.windowWidth >= queries.xxl
          ? grid.fontWidth * 22
          : grid.windowWidth >= queries.xl
            ? grid.fontWidth * 20
            : grid.windowWidth >= queries.md
              ? grid.fontWidth * 18
              : grid.fontWidth * 12,
      height:
        grid.windowWidth >= queries.xxl
          ? grid.fontHeight * 14
          : grid.windowWidth >= queries.xl
            ? grid.fontHeight * 14
            : grid.windowWidth >= queries.md
              ? grid.fontHeight * 13
              : grid.fontHeight * 9,
      x: 0,
      y: 0,
      zIndex: 10,
      name: grid.windowWidth >= queries.md ? 'me.txt' : 'me..',
    },
    {
      width:
        grid.windowWidth >= queries.xxl
          ? grid.fontWidth * 31
          : grid.windowWidth >= queries.xl
            ? grid.fontWidth * 29
            : grid.windowWidth >= queries.md
              ? grid.fontWidth * 25
              : grid.fontWidth * 20,
      height:
        grid.windowWidth >= queries.xxl
          ? grid.fontHeight * 14
          : grid.windowWidth >= queries.xl
            ? grid.fontHeight * 13
            : grid.windowWidth >= queries.md
              ? grid.fontHeight * 12
              : grid.fontHeight * 9,
      x: 0,
      y: 0,
      zIndex: 10,
      name: 'art.txt',
    },
    {
      width:
        grid.windowWidth >= queries.xxl
          ? grid.fontWidth * 32
          : grid.windowWidth >= queries.xl
            ? grid.fontWidth * 29
            : grid.windowWidth >= queries.md
              ? grid.fontWidth * 23
              : grid.fontWidth * 18,
      height:
        grid.windowWidth >= queries.xxl
          ? grid.fontHeight * 16
          : grid.windowWidth >= queries.xl
            ? grid.fontHeight * 15
            : grid.windowWidth >= queries.md
              ? grid.fontHeight * 12
              : grid.fontHeight * 9,
      x: 0,
      y: 0,
      zIndex: 10,
      name: 'work.txt',
    },
  ]

  const placed: cardProps[] = []

  let protection = 0

  let areaHeight = Math.min(
    568,
    grid.windowHeight - logoHeight - grid.fontHeight,
  )

  while (baseRects.length > 0) {
    protection++
    const rect = baseRects.pop()!

    let randX =
      Math.random() * (areaWidth - rect.width) +
      (grid.windowWidth / 2 - areaWidth / 2)
    let randY = Math.random() * (areaHeight - rect.height) + logoHeight

    rect.x = Math.round(randX / grid.fontWidth) * grid.fontWidth
    rect.y = Math.round(randY / grid.fontHeight) * grid.fontHeight

    const checkRect = {
      x: rect.x + rect.width / 10,
      y: rect.y + rect.height / 10,
      width: rect.width - rect.width / 5,
      height: rect.height - rect.height / 5,
    }

    let overlap = false

    for (const other of placed) {
      const otherCheck = {
        x: other.x + other.width / 10,
        y: other.y + other.height / 10,
        width: other.width - other.width / 5,
        height: other.height - other.height / 5,
      }

      const otherCheckTag = {
        x: other.x,
        y: other.y,
        width: other.width / 3,
        height: other.height / 3,
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
        ) ||
        rectRect(
          checkRect.x,
          checkRect.y,
          checkRect.width,
          checkRect.height,
          otherCheckTag.x,
          otherCheckTag.y,
          otherCheckTag.width,
          otherCheckTag.height,
        )
      ) {
        overlap = true
        break
      }
    }

    if (!overlap || protection > 10000) placed.push(rect)
    else baseRects.unshift(rect)
  }

  return placed
}

function App() {
  const grid = useGridContext()
  const [rects, setRects] = useState<cardProps[]>([])
  //const [borderX, setBorderX] = useState(0)
  //const [borderY, setBorderY] = useState(0)
  //const [currentZIndex, setCurrentZIndex] = useState(10)
  const queries = useGridMediaQueries(grid)

  const setStorage = (rects: cardProps[]) => {
    sessionStorage.setItem(
      'rects',
      JSON.stringify({
        rects: rects,
        windowWidth: grid.windowWidth,
        windowHeight: grid.windowHeight,
      }),
    )
  }

  const updateRects = () => {
    if (!grid.windowWidth || !grid.windowHeight) return
    let areaWidth = 0

    if (grid.windowWidth >= queries.xxl) {
      areaWidth = queries.xxl
    } else if (grid.windowWidth >= queries.xl) {
      areaWidth = queries.xl
    } else if (grid.windowWidth >= queries.lg) {
      areaWidth = queries.lg
    } else if (grid.windowWidth >= queries.md) {
      areaWidth = queries.md
    } else if (grid.windowWidth >= 640) {
      areaWidth = 640
    }

    let logoHeight = 0

    if (grid.windowWidth >= queries.xxl) {
      logoHeight = 256 + grid.fontHeight * 3
    } else if (grid.windowWidth >= queries.xl) {
      logoHeight = 192 + grid.fontHeight * 3
    } else {
      logoHeight = 128 + grid.fontHeight * 3
    }

    //setBorderX(grid.windowWidth / 2 - areaWidth / 2)
    //setBorderY(logoHeight - grid.fontHeight)

    const stored = sessionStorage.getItem('rects')

    if (!stored) {
      const newRects = generateRects(grid, areaWidth, logoHeight)
      setRects(newRects)

      setStorage(newRects)
    } else {
      setRects(JSON.parse(stored).rects)
    }
  }

  const moveRect = (name: string, x: number, y: number) => {
    const updatedRects = rects.map((rect) =>
      rect.name === name ? { ...rect, x, y } : rect,
    )
    setRects(updatedRects)
    setStorage(updatedRects)
  }

  // const updateZIndex = (name: string) => {
  //   console.log('updating')
  //   const updatedZIndex = currentZIndex + 1
  //   const updatedRects = rects.map((rect) =>
  //     rect.name === name ? { ...rect, zIndex: updatedZIndex } : rect,
  //   )
  //   setCurrentZIndex(updatedZIndex)
  //   setRects(updatedRects)
  //   setStorage(updatedRects)
  // }

  useEffect(() => {
    if (grid.windowWidth && grid.windowHeight) {
      const raw = sessionStorage.getItem('rects')
      const stored = raw ? JSON.parse(raw) : null

      if (
        stored &&
        (stored.windowWidth !== grid.windowWidth ||
          stored.windowHeight !== grid.windowHeight)
      ) {
        sessionStorage.removeItem('rects')
      }

      updateRects()
    }
  }, [grid.windowWidth, grid.windowHeight])

  // const resumeProps = rects.find((r) => r.name.startsWith('cv'))
  // const aboutProps = rects.find((r) => r.name.startsWith('me'))
  // const artProps = rects.find((r) => r.name.startsWith('art'))
  // const workProps = rects.find((r) => r.name.startsWith('work'))

  const cardData = [
    {
      name: 'cv',
      to: '/',
      content:
        grid.windowWidth >= queries.xxl
          ? String.raw`
   ______________________
 / \        __  _    _   \
|   |      /  )' )  /    |
 \_ |     /     (  /     |
    |    (__/    \/      |
    |                    |
    | ########           |
    |  . ~~~~~~~~~~~~~~~ |
    |  . ~~~~~~~         |
    | ###### ####        |
    |  . ~~~~~~~~~~~     |
    |  __________________|__
    \_/____________________/ 
`
          : grid.windowWidth >= queries.xl
            ? String.raw`
   ____________________
 / \       __  _    _  \
|   |     /  )' )  /   |
 \_ |    /     (  /    |
    |   (__/    \/     |
    |                  |
    | ########         |
    |  . ~~~~~~~~~~~~  |
    |  . ~~~~~~~       |
    | ###### ####      |
    |  ________________|__
    \_/__________________/
`
            : grid.windowWidth >= queries.md
              ? String.raw`
   _________________
 / \     __  _    _ \
|   |   /  )' )  /  |
 \_ |  /     (  /   |
    | (__/    \/    |
    |               |
    | ########      |
    |  . ~~~~~~~~~~ |
    |  _____________|__
    \_/_______________/
`
              : String.raw`
 __________
/\  _. , _ \
\| (__ \/  |
 | . ~~~~~ |
 | ________|_
 \/_________/
`,
    },
    {
      name: 'me',
      to: '/about',
      content:
        grid.windowWidth >= queries.xxl
          ? String.raw`
      _.--’”\
     /   ,__.)
    / -.’   / \
    |/,=. .=.\|
    || 6 , 6 ||
   (q   /_.   p)
    ,\  ._,  /,
    /)\     /(\
      |’...’| 
 _.''’._ v _.’''._
/       '''       \
`
          : grid.windowWidth >= queries.xl
            ? String.raw`
     _.--’”\
    /   ,__.)
   / -.’   / \
   |/,=. .=.\|
   || 6 , 6 ||
  (q   /_.   p)
   ,\  ._,  /,
   /)\     /(\
     |’...’| 
_.''’._ . _.’''._
`
            : grid.windowWidth >= queries.md
              ? String.raw`
    .--"'")
   / ,.-'{ \
   |/_   _\|
   | 6 , 6 |
  (q  /_.  p)
   ,\ ._, /,
   /)\___/(\
   _ |   | _
.-” ’--.--’ ”-.
`
              : String.raw`
 .-''").
 |/"''\|
 d ^L^ b
 )\ -'/(
_.-'-'-._
`,
    },
    {
      name: 'art',
      to: '/',
      content:
        grid.windowWidth >= queries.xxl
          ? String.raw`
             o\
   _________/__\_________
  |       ."_____) ---(  |
 ,'-._               .'"-|
(_____".            '   ||
  |            _.-.      |
  |   _      _/ /  \   _-|
  |__/_\-___/_______\_/  |
  | '  , /|\ ^   .  ,  ^ |
  |_____/_|_\____________|
`
          : grid.windowWidth >= queries.xl
            ? String.raw`
            o\
   ________/__\________
  |     ."_____) ---(  |
 ,'-.              .'"-|
(____".        ._ '   ||
  |   _      _/  \   _-|
  |__/_\.___/_____\_/  |
  | '  , /|\   .  ,  ^ |
  |_____/_|_\__________|
`
            : grid.windowWidth >= queries.md
              ? String.raw`
          o\
  _______/__\_______
 |__    "--'    --(_|
(___".       _  .' ||
 |   _     _/ \   _-|
 |__/_\___/____\_/  |
 | '  , /|\  . ,  ^ |
 |_____/_|_\________|
`
              : String.raw`
  _____/"\_____
 |_   "-'   -(_|
(__".    _. ' '|
 |_,-___/__\_-.|
 |____/|\______|
`,
    },
    {
      name: 'work',
      to: '/work',
      content:
        grid.windowWidth >= queries.xxl
          ? String.raw`
  ________________   _____
 |.--------------.|/|||||||
 ||              || |||||||
 || ~#           || |||||||
 ||              || |||||||
 ||______________|| |||||||
-|______________._| |||||||--
      /__||__   / \ |||||||
   .-' \____/   \_ \|:::::|
  _\______________'-.__
 /:::::::::':::'::\ .\\\---.
/::::====::::.:.:::\ \\_)   \
'=================='  '-----'
`
          : grid.windowWidth >= queries.xl
            ? String.raw`
  ______________   ____
 |.------------.|/||||||
 ||            || ||||||
 || ~#         || ||||||
 ||____________|| ||||||
-|____________._| ||||||--
     /__||__  / \ ||||||
  .-' \____/  \_ \|::::|
  _\____________'-.__
 /::::::::':::':\ .\\\--.
/:::====::::.:.::\ \\_)  \
'================'  '----'
`
            : grid.windowWidth >= queries.md
              ? String.raw`
  __________   ___
 |.--------.|/|||||
 || ~#     || |||||
 ||________|| |||||
-'----,,----' |||||-
   . (__)  / \|:::|
  _/________\._
 /::;;::.:.:\.\)-.
 '==========' '---'
`
              : String.raw`
  _______   __
 |:""""":|/||||
 ||_____|| ||||
-'---_---'\|::|-
 /:;;:.:.\ \D\
 '"""""""'  "'
`,
    },
  ]

  return (
    <>
      {/* <div
        className="2xl:w-384 xl:w-7xl lg:w-5xl w-3xl h-full ascii-border-l ascii-l-( ascii-border-r ascii-r-)  ascii-no-fill absolute top-0"
        style={{ left: borderX }}
      /> */}
      <Banner>
        <Link to="/">
          <div className="whitespace-pre ascii-text ascii-no-fill">
            {grid.windowWidth >= queries.xxl
              ? String.raw`
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
      `
              : grid.windowWidth >= queries.xl
                ? String.raw`
    ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
   ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
  ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
 ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
         ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
        ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
      ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
     ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
      `
                : String.raw`
  ┼┼┼┼┼┼┼┼┼┼┼   ┼┼┼┼┼┼  ┼┼┼┼┼┼
 ┼┼┼┼┼┼┼┼┼┼┼   ┼┼┼┼┼┼  ┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼┼┼   ┼┼┼┼┼┼  ┼┼┼┼┼┼
     ┼┼┼┼┼┼┼┼┼┼┼   ┼┼┼┼┼
    ┼┼┼┼┼┼┼┼┼┼┼   ┼┼┼┼┼
   ┼┼┼┼┼┼┼┼┼┼┼   ┼┼┼┼┼
      `}
          </div>
        </Link>
      </Banner>
      {cardData
        .flatMap(({ name, to, content }) => {
          const rect = rects.find((r) => r.name.startsWith(name))
          return rect ? [{ rect, to, content }] : []
        })
        .sort((a, b) => a!.rect.zIndex - b!.rect.zIndex) // sort by zIndex ascending
        .map(({ rect, to, content }) => (
          <LinkCard
            key={rect.name}
            to={to}
            {...rect}
            onMove={(x, y) => moveRect(rect.name, x, y)}
            //onTouch={() => updateZIndex(rect.name)}
          >
            {content}
          </LinkCard>
        ))}
    </>
  )
}
