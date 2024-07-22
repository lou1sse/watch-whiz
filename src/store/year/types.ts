export type YearState = {
  decades: string[],
  yearsInDecade: string[],
  setDecades: (props: { start_year: string, end_year: string }) => void,
  setYeardInDecade: (data: string) => void
}
