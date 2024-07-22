import { PropsWithChildren, useMemo, useState } from "react"
import RadioContext, { RadioItem } from "./RadioContext"
import { Item, Items } from "./components"

type Props<T extends RadioItem> = PropsWithChildren<{
  data?: T[],
  itemIdKey?: T extends string ? never : keyof T,
  itemLabelKey?: T extends string ? never : keyof T
}>

function RadioComponent(props: Props<RadioItem>) {
  const {
    children,
    data,
    itemIdKey = "id",
    itemLabelKey = "label"
  } = props

  const [selectedItem, setSelectedItem] = useState<RadioItem>()

  const contextValue = useMemo(
    () => ({
      data,
      itemIdKey,
      itemLabelKey,
      selectedItem,
      setSelectedItem
    }),
    [data]
  )

  return (
    <RadioContext.Provider value={contextValue}>
      {children}
    </RadioContext.Provider>
  )
}

RadioComponent.Item = Item
RadioComponent.Items = Items

export default RadioComponent
