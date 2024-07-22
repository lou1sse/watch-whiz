import { DropdownComponent } from "@CompoundComponents"
import {
  CheckboxComponent,
  ClickableDivComponent
} from "@GlobalComponents"
import { XMarkIcon } from "@heroicons/react/24/solid"
import {
  DiscoverMoviesPayload,
  GenreItem,
  GenreQueries,
  useDiscoverStore
} from "@Store"
import { filter, isEmpty, map, some } from "lodash-es"
import { useCallback } from "react"
import styles from "./scss/styles.module.scss"

type Props = {
  value: GenreItem[] | undefined,
  onChange: (value: DiscoverMoviesPayload) => void
}

function GenreFilterComponent(props: Props) {
  const { value, onChange } = props
  const { movieGenres } = GenreQueries.useMovieGenres()
  const moviesPayload = useDiscoverStore((state) => state.moviesPayload)

  const isSelected = useCallback(
    (item: GenreItem) =>
      some(value, (selectedItem) => selectedItem.id === item.id),
    [value]
  )

  const onChangeGenre = (genre: GenreItem) => {
    const updatedGenres = isSelected(genre)
      ? filter(value, (item) => item.id !== genre.id)
      : [...(value || []), genre]

    onChange({
      ...moviesPayload,
      with_genres: updatedGenres
    })
  }

  return (
    <div className={styles.genreFilterComponent}>
      <DropdownComponent>
        <DropdownComponent.Button
          label="Genre"
          customValueDisplay={map(value, "name").join(", ")}
        />
        <DropdownComponent.Items>
          {map(movieGenres, (item) => (
            <CheckboxComponent
              key={item.id}
              label={item.name}
              checked={isSelected(item)}
              onChange={() => onChangeGenre(item)}
            />
          ))}
        </DropdownComponent.Items>
      </DropdownComponent>

      {!isEmpty(value) && (
        <ul>
          {map(value, (item) => (
            <li key={item.id}>
              {item.name}
              <ClickableDivComponent
                onClick={() => onChangeGenre(item)}
                className={styles.removeBtn}
              >
                <XMarkIcon />
              </ClickableDivComponent>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GenreFilterComponent
