import classNames from "classnames"
import styles from "./scss/styles.module.scss"

type Props = {
  variant?: "primary" | "secondary" | "outline" | "transparent",
  text?: string,
  isFull?: boolean,
  onClick?: () => void
}

function ButtonComponent(props: Props) {
  const { variant = "primary", text = "Button", isFull, onClick } = props

  return (
    <button
      type="button"
      className={classNames(
        styles.buttonComponent,
        styles[variant],
        isFull ? "w-full" : "w-max"
      )}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default ButtonComponent
