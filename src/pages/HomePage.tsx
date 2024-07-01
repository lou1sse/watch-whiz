import { isEmpty } from "lodash-es"
import { useEffect } from "react"

import { useMovies } from "@Modules"
import {
  GenreListComponent,
  NowPlayingComponent,
  PopularComponent,
  TopRatedComponent,
  UpcomingComponent
} from "./components"
import styles from "./scss/styles.module.scss"

function HomePage() {
  const {
    genreList,
    nowPlaying,
    popular,
    upcoming,
    topRated,
    genreListRequest,
    nowPlayingRequest,
    popularRequest,
    upcomingRequest,
    topRatedRequest
  } = useMovies()

  useEffect(() => {
    if (isEmpty(genreList)) {
      genreListRequest()
    }
  }, [genreList, genreListRequest])

  useEffect(() => {
    if (isEmpty(nowPlaying)) {
      nowPlayingRequest()
    }
  }, [nowPlaying, nowPlayingRequest])

  useEffect(() => {
    if (isEmpty(popular)) {
      popularRequest()
    }
  }, [popular, popularRequest])

  useEffect(() => {
    if (isEmpty(upcoming)) {
      upcomingRequest()
    }
  }, [upcoming, upcomingRequest])

  useEffect(() => {
    if (isEmpty(topRated)) {
      topRatedRequest()
    }
  }, [topRated, topRatedRequest])

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
