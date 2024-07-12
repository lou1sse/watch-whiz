import { MovieListComponent } from "@CompoundComponents"
import { MovieItem } from "@Store"

function TopRatedComponent({ data }: { data: MovieItem[] }) {
  return (
    <MovieListComponent data={data}>
      <MovieListComponent.Header title="Top Rated" />
      <MovieListComponent.Swiper>
        {({ movie }) => (
          <MovieListComponent.Item data={movie}>
            <MovieListComponent.ItemCaption data={movie} showReleaseDate />
          </MovieListComponent.Item>
        )}
      </MovieListComponent.Swiper>
    </MovieListComponent>
  )
}

export default TopRatedComponent
