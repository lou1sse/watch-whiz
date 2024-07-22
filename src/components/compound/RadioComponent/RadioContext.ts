import { createContext, Dispatch, SetStateAction, useContext } from "react"

export type RadioItem = string | Record<string, string | number>

type RadioContextType<T extends RadioItem> = {
  data: T[] | undefined,
  itemIdKey: T extends string ? never : keyof T,
  itemLabelKey: T extends string ? never : keyof T,
  selectedItem: T | undefined,
  setSelectedItem: Dispatch<SetStateAction<T | undefined>>
}

const RadioContext = createContext<
  RadioContextType<RadioItem> | undefined
>(undefined)

export function useRadioContext() {
  const context = useContext(RadioContext)

  if (!context) {
    throw new Error(
      "Please use RadioComponent.* components as children to RadioComponent."
    )
  }

  return context
}

export default RadioContext
