import { createContext, Dispatch, SetStateAction, useContext } from "react"

export type DropdownItem =
  | string
  | Record<string, string | number | boolean | undefined>

type DropdownContextType<T extends DropdownItem> = {
  data: T[] | undefined,
  itemIdKey: T extends string ? never : keyof T,
  itemLabelKey: T extends string ? never : keyof T,
  selectedItem: T | undefined,
  setSelectedItem: Dispatch<SetStateAction<T | undefined>>
}

const DropdownContext = createContext<
  DropdownContextType<DropdownItem> | undefined
>(undefined)

export function useDropdownContext() {
  const context = useContext(DropdownContext)

  if (!context) {
    throw new Error(
      "Please use DropdownComponent.* components as children to DropdownComponent."
    )
  }

  return context
}

export default DropdownContext
