import {
  HTMLAttributes,
  KeyboardEvent,
  PropsWithChildren,
  forwardRef
} from "react"

type Props = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    onClick: () => void
  }
>

const ClickableDivComponent = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { children, className, onClick, ...rest } = props

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        onClick()
      }
    }

    return (
      <div
        ref={ref}
        role="button"
        className={`cursor-pointer ${className}`}
        onClick={onClick}
        onKeyDown={onKeyDown}
        tabIndex={0}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

export default ClickableDivComponent
