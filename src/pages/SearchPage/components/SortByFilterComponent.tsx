import { DropdownComponent } from "@CompoundComponents"
import { FILTERS } from "@Config"
import { map } from "lodash-es"
import { useState } from "react"

function SortByFilterComponent() {
  const [subLabel, setSubLabel] = useState<string>("")

  return (
    <DropdownComponent>
      <DropdownComponent.Button label="Sort by" subLabel={subLabel} />
      <DropdownComponent.Items>
        {map(FILTERS.SORT_BY, (item, index) => (
          <DropdownComponent.Item
            key={index}
            data={item}
            disabled={!item.id}
            onClick={() => setSubLabel(item.section || "")}
          />
        ))}
      </DropdownComponent.Items>
    </DropdownComponent>
  )
}

export default SortByFilterComponent
