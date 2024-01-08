import type {
  Day,
  DaysOfWeek
} from '../components/Calendar/interfaces/Provider'

interface Props {
  actualMonth: Date[]
  prevMonth: Date[]
  nextMonth: Date[]
  daysOfWeek: DaysOfWeek
  today: Date
}

const NEXT_MONTH_WEEK = [0, 10]
const DAYS_IN_WEEK = 7
export const dayParser = ({
  actualMonth,
  prevMonth,
  nextMonth,
  daysOfWeek,
  today
}: Props) => {
  const mapDays = (days: Date[], active: boolean): Day[] =>
    days.map((day) => ({
      nDay: day.getDay(),
      day: Number(daysOfWeek[day.getDay() as keyof DaysOfWeek]),
      date: day.getDate(),
      month: day.getMonth(),
      year: day.getFullYear(),
      activeMonth: active,
      today: today.toDateString() === day.toDateString()
    }))

  const sundayValidator = (day: number) => {
    if (day === 0) {
      return 6
    }
    return day
  }

  const daysOfMonthMap = mapDays(actualMonth, true)

  const subPrevMonth = mapDays(
    prevMonth.slice(-sundayValidator(daysOfMonthMap[0]?.nDay)),
    false
  )

  const subNextMonth = mapDays(
    nextMonth.slice(NEXT_MONTH_WEEK[0], NEXT_MONTH_WEEK[1]),
    false
  )

  const month = [...subPrevMonth, ...daysOfMonthMap, ...subNextMonth]

  const parsedMonth = (): Day[][] => {
    const parsedMonth: Day[][] = []
    month.reduce((acc, el, i) => {
      const currentWeek = Math.floor(i / DAYS_IN_WEEK)

      if (!acc[currentWeek]) {
        acc[currentWeek] = []
      }

      acc[currentWeek].push({
        day: el.date,
        date: el.date,
        month: el.month,
        year: el.year,
        nDay: el.nDay,
        activeMonth: el.activeMonth,
        today: el.today
      })
      return acc
    }, parsedMonth)
    return parsedMonth
  }
  const filteredParsedMonth = parsedMonth().filter((week) => week.length >= 7)

  return filteredParsedMonth
}
