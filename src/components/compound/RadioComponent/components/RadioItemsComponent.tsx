import { RadioGroup } from "@headlessui/react"
import { find, isObject, map } from "lodash-es"
import { PropsWithChildren, useCallback, useEffect } from "react"
import { RadioItem, useRadioContext } from "../RadioContext"
import RadioItemComponent from "./RadioItemComponent"

type Props<T extends RadioItem> = PropsWithChildren<{
  className?: string,
  returnKey?: string,
  returnObject?: boolean,
  value?: T,
  onChangeValue?: (value: T) => void
}>

function RadioItemsComponent<T extends RadioItem>(props: Props<T>) {
  const { data, itemIdKey, selectedItem, setSelectedItem } =
    useRadioContext()
  const {
    children,
    className,
    returnKey = itemIdKey,
    returnObject,
    value,
    onChangeValue
  } = props

  const findValue = useCallback(
    (val: T) => {
      const finalValue = find(data, (item) => {
        if (isObject(item) && isObject(val)) {
          return item[itemIdKey] === val[returnKey]
        }
        return item === val
      }) as T

      setSelectedItem(finalValue)
    },
    [data, itemIdKey, returnKey, setSelectedItem]
  )

  const onClickItem = (item: T) => {
    setSelectedItem(item)
    if (onChangeValue) {
      const returnValue = ((isObject(item) &&
        (returnObject ? item : item[returnKey])) ||
        item) as T
      onChangeValue(returnValue)
    }
  }

  useEffect(() => {
    if (value) {
      findValue(value)
    }
  }, [value, findValue])

  return (
    <RadioGroup
      value={selectedItem}
      onChange={onClickItem}
      className={className}
    >
      {children ||
        map(data as T[], (item, index) => (
          <RadioItemComponent
            key={index}
            data={item}
            onClick={() => onClickItem(item)}
          />
        ))}
    </RadioGroup>
  )
}

export default RadioItemsComponent
