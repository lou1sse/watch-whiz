import { MovieCreditsResponse, MovieDetailsResponse } from "@Store"
import { formatDate } from "@Utilities"
import { useWindowSize } from "@uidotdev/usehooks"
import CreditsComponent from "./CreditsComponent"
import styles from "./scss/styles.module.scss"

type Props = { data: MovieDetailsResponse, credits: MovieCreditsResponse }

function TitleComponent(props: Props) {
  const { width } = useWindowSize()
  const { data, credits } = props

  return (
    <div className={styles.titleComponent}>
      <div className={styles.titleComponent__poster}>
        <img src={data.poster_url} alt={`${data.title} Poster`} />
      </div>
      <div className={styles.titleComponent__details}>
        <div className={styles.text}>
          <div className={styles.text__heading}>
            <span className={styles.title}>{data.title}</span>
            <span className={styles.date}>
              {formatDate(data.release_date, "YYYY")}
            </span>
          </div>
          {data.original_language !== "en" && (
            <p>“{data.original_title}”</p>
          )}
          <div className={styles.text__director}>
            <span>Directed by</span>
            <p>{data.director?.name}</p>
          </div>
        </div>
        {(width as number) > 850 && (
          <CreditsComponent
            data={credits}
            tagline={data.tagline}
            overview={data.overview}
          />
        )}
      </div>
    </div>
  )
}

export default TitleComponent
