import { MovieListComponent } from "@CompoundComponents"
import { MovieItem } from "@Store"
import { formatDate } from "@Utilities"
import styles from "./scss/styles.module.scss"

function UpcomingComponent({ data }: { data: MovieItem[] }) {
  return (
    <MovieListComponent data={data}>
      <MovieListComponent.Header title="Upcoming Component" />
      <MovieListComponent.Items className={styles.upcomingComponent}>
        {({ movie }) => (
          <MovieListComponent.Item data={movie} height="200px" isBackdrop>
            <MovieListComponent.ItemCaption>
              <p>{movie.title}</p>
              <p className="text-xs tracking-wide">
                Release date: {formatDate(movie.release_date)}
              </p>
            </MovieListComponent.ItemCaption>
          </MovieListComponent.Item>
        )}
      </MovieListComponent.Items>
    </MovieListComponent>
  )
}

export default UpcomingComponent
