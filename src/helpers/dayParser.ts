import type { Day, DaysOfWeek } from "../components/Calendar/interfaces/Provider";

interface Props {
  actualMonth: Date[];
  prevMonth: Date[];
  nextMonth: Date[];
  daysOfWeek: DaysOfWeek;
}

const NEXT_MONTH_WEEK = [0, 6];
const DAYS_IN_WEEK = 7;
export const dayParser = ({ actualMonth, prevMonth, nextMonth, daysOfWeek }: Props) => {
  const mapDays = (days: Date[]): Day[] =>
    days.map(day => ({
      nDay: day.getDay(),
      day: daysOfWeek[day.getDay() as keyof DaysOfWeek],
      date: day.getDate(),
      month: day.getMonth() + 1,
      year: day.getFullYear()
    }));

  const daysOfMonthMap = mapDays(actualMonth);

  const subPrevMonth = mapDays(prevMonth.slice(-daysOfMonthMap[0]?.nDay));

  const subNextMonth = mapDays(nextMonth.slice(NEXT_MONTH_WEEK[0], NEXT_MONTH_WEEK[1]));

  const month = [...subPrevMonth, ...daysOfMonthMap, ...subNextMonth];

  const parsedMonth = () => {
    const parsedMonth: Day[][] = [];
    month.reduce((acc, el, i) => {
      const currentWeek = Math.floor(i / DAYS_IN_WEEK);

      if (!acc[currentWeek]) {
        acc[currentWeek] = [];
      }

      acc[currentWeek].push({
        day: el.date,
        date: el.date,
        month: el.month,
        year: el.year,
        nDay: el.nDay
      });
      return acc;
    }, parsedMonth);

    return parsedMonth;
  };

  return parsedMonth();
};
