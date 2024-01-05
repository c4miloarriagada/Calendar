export const daysOfTheMonthParse = (date: Date, month: number) => {
  const daysInMonth: Date[] = []
  while (date.getMonth() === month) {
    daysInMonth.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return daysInMonth
}
