import { ConfigurationQueries, MovieQueries } from "@Store"
import { useWindowSize } from "@uidotdev/usehooks"
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
    details
  } = useDetails()

  useLanguages()
  useCountries()

  if (isDetailsLoading || isCreditsLoading || isAlternativeTitlesLoading)
    return "Loading..."

  return (
    <div className={styles.movieDetailsPage}>
      <BackdropComponent image={details.backdrop_url} />
      <div className={styles.movieDetailsPage__content}>
        <div className={styles.overview}>
          <TitleComponent />
          {(width as number) <= 850 && <CreditsComponent />}
        </div>
        {(width as number) > 1024 && <SummaryComponent />}
      </div>
    </div>
  )
}

export default MovieDetailsPage
