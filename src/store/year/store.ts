import { map, range, toInteger } from "lodash-es"
import { create } from "zustand"
import { YearState } from "./types"

const useYearStore = create<YearState>((set) => ({
  decades: [],
  yearsInDecade: [],
  setDecades: ({ start_year, end_year }) => {
    const startDecade = Math.floor(toInteger(start_year) / 10) * 10
    const endDecade = Math.floor(toInteger(end_year) / 10) * 10
    const decades = map(
      range(startDecade, endDecade + 10, 10),
      (decade) => `${decade}s`
    )

    set({ decades })
  },
  setYeardInDecade: (decade: string) => {
    const startYear = toInteger(decade.slice(0, -1))
    const years = range(startYear, startYear + 10)
    set({ yearsInDecade: map(years, String) })
  }
}))

export default useYearStore
