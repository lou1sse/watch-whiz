import { SortBy } from "@Config"
import { ButtonComponent } from "@GlobalComponents"
import { DiscoverMoviesPayload, useDiscoverStore } from "@Store"
import { omit } from "lodash-es"
import { useState } from "react"
import GenreFilterComponent from "./GenreFilterComponent"
import SortByFilterComponent from "./SortByFilterComponent"
import YearFilterComponent from "./YearFilterComponent"
import styles from "./scss/styles.module.scss"

function FiltersComponent() {
  const { moviesPayload, setMoviesPayload } = useDiscoverStore(
    (state) => ({
      moviesPayload: state.moviesPayload,
      setMoviesPayload: state.setMoviesPayload
    })
  )

  const [filtersPayload, setFiltersPayload] =
    useState<DiscoverMoviesPayload>(moviesPayload)

  const onChangeFiltersPayload = (data: DiscoverMoviesPayload) => {
    setFiltersPayload({ ...filtersPayload, ...data })
  }

  const onClickClear = () => {
    setFiltersPayload({})
    setMoviesPayload({})
  }

  const onClickApplyFilters = () => {
    if (moviesPayload.page) {
      setMoviesPayload(omit(moviesPayload, "page"))
      return
    }
    setMoviesPayload(filtersPayload)
  }

  return (
    <div className={styles.filtersComponent}>
      <div className={styles.filtersComponent__header}>
        <p>Browse films by...</p>
      </div>
      <div className={styles.filtersComponent__content}>
        <SortByFilterComponent
          value={filtersPayload.sort_by as SortBy}
          onChange={onChangeFiltersPayload}
        />
        <GenreFilterComponent
          value={filtersPayload.with_genres}
          onChange={onChangeFiltersPayload}
        />
        <YearFilterComponent onChange={onChangeFiltersPayload} />
        <div className={styles.buttons}>
          <ButtonComponent
            text="Clear"
            variant="outline"
            isFull
            onClick={onClickClear}
          />
          <ButtonComponent
            text="Apply Filters"
            isFull
            onClick={onClickApplyFilters}
          />
        </div>
      </div>
    </div>
  )
}

export default FiltersComponent
