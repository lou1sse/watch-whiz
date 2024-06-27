import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useWindowSize } from "@uidotdev/usehooks"
import styles from "./scss/styles.module.scss"

function SearchComponent() {
  const size = useWindowSize()
  const windowWidth = size.width || 0

  return (
    <div className={styles.searchComponent}>
      {windowWidth > 1024 ? (
        <div className={styles.searchComponent__box}>
          <input id="search" type="text" placeholder="Search" />
          <MagnifyingGlassIcon />
        </div>
      ) : (
        <MagnifyingGlassIcon className="!text-white" />
      )}
    </div>
  )
}

export default SearchComponent
