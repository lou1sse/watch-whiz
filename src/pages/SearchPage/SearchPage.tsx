import { FiltersComponent } from "./components"
import styles from "./scss/styles.module.scss"

function SearchPage() {
  return (
    <div className={styles.searchPage}>
      <FiltersComponent />
    </div>
  )
}

export default SearchPage
