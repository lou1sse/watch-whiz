import moment, { Moment } from "moment"

function formatDate(date: string | Moment | Date, pattern?: string) {
  return moment(date).format(pattern || "MMMM DD, YYYY")
}

export { formatDate }
