import { MovieListComponent } from "@CompoundComponents"
import { MovieItem } from "@Store"

function NowPlayingComponent({ data }: { data: MovieItem[] }) {
  return (
    <MovieListComponent data={data}>
      <MovieListComponent.Header title="Now Showing in Cinemas" />
      <MovieListComponent.Swiper
        breakpoints={{
          700: { slidesPerView: 2, spaceBetween: 12 },
          0: { slidesPerView: 1, spaceBetween: 12 }
        }}
      >
        {({ movie }) => (
          <MovieListComponent.Item data={movie} isBackdrop>
            <MovieListComponent.ItemCaption isOverlay data={movie} />
          </MovieListComponent.Item>
        )}
      </MovieListComponent.Swiper>
    </MovieListComponent>
  )
}

export default NowPlayingComponent
