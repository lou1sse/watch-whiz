import { MovieQueries } from "@Store"
import { useWindowSize } from "@uidotdev/usehooks"
import {
  BackdropComponent,
  CreditsComponent,
  TitleComponent
} from "./components"
import styles from "./scss/styles.module.scss"

function MovieDetailsPage() {
  const { useDetails, useLanguages } = MovieQueries
  const { width } = useWindowSize()

  const { details, credits } = useDetails()
  useLanguages()

  return (
    <div className={styles.movieDetailsPage}>
      <BackdropComponent image={details.backdrop_url} />
      <div className={styles.movieDetailsPage__content}>
        <div className={styles.heading}>
          <TitleComponent data={details} credits={credits} />
        </div>
        {(width as number) <= 850 && (
          <CreditsComponent
            data={credits}
            tagline={details.tagline}
            overview={details.overview}
          />
        )}
      </div>
    </div>
  )
}

export default MovieDetailsPage
