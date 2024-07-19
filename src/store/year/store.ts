import { map, range, toInteger } from "lodash-es"
import { create } from "zustand"
import { YearState } from "./types"

const useYearStore = create<YearState>((set) => ({
  decades: [],
  setDecades: ({ start_year, end_year }) => {
    const startDecade = Math.floor(toInteger(start_year) / 10) * 10
    const endDecade = Math.floor(toInteger(end_year) / 10) * 10
    const decades = map(
      range(startDecade, endDecade + 10, 10),
      (decade) => `${decade}s`
    )

    set({ decades })
  }
}))

export default useYearStore
