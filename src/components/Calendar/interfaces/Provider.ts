export interface Calendar {
  today?: Date
  month?: number
  year?: number
  darkMode?: boolean
}

export interface Actions {
  getDaysOfMonth?: () => void
}
