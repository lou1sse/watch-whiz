import { DropdownComponent } from "@CompoundComponents"
import { FILTERS, SortBy } from "@Config"
import { DiscoverMoviesPayload, useDiscoverStore } from "@Store"
import { formatDate, getDateRange } from "@Utilities"
import { map } from "lodash-es"
import moment from "moment"
import { useEffect, useState } from "react"

type Props = {
  value: SortBy | undefined,
  onChange: (value: DiscoverMoviesPayload) => void
}

function SortByFilterComponent(props: Props) {
  const { value, onChange } = props
  const moviesPayload = useDiscoverStore((state) => state.moviesPayload)

  const [subLabel, setSubLabel] = useState<string>("")

  const getPopularityPayload = (
    id: string
  ): DiscoverMoviesPayload | undefined => {
    const dateRanges = {
      month: getDateRange("month"),
      week: getDateRange("week")
    }

    const mapPopularityId: Record<string, DiscoverMoviesPayload> = {
      all_time: {
        primary_release_year: undefined,
        primary_release_date_gte: undefined,
        primary_release_date_lte: undefined
      },
      year: {
        primary_release_year: formatDate(moment(), "YYYY"),
        primary_release_date_gte: undefined,
        primary_release_date_lte: undefined
      },
      month: {
        primary_release_year: undefined,
        primary_release_date_gte: dateRanges.month.startDate,
        primary_release_date_lte: dateRanges.month.endDate
      },
      week: {
        primary_release_year: undefined,
        primary_release_date_gte: dateRanges.week.startDate,
        primary_release_date_lte: dateRanges.week.endDate
      }
    }

    return mapPopularityId[id]
  }

  const onClick = (item: SortBy) => {
    const popularityPayload =
      item.section === "Popularity" && item.id
        ? getPopularityPayload(item.id)
        : undefined

    const finalSortPayload: DiscoverMoviesPayload = {
      ...moviesPayload,
      ...popularityPayload,
      sort_by: item
    }

    onChange(finalSortPayload)
  }

  useEffect(() => {
    setSubLabel(value?.section || "")
  }, [value])

  return (
    <DropdownComponent>
      <DropdownComponent.Button
        label="Sort by"
        subLabel={subLabel}
        customValueDisplay={value?.label || ""}
      />
      <DropdownComponent.Items>
        {map(FILTERS.SORT_BY, (item, index) => (
          <DropdownComponent.Item
            key={index}
            data={item}
            disabled={!item.id}
            onClick={() => onClick(item)}
          />
        ))}
      </DropdownComponent.Items>
    </DropdownComponent>
  )
}

export default SortByFilterComponent
