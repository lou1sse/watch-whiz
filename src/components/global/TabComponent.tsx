import { map } from "lodash-es"
import { useCallback, useEffect, useState } from "react"
import ClickableDivComponent from "./ClickableDivComponent"
import styles from "./scss/styles.module.scss"

type TabItem = Record<string, string>

type Props<T extends TabItem> = {
  tabs: T[],
  tabItemIdKey?: keyof T,
  tabItemLabelKey?: keyof T,
  defaultTabId?: keyof T,
  onChangeTab?: (item: keyof T) => void
}

function TabComponent<T extends TabItem>(props: Props<T>) {
  const {
    tabs,
    tabItemIdKey = "id",
    tabItemLabelKey = "label",
    defaultTabId,
    onChangeTab
  } = props

  const [selectedTabId, setSelectedTabId] = useState<keyof T>()

  useEffect(() => {
    const selected = defaultTabId || tabs[0][tabItemIdKey]
    setSelectedTabId(selected)
  }, [defaultTabId, tabs, tabItemIdKey])

  const checkSelectedTab = useCallback(
    (item: T) => item.id === selectedTabId,
    [selectedTabId]
  )

  const onClickTabItem = (item: T) => {
    if (onChangeTab) {
      onChangeTab(item[tabItemIdKey])
    }
    setSelectedTabId(item[tabItemIdKey])
  }

  return (
    <div className={styles.tabComponent}>
      <div className={styles.tabComponent__border} />
      {map(tabs, (item) => {
        const isSelected = checkSelectedTab(item)

        return (
          <ClickableDivComponent
            key={item[tabItemIdKey]}
            onClick={() => onClickTabItem(item)}
            className="z-50"
          >
            <p className={isSelected ? styles.selected : ""}>
              {item[tabItemLabelKey]}
            </p>
          </ClickableDivComponent>
        )
      })}
    </div>
  )
}

export default TabComponent
