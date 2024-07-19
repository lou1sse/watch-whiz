import { ConfigurationQueries, MovieQueries } from "@Store"
import { useWindowSize } from "@uidotdev/usehooks"
import classNames from "classnames"
import { MovieListComponent } from "@CompoundComponents"
import {
  BackdropComponent,
  CreditsComponent,
  SummaryComponent,
  TitleComponent
} from "./components"
import styles from "./scss/styles.module.scss"

function MovieDetailsPage() {
  const { useDetails } = MovieQueries
  const { useLanguages, useCountries } = ConfigurationQueries
  const { width } = useWindowSize()

  const {
    isDetailsLoading,
    isCreditsLoading,
    isAlternativeTitlesLoading,
    details,
    similar
  } = useDetails()

  useLanguages()
  useCountries()

  const contentClass = classNames(styles.movieDetailsPage__content, {
    [styles.withMargin]: !!details.backdrop_path
  })

  if (isDetailsLoading || isCreditsLoading || isAlternativeTitlesLoading)
    return "Loading..."

  return (
    <div className={styles.movieDetailsPage}>
      {!!details.backdrop_path && (
        <BackdropComponent image={details.backdrop_url} />
      )}
      <div className={contentClass}>
        <div className={styles.overview}>
          <TitleComponent />
          {(width || 0) <= 850 && <CreditsComponent />}
          <MovieListComponent data={similar}>
            <MovieListComponent.Header title="Similar Films" />
            <MovieListComponent.Swiper>
              {({ movie }) => (
                <MovieListComponent.Item
                  data={movie}
                  hideCaption
                  enableHoverEffect
                />
              )}
            </MovieListComponent.Swiper>
          </MovieListComponent>
        </div>
        {(width || 0) > 1024 && <SummaryComponent />}
      </div>
    </div>
  )
}

export default MovieDetailsPage
