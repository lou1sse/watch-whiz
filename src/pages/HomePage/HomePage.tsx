import { MovieQueries } from "@Store"
import {
  GenreListComponent,
  NowPlayingComponent,
  PopularComponent,
  TopRatedComponent,
  UpcomingComponent
} from "./components"
import styles from "./scss/styles.module.scss"

function HomePage() {
  const { useGenre, useNowPlaying, usePopular, useTopRated, useUpcoming } =
    MovieQueries
  const { genreList } = useGenre()
  const { nowPlaying } = useNowPlaying()
  const { popular } = usePopular()
  const { topRated } = useTopRated()
  const { upcoming } = useUpcoming()

  return (
    <div className={styles.homePage}>
      <GenreListComponent data={genreList} />
      <div className={styles.homePage__content}>
        <div className={styles.main}>
          <NowPlayingComponent data={nowPlaying} />
          <PopularComponent data={popular} />
          <TopRatedComponent data={topRated} />
        </div>
        <div className={styles.sidebar}>
          <UpcomingComponent data={upcoming} />
        </div>
      </div>
    </div>
  )
}

export default HomePage
