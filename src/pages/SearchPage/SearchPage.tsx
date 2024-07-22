import { MovieListComponent } from "@CompoundComponents"
import { ButtonComponent } from "@GlobalComponents"
import { DiscoverQueries, useDiscoverStore } from "@Store"
import { map } from "lodash-es"
import { useMemo } from "react"
import { FiltersComponent } from "./components"
import styles from "./scss/styles.module.scss"

function SearchPage() {
  const { movies, moviesPagination } = DiscoverQueries.useMovies()
  const { moviesPayload, setMoviesPayload } = useDiscoverStore(
    (state) => ({
      moviesPayload: state.moviesPayload,
      setMoviesPayload: state.setMoviesPayload
    })
  )

  const paginationDisplay = useMemo(() => {
    if (movies && moviesPagination) {
      const totalResults = new Intl.NumberFormat().format(
        moviesPagination.total_results
      )
      return `Showing ${movies.length} of ${totalResults} movies`
    }

    return ""
  }, [movies, moviesPagination])

  const onClickPrev = () => {
    setMoviesPayload({
      ...moviesPayload,
      page: moviesPagination.page - 1
    })
  }

  const onClickNext = () => {
    setMoviesPayload({
      ...moviesPayload,
      page: moviesPagination.page + 1
    })
  }

  return (
    <div className={styles.searchPage}>
      <FiltersComponent />
      <div className={styles.searchPage__results}>
        <div className={styles.pagination}>
          <p>{paginationDisplay}</p>
        </div>
        <MovieListComponent data={movies}>
          <MovieListComponent.Items className={styles.list}>
            {map(movies, (item, index) => (
              <MovieListComponent.Item
                key={index}
                data={item}
                width="220px"
                height="330px"
              />
            ))}
          </MovieListComponent.Items>
        </MovieListComponent>
        <div className={styles.buttons}>
          {moviesPagination.page !== 1 && (
            <ButtonComponent
              variant="secondary"
              text="Prev"
              onClick={onClickPrev}
            />
          )}
          <ButtonComponent
            variant="secondary"
            text="Next"
            onClick={onClickNext}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchPage
