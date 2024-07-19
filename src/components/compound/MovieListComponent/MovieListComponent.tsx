import { MovieItem } from "@Store"
import { PropsWithChildren } from "react"
import { Header, Item, ItemCaption, Items, Swiper } from "./components"
import MovieListContext from "./MovieListContext"

type Props = PropsWithChildren<{ data: MovieItem[] }>

function MovieListComponent(props: Props) {
  const { children, data } = props

  return (
    <MovieListContext.Provider value={data}>
      <div className="space-y-4">{children}</div>
    </MovieListContext.Provider>
  )
}

MovieListComponent.Header = Header
MovieListComponent.ItemCaption = ItemCaption
MovieListComponent.Item = Item
MovieListComponent.Items = Items
MovieListComponent.Swiper = Swiper

export default MovieListComponent
