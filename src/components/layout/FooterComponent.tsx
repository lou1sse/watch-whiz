import { FOOTER_NAV_LINKS, INFO_LINKS } from "@Config"
import { WatchWhizWhite } from "@Logo"
import { map } from "lodash-es"
import styles from "./scss/styles.module.scss"

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.content__nav}>
          <img src={WatchWhizWhite} alt="Watch Whiz Logo" />
          <div className={styles.linksWrapper}>
            <div className={styles.links}>
              <p className={styles.links__header}>Navigation</p>
              <div className={styles.links__content}>
                {map(FOOTER_NAV_LINKS, (item, index) => (
                  <p key={index}>{item.label}</p>
                ))}
              </div>
            </div>
            <div className={styles.links}>
              <p className={styles.links__header}>Info</p>
              <div className={styles.links__content}>
                {map(INFO_LINKS, (item, index) => (
                  <p key={index}>{item.label}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs">© lou1sse on GitHub. 2024</p>
      </div>
    </footer>
  )
}

export default FooterComponent
