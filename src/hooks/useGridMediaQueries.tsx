import type { GridData } from 'node_modules/html-to-ascii/dist/types/GridData'

export const useGridMediaQueries = (grid: GridData) => {
  let xxl = 90 * grid.fontHeight
  xxl = xxl - (xxl % grid.fontWidth)

  let xl = 80 * grid.fontHeight
  xl = xl - (xl % grid.fontWidth)

  let lg = 64 * grid.fontHeight
  lg = lg - (lg % grid.fontWidth)

  let md = 48 * grid.fontHeight
  md = md - (md % grid.fontWidth)

  return { xxl, xl, lg, md }
}
