import { MenuButton } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import classNames from "classnames"
import { isObject } from "lodash-es"
import { useMemo } from "react"
import { useDropdownContext } from "../DropdownContext"
import styles from "./scss/styles.module.scss"

type Props = {
  label?: string,
  subLabel?: string,
  placeholder?: string,
  customValueDisplay?: string
}

function DropdownButtonComponent(props: Props) {
  const { selectedItem, itemLabelKey } = useDropdownContext()
  const {
    label,
    subLabel,
    placeholder = "Any",
    customValueDisplay
  } = props

  const valueDisplay = useMemo(
    () =>
      customValueDisplay ??
      ((selectedItem && itemLabelKey && isObject(selectedItem)
        ? selectedItem[itemLabelKey]
        : selectedItem) as string),
    [customValueDisplay, selectedItem, itemLabelKey]
  )

  return (
    <MenuButton as="div" className="relative">
      <div className={styles.dropdownButtonComponent}>
        {(label || subLabel) && (
          <div className={styles.dropdownButtonComponent__labels}>
            <p>{label}</p>
            <p>{subLabel}</p>
          </div>
        )}
        <div className={styles.dropdownButtonComponent__container}>
          <p
            className={classNames("truncate", {
              "text-neutral-400": !valueDisplay
            })}
          >
            {valueDisplay || placeholder}
          </p>
          <ChevronDownIcon />
        </div>
      </div>
    </MenuButton>
  )
}

export default DropdownButtonComponent
