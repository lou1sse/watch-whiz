import GenreFilterComponent from "./GenreFilterComponent"
import SortByFilterComponent from "./SortByFilterComponent"
import YearFilterComponent from "./YearFilterComponent"
import styles from "./scss/styles.module.scss"

function FiltersComponent() {
  return (
    <div className={styles.filtersComponent}>
      <div className={styles.filtersComponent__header}>
        <p>Browse films by...</p>
      </div>

      <div className={styles.filtersComponent__content}>
        <SortByFilterComponent />
        <GenreFilterComponent />
        <YearFilterComponent />
      </div>
    </div>
  )
}

export default FiltersComponent
