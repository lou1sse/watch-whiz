import { DropdownComponent } from "@CompoundComponents"
import { DiscoverQueries, useYearStore } from "@Store"
import { useEffect, useState } from "react"
import { isEmpty, map, range, toInteger } from "lodash-es"
import styles from "./scss/styles.module.scss"

function YearFilterComponent() {
  const { useFirstAndLatestMovieYear } = DiscoverQueries
  const { firstMovieYear, latestMovieYear } = useFirstAndLatestMovieYear()
  const { decades, setDecades } = useYearStore((state) => ({
    decades: state.decades,
    setDecades: state.setDecades
  }))

  const [yearsInDecade, setYearsInDecade] = useState<string[]>([])

  useEffect(() => {
    if (firstMovieYear && latestMovieYear) {
      setDecades({ start_year: firstMovieYear, end_year: latestMovieYear })
    }
  }, [firstMovieYear, latestMovieYear, setDecades])

  const onChangeValue = (decade: string) => {
    const startYear = toInteger(decade.slice(0, -1))
    const years = range(startYear, startYear + 10)
    setYearsInDecade(map(years, String))
  }

  return (
    <div className={styles.yearFilterComponent}>
      <DropdownComponent data={decades}>
        <DropdownComponent.Button label="Decade" />
        <DropdownComponent.Items<string> onChangeValue={onChangeValue} />
      </DropdownComponent>

      {!isEmpty(yearsInDecade) && (
        <ul>
          {map(yearsInDecade, (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default YearFilterComponent
