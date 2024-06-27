import { useMeasure } from "@uidotdev/usehooks"
import { Outlet } from "react-router-dom"
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import styles from "./scss/styles.module.scss"

function LayoutComponent() {
  const [ref, { height: headerHeight }] = useMeasure()

  return (
    <div className={styles.layoutComponent}>
      <HeaderComponent ref={ref} />
      <div
        className={styles.container}
        style={{
          maxHeight: `calc(100vh - ${headerHeight}px)`,
          marginTop: `${headerHeight}px`
        }}
      >
        <main>
          <Outlet />
        </main>
        <FooterComponent />
      </div>
    </div>
  )
}

export default LayoutComponent
