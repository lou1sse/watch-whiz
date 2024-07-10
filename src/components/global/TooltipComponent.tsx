import styles from "./scss/styles.module.scss"

type Props = {
  text?: string,
  show?: boolean
}

function TooltipComponent(props: Props) {
  const { text = "Tooltip text sample!", show } = props

  return (
    show && (
      <div className={styles.tooltipComponent}>
        <div className={styles.tooltipComponent__content}>
          <p>{text}</p>
          <svg width="10" height="10" viewBox="0 0 10 10">
            <polygon points="0,0 5,5 10,0" />
          </svg>
        </div>
      </div>
    )
  )
}

export default TooltipComponent
