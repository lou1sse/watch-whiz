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
    route: "/search"
  },
  {
    label: "Popular",
    route: "/search"
  },
  {
    label: "Upcoming",
    route: "/search"
  }
]

const FOOTER_NAV_LINKS = [
  {
    label: "Popular",
    route: "/search"
  },
  {
    label: "Upcoming",
    route: "/search"
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

/* FILTERS */
const SORT_BY = [
  { id: "film_name", payload: "title.asc", label: "Film Name" },
  { label: "Release date" },
  {
    id: "earliest_release",
    payload: "release_date.asc",
    label: "Earliest first",
    section: "Release date"
  },
  {
    id: "newest_release",
    payload: "release_date.desc",
    label: "Newest first",
    section: "Release date"
  },
  { label: "Rating" },
  {
    id: "lowest_rating",
    payload: "vote_average.asc",
    label: "Lowest first",
    section: "Rating"
  },
  {
    id: "highest_rating",
    payload: "vote_average.desc",
    label: "Highest first",
    section: "Rating"
  },
  { label: "Popularity" },
  {
    id: "all_time",
    payload: "popularity.desc",
    label: "All Time",
    section: "Popularity"
  },
  {
    id: "year",
    payload: "popularity.desc",
    label: "This year",
    section: "Popularity"
  },
  {
    id: "month",
    payload: "popularity.desc",
    label: "This month",
    section: "Popularity"
  },
  {
    id: "week",
    payload: "popularity.desc",
    label: "This week",
    section: "Popularity"
  }
]

const FILTERS = {
  SORT_BY
}

export {
  API_URL,
  API_KEY,
  POSTER_URL,
  DEFAULT_HEADERS,
  HEADER_NAV_LINKS,
  FOOTER_NAV_LINKS,
  INFO_LINKS,
  MORE_DETAILS_TABS,
  FILTERS
}
