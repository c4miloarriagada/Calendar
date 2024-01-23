export const dateNexValidator = (
  month: number,
  year: number
): [number, number] => {
  if (month + 1 === 12) {
    return [0, year + 1]
  }
  return [month + 1, year]
}
export const datePrevValidator = (
  month: number,
  year: number
): [number, number] => {
  if (month === 0) {
    return [11, year - 1]
  }
  return [month - 1, year]
}
