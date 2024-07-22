import { Field, Radio } from "@headlessui/react"
import classNames from "classnames"
import { isObject } from "lodash-es"
import { PropsWithChildren, useMemo } from "react"
import { RadioItem, useRadioContext } from "../RadioContext"
import styles from "./scss/styles.module.scss"

type Props<T extends RadioItem> = PropsWithChildren<{
  data?: T,
  hideCircle?: boolean,
  className?: (checked: boolean) => string,
  onClick?: () => void
}>

function RadioItemComponent<T extends RadioItem>(props: Props<T>) {
  const { itemLabelKey } = useRadioContext()
  const { data, hideCircle, className, onClick } = props

  const dataDisplay = useMemo(
    () =>
      (itemLabelKey && isObject(data)
        ? data[itemLabelKey]
        : data) as string,
    [data, itemLabelKey]
  )

  return (
    <Field onClick={onClick}>
      <Radio value={data}>
        {({ checked }) => (
          <div
            className={
              (className ? className(checked) : "") ||
              styles.radioItemComponent
            }
          >
            {!hideCircle && (
              <div
                className={classNames(
                  styles.radioItemComponent__circle,
                  checked ? "bg-blue-400" : "bg-white"
                )}
              >
                <span />
              </div>
            )}
            <p>{dataDisplay}</p>
          </div>
        )}
      </Radio>
    </Field>
  )
}

export default RadioItemComponent
