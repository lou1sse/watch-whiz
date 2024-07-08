const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY
const POSTER_URL = import.meta.env.VITE_POSTER_URL

const DEFAULT_HEADERS = {
  "Content-Type": "application/json"
}

const HEADER_NAV_LINKS = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "Films",
    route: "/films"
  },
  {
    label: "Upcoming",
    route: "/upcoming"
  },
  {
    label: "Popular",
    route: "/popular"
  }
]

const FOOTER_NAV_LINKS = [
  {
    label: "Upcoming",
    route: "/upcoming"
  },
  {
    label: "Popular",
    route: "/popular"
  },
  {
    label: "About",
    route: "/about"
  },
  {
    label: "Contact",
    route: "/contact"
  }
]

const INFO_LINKS = [
  {
    label: "LinkedIn",
    route: "/"
  },
  {
    label: "GitHub",
    route: "/"
  }
]

const MORE_DETAILS_TABS = [
  {
    id: "cast",
    label: "Cast"
  },
  {
    id: "crew",
    label: "Crew"
  },
  {
    id: "details",
    label: "Details"
  }
]

export {
  API_URL,
  API_KEY,
  POSTER_URL,
  DEFAULT_HEADERS,
  HEADER_NAV_LINKS,
  FOOTER_NAV_LINKS,
  INFO_LINKS,
  MORE_DETAILS_TABS
}
