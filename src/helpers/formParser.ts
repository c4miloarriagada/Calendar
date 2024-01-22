import type { Day } from '../components/Calendar/CalendarBase/interfaces/calendar.interface'

export const formParser = (month: Day[][], today: Date) => {
  const calendarForm: Day[][] = []
  month.forEach((weeks) => {
    const weekParsed = weeks.map((days) => {
      const currentWeek = new Date(days.year, days.month, days.day)
      if (currentWeek > today) {
        const newDay = {
          ...days,
          ['activeMonth']: false,
          ['activeDate']: false,
          ['disabled']: true
        }
        return newDay
      }
      return days
    })
    calendarForm.push(weekParsed)
  })

  return calendarForm
}
