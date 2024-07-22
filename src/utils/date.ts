import moment, { Moment } from "moment"

function formatDate(date: string | Moment | Date, pattern?: string) {
  return moment(date).format(pattern || "MMMM DD, YYYY")
}

function getDateRange(period: "week" | "month", pattern = "YYYY-MM-DD") {
  const startDate = moment().startOf(period).format(pattern)
  const endDate = moment().endOf(period).format(pattern)

  return {
    startDate,
    endDate
  }
}

export { formatDate, getDateRange }
