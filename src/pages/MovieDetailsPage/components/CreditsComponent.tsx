import { MORE_DETAILS_TABS, MoreDetailsTabIds } from "@Config"
import { TabComponent } from "@GlobalComponents"
import { CastItem, CrewItem, MovieCreditsResponse } from "@Store"
import { map } from "lodash-es"
import { useState } from "react"
import styles from "./scss/styles.module.scss"

type Props = {
  data: MovieCreditsResponse,
  tagline: string,
  overview: string
}

function CreditsComponent(props: Props) {
  const { data, tagline, overview } = props
  const [activeTab, setActiveTab] = useState<string>("cast")

  const renderCastData = (castData: CastItem[]) => (
    <ul className={styles.creditsComponent__team}>
      {map(castData, (item) => (
        <li key={item.cast_id} className={styles.person}>
          {item.name}
        </li>
      ))}
    </ul>
  )

  const renderCrewData = (crewData: CrewItem[]) => (
    <ul className={styles.creditsComponent__team}>
      {map(crewData, (item) => (
        <li key={item.credit_id} className={styles.person}>
          {item.name}
        </li>
      ))}
    </ul>
  )

  const renderDetails = () => <p>test</p>

  const mapTabContent: Record<MoreDetailsTabIds, () => JSX.Element> = {
    cast: () => renderCastData(data.cast),
    crew: () => renderCrewData(data.crew),
    details: () => renderDetails()
  }

  return (
    <div className={styles.creditsComponent}>
      <div className={styles.creditsComponent__description}>
        <span>{tagline}</span>
        <p>{overview}</p>
      </div>
      <TabComponent tabs={MORE_DETAILS_TABS} onChangeTab={setActiveTab} />
      {mapTabContent[activeTab as MoreDetailsTabIds]()}
    </div>
  )
}

export default CreditsComponent
