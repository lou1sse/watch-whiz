import { Checkbox, Field, Label } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"
import styles from "./scss/styles.module.scss"

type Props = {
  label: string,
  checked: boolean,
  onChange: (checked: boolean) => void
}

function CheckboxComponent(props: Props) {
  const { label, checked, onChange } = props

  return (
    <Field className={styles.checkboxComponent}>
      <Checkbox
        checked={checked}
        onChange={onChange}
        className={classNames(
          styles.checkboxComponent__box,
          "data-[checked]:bg-neutral-300",
          "data-[checked]:border-transparent"
        )}
      >
        {checked && <CheckIcon />}
      </Checkbox>
      <Label>{label}</Label>
    </Field>
  )
}

export default CheckboxComponent
