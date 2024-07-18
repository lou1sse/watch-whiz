import { MenuButton } from "@headlessui/react"
import { isObject } from "lodash-es"
import { useMemo } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useDropdownContext } from "../DropdownContext"
import styles from "./scss/styles.module.scss"

type Props = {
  label?: string,
  placeholder?: string
}

function DropdownButtonComponent(props: Props) {
  const { selectedItem, itemLabelKey } = useDropdownContext()
  const { label, placeholder = "Any" } = props

  const valueDisplay = useMemo(
    () =>
      (selectedItem && itemLabelKey && isObject(selectedItem)
        ? selectedItem[itemLabelKey]
        : selectedItem) as string,
    [selectedItem, itemLabelKey]
  )

  return (
    <MenuButton as="div" className="relative">
      <div className={styles.dropdownButtonComponent}>
        {label && (
          <p className={styles.dropdownButtonComponent__label}>{label}</p>
        )}
        <div className={styles.dropdownButtonComponent__container}>
          <p>{valueDisplay || placeholder}</p>
          <ChevronDownIcon />
        </div>
      </div>
    </MenuButton>
  )
}

export default DropdownButtonComponent
