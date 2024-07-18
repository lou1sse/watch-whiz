import { MenuItems, Transition } from "@headlessui/react"
import { find, isObject, map } from "lodash-es"
import { Fragment, PropsWithChildren, useCallback, useEffect } from "react"
import { DropdownItem, useDropdownContext } from "../DropdownContext"
import DropdownItemComponent from "./DropdownItemComponent"
import styles from "./scss/styles.module.scss"

type Props<T extends DropdownItem> = PropsWithChildren<{
  className?: string,
  returnKey?: string,
  returnObject?: boolean,
  value?: T,
  onChangeValue?: (value: T) => void
}>

function DropdownItemsComponent<T extends DropdownItem>(props: Props<T>) {
  const { data, itemIdKey, selectedItem, setSelectedItem } =
    useDropdownContext()
  const {
    children,
    className,
    returnKey = "id",
    returnObject,
    value,
    onChangeValue
  } = props

  const findValue = useCallback(
    (val: T) => {
      const finalValue = find(data, (item) => {
        if (isObject(item) && isObject(val)) {
          return item[itemIdKey || "id"] === val[returnKey]
        }
        return item === val
      }) as T

      setSelectedItem(finalValue)
    },
    [data, itemIdKey, returnKey, setSelectedItem]
  )

  useEffect(() => {
    if (value) {
      findValue(value)
    }
  }, [value, findValue])

  useEffect(() => {
    if (onChangeValue && selectedItem) {
      const returnValue = ((isObject(selectedItem) &&
        (returnObject ? selectedItem : selectedItem[returnKey])) ||
        selectedItem) as T
      onChangeValue(returnValue)
    }
  }, [onChangeValue, selectedItem, returnKey, returnObject])

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <MenuItems>
        <div className={className || styles.dropdownItemsComponent}>
          {children ||
            map(data, (item, index) => (
              <DropdownItemComponent key={index} data={item} />
            ))}
        </div>
      </MenuItems>
    </Transition>
  )
}

export default DropdownItemsComponent
