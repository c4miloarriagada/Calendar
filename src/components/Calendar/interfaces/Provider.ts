export interface Calendar {
  today?: Date
  month?: number
  year?: number
  darkMode?: boolean
  daysOfMonth: Date[]
}

export interface Actions {
  getDaysOfMonth?: () => void
}
