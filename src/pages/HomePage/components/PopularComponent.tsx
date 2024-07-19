import { MovieListComponent } from "@CompoundComponents"
import { MovieItem } from "@Store"
import styles from "./scss/styles.module.scss"

function PopularComponent({ data }: { data: MovieItem[] }) {
  return (
    <MovieListComponent data={data}>
      <MovieListComponent.Header
        title="Popular Now"
        actionRoute="/popular"
      />
      <MovieListComponent.Items className={styles.popularComponent}>
        <MovieListComponent.Item isBackdrop height="160px" />
      </MovieListComponent.Items>
    </MovieListComponent>
  )
}

export default PopularComponent
