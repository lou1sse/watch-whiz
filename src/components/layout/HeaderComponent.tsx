import { HEADER_NAV_LINKS } from "@Config"
import { SearchComponent } from "@GlobalComponents"
import { WatchWhizWhite } from "@Logo"
import { map } from "lodash-es"
import { forwardRef } from "react"
import { Link } from "react-router-dom"
import styles from "./scss/styles.module.scss"

const HeaderComponent = forwardRef<HTMLDivElement>((_props, ref) => (
  <div ref={ref} className={styles.headerComponent}>
    <div className={styles.headerComponent__nav}>
      <div className={styles.logo}>
        <img src={WatchWhizWhite} alt="Watch Whiz Logo" />
        <p>Watch Whiz</p>
      </div>

      <div className={styles.links}>
        {map(HEADER_NAV_LINKS, (item, index) => (
          <Link key={index} to={item.route}>
            <p>{item.label}</p>
          </Link>
        ))}
      </div>
      <SearchComponent />
    </div>
  </div>
))

export default HeaderComponent
