import { MovieItem } from "@Store"
import classNames from "classnames"
import { map } from "lodash-es"
import { Fragment, ReactNode } from "react"
import { useMovieListContext } from "../MovieListContext"
import MovieListItemComponent from "./MovieListItemComponent"
import styles from "./scss/styles.module.scss"

type Props = {
  children?: ReactNode | ((props: { movie: MovieItem }) => ReactNode),
  className?: string,
  isVertical?: boolean
}

function MovieListItemsComponent(props: Props) {
  const data = useMovieListContext()
  const {
    children,
    isVertical,
    className = classNames(styles.movieListItemsComponent, {
      [styles.vertical]: isVertical
    })
  } = props

  const renderChildren = () => {
    if (typeof children === "function") {
      return map(data, (item) => (
        <Fragment key={item.id}>{children({ movie: item })}</Fragment>
      ))
    }

    return children
  }

  return (
    <div className={className}>
      {children ? renderChildren() : <MovieListItemComponent />}
    </div>
  )
}

export default MovieListItemsComponent
