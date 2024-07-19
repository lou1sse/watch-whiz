import { ClickableDivComponent } from "@GlobalComponents"
import { MenuItem } from "@headlessui/react"
import classNames from "classnames"
import { isObject } from "lodash-es"
import { PropsWithChildren, useMemo } from "react"
import { DropdownItem, useDropdownContext } from "../DropdownContext"
import styles from "./scss/styles.module.scss"

type Props<T extends DropdownItem> = PropsWithChildren<{
  data?: T,
  disabled?: boolean,
  className?: string,
  onClick?: () => void
}>

function DropdownItemComponent<T extends DropdownItem>(props: Props<T>) {
  const { itemLabelKey, setSelectedItem } = useDropdownContext()
  const { children, data, disabled, className, onClick, ...rest } = props

  const dataDisplay = useMemo(
    () =>
      (itemLabelKey && isObject(data)
        ? data[itemLabelKey]
        : data) as string,
    [data, itemLabelKey]
  )

  const onClickItem = () => {
    if (disabled) return

    if (onClick) {
      onClick()
    }

    setSelectedItem(data)
  }

  return (
    <MenuItem>
      <ClickableDivComponent
        className={
          className ||
          classNames(styles.dropdownItemComponent, {
            [styles.disabled]: disabled
          })
        }
        onClick={onClickItem}
        {...rest}
      >
        {children || dataDisplay}
      </ClickableDivComponent>
    </MenuItem>
  )
}

export default DropdownItemComponent
