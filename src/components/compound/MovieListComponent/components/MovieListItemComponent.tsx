import { MovieImageDisplayComponent } from "@GlobalComponents"
import { MovieItem } from "@Store"
import { formatDate } from "@Utilities"
import { useHover } from "@uidotdev/usehooks"
import { map } from "lodash-es"
import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"
import { useMovieListContext } from "../MovieListContext"
import MovieListItemCaptionComponent from "./MovieListItemCaptionComponent"

type Props = PropsWithChildren<{
  data?: MovieItem,
  width?: string,
  height?: string,
  isBackdrop?: boolean,
  enableHoverEffect?: boolean
}>

type ItemProps = Required<Pick<Props, "data">> & Omit<Props, "data">

function Item(props: ItemProps) {
  const [ref, hovering] = useHover()
  const { children, data, isBackdrop, width, height, enableHoverEffect } =
    props

  const imageSource = isBackdrop ? data.backdrop_url : data.poster_url
  const showPlaceholder = isBackdrop
    ? !data.backdrop_path
    : !data.poster_path
  const showOverlay = enableHoverEffect && hovering && !showPlaceholder

  return (
    <Link
      ref={ref}
      to={`/movie/${data.id}`}
      className="flex flex-col gap-y-2 relative"
    >
      <MovieImageDisplayComponent
        imageSource={imageSource}
        title={data.title}
        releaseDate={formatDate(data.release_date, "YYYY")}
        width={width}
        height={height}
        showPlaceholder={showPlaceholder}
        showOverlay={showOverlay}
      />
      {children}
    </Link>
  )
}

function MovieListItemComponent(props: Props) {
  const data = useMovieListContext()
  const { children, data: propsData, ...rest } = props

  if (propsData)
    return (
      <Item data={propsData} {...rest}>
        {children || <MovieListItemCaptionComponent data={propsData} />}
      </Item>
    )

  return map(data, (item) => (
    <Item key={item.id} data={item} {...rest}>
      {children || <MovieListItemCaptionComponent data={item} />}
    </Item>
  ))
}

export default MovieListItemComponent
