export interface Calendar {
  today?: Date
  month?: number
  year?: number
  darkMode?: boolean
}

export interface Actions {
  getDaysOfMonth?: (month: number, year: number) => Date[]
}
