import { Menu } from "@headlessui/react"
import { PropsWithChildren, useMemo, useState } from "react"
import DropdownContext, { DropdownItem } from "./DropdownContext"
import { Button, Item, Items } from "./components"

type Props<T extends DropdownItem> = PropsWithChildren<{
  data?: T[],
  itemIdKey?: T extends string ? never : keyof T,
  itemLabelKey?: T extends string ? never : keyof T
}>

function DropdownComponent(props: Props<DropdownItem>) {
  const {
    children,
    data,
    itemIdKey = "id",
    itemLabelKey = "label"
  } = props

  const [selectedItem, setSelectedItem] = useState<DropdownItem>()

  const contextValue = useMemo(
    () => ({
      data,
      selectedItem,
      itemIdKey,
      itemLabelKey,
      setSelectedItem
    }),
    [data, selectedItem, itemIdKey, itemLabelKey]
  )

  return (
    <DropdownContext.Provider value={contextValue}>
      <Menu as="div" className="relative w-full text-sm">
        {children}
      </Menu>
    </DropdownContext.Provider>
  )
}

DropdownComponent.Button = Button
DropdownComponent.Items = Items
DropdownComponent.Item = Item

export default DropdownComponent
