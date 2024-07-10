import { MORE_DETAILS_TABS, MoreDetailsTabIds } from "@Config"
import { TabComponent, TooltipComponent } from "@GlobalComponents"
import {
  CastItem,
  CrewItem,
  useConfigurationUtilities,
  useMovieStore
} from "@Store"
import { useHover, useWindowSize } from "@uidotdev/usehooks"
import { map } from "lodash-es"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import SummaryComponent from "./SummaryComponent"
import styles from "./scss/styles.module.scss"

function TeamListItem({ data }: { data: CastItem | CrewItem }) {
  const { width } = useWindowSize()
  const [ref, hovering] = useHover()
  const isResponsive = (width as number) <= 600
  const role = "character" in data ? data.character : data.job

  return (
    <li className={styles.person}>
      {!isResponsive && <TooltipComponent text={role} show={hovering} />}
      <div ref={ref} className={styles.person__text}>
        <p>{data.name}</p>
        {isResponsive && <p>{role}</p>}
      </div>
    </li>
  )
}

function CreditsComponent() {
  const { width } = useWindowSize()
  const location = useLocation()
  const { details, credits, alternativeTitles } = useMovieStore(
    (state) => ({
      details: state.details,
      credits: state.credits,
      alternativeTitles: state.alternativeTitles
    })
  )
  const { countryNames } = useConfigurationUtilities(details)

  const [activeTab, setActiveTab] = useState<string>("cast")

  useEffect(() => {
    if (location && location.state) {
      setActiveTab(location.state.tab)
    }
  }, [location])

  const renderCastData = (castData: CastItem[]) => (
    <ul className={styles.creditsComponent__team}>
      {map(castData, (item) => (
        <TeamListItem key={item.cast_id} data={item} />
      ))}
    </ul>
  )

  const renderCrewData = (crewData: CrewItem[]) => (
    <ul className={styles.creditsComponent__team}>
      {map(crewData, (item) => (
        <TeamListItem key={item.credit_id} data={item} />
      ))}
    </ul>
  )

  const renderDetails = () => (
    <div className={styles.creditsComponent__details}>
      <div className={styles.item}>
        <p className={styles.item__label}>Country</p>
        <p className={styles.item__content}>{countryNames.join(", ")}</p>
      </div>
      <div className={styles.item}>
        <p className={styles.item__label}>Spoken Languages</p>
        <p className={styles.item__content}>
          {map(details.spoken_languages, "english_name").join(", ")}
        </p>
      </div>
      <div className={styles.item}>
        <p className={styles.item__label}>Alternative Titles</p>
        <p className={styles.item__content}>
          {map(alternativeTitles, "title").join(", ")}
        </p>
      </div>
    </div>
  )

  const mapTabContent: Record<MoreDetailsTabIds, () => JSX.Element> = {
    cast: () => renderCastData(credits.cast),
    crew: () => renderCrewData(credits.crew),
    details: () => renderDetails()
  }

  return (
    <div className={styles.creditsComponent}>
      <div className={styles.creditsComponent__description}>
        <span>{details.tagline}</span>
        <p>{details.overview}</p>
      </div>
      {(width as number) <= 1024 && <SummaryComponent />}
      <TabComponent
        defaultTabId={activeTab}
        tabs={MORE_DETAILS_TABS}
        onChangeTab={setActiveTab}
      />
      {mapTabContent[activeTab as MoreDetailsTabIds]()}
    </div>
  )
}

export default CreditsComponent
