import { DropdownComponent } from "@CompoundComponents"
import {
  CheckboxComponent,
  ClickableDivComponent
} from "@GlobalComponents"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { GenreItem, GenreQueries } from "@Store"
import { filter, isEmpty, map } from "lodash-es"
import { useEffect, useMemo, useState } from "react"
import styles from "./scss/styles.module.scss"

function GenreFilterComponent() {
  const { useMovieGenres } = GenreQueries
  const { movieGenres } = useMovieGenres()

  const [genresDisplay, setGenresDisplay] = useState<GenreItem[]>([])

  useEffect(() => {
    if (isEmpty(genresDisplay) && movieGenres) {
      const transformedMovieGenres = map(movieGenres, (item) => ({
        ...item,
        checked: false
      }))
      setGenresDisplay(transformedMovieGenres)
    }
  }, [movieGenres])

  const selectedGenres = useMemo(
    () => filter(genresDisplay, (item) => item.checked),
    [genresDisplay]
  )

  const onChange = (genre: GenreItem, checked: boolean) => {
    setGenresDisplay((prevGenres) =>
      map(prevGenres, (item) =>
        item.id === genre.id ? { ...item, checked } : item
      )
    )
  }

  return (
    <div className={styles.genreFilterComponent}>
      <DropdownComponent>
        <DropdownComponent.Button
          label="Genre"
          customValueDisplay={map(selectedGenres, "name").join(", ")}
        />
        <DropdownComponent.Items>
          {map(genresDisplay, (item) => (
            <CheckboxComponent
              key={item.id}
              label={item.name}
              checked={item.checked}
              onChange={(checked) => onChange(item, checked)}
            />
          ))}
        </DropdownComponent.Items>
      </DropdownComponent>

      {!isEmpty(selectedGenres) && (
        <ul>
          {map(selectedGenres, (item) => (
            <li key={item.id}>
              {item.name}
              <ClickableDivComponent
                onClick={() => onChange(item, false)}
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
