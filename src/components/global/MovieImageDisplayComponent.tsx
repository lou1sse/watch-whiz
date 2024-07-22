import classNames from "classnames"
import styles from "./scss/styles.module.scss"

type Props = {
  imageSource: string,
  title: string,
  releaseDate: string,
  altSuffix?: string,
  width?: string,
  height?: string,
  showOverlay?: boolean,
  showPlaceholder?: boolean,
  bordered?: boolean
}

function MovieImageDisplayComponent(props: Props) {
  const {
    imageSource,
    altSuffix = "Poster",
    title,
    releaseDate,
    width,
    height = "270px",
    showOverlay,
    showPlaceholder,
    bordered
  } = props

  const renderPlaceholder = () => (
    <div
      className={classNames(styles.placeholder, {
        [styles.overlay]: showOverlay
      })}
    >
      <p className={styles.title}>{title}</p>
      <p>{releaseDate}</p>
    </div>
  )

  return (
    <div
      className={classNames(styles.movieImageDisplayComponent, {
        [styles.bordered]: bordered
      })}
      style={{
        width,
        height,
        minWidth: width,
        maxWidth: width,
        minHeight: height,
        maxHeight: height
      }}
    >
      {(showPlaceholder || showOverlay) && renderPlaceholder()}
      {!showPlaceholder && (
        <img src={imageSource} alt={`${title} ${altSuffix}`} />
      )}
    </div>
  )
}

export default MovieImageDisplayComponent
