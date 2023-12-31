import type { DaysOfWeek } from "../components/Calendar/interfaces/Provider";

interface Props {
  actualMonth: Date[];
  prevMonth: Date[];
  nextMonth: Date[];
  daysOfWeek: DaysOfWeek;
}

interface Day {
  nDay: number;
  day: string;
  date: number;
  month: number;
  year: number;
}

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

  const subNextMonth = mapDays(
    nextMonth.slice(-daysOfMonthMap[daysOfMonthMap?.length - 1]?.nDay, 6)
  );

  const month = [...subPrevMonth, ...daysOfMonthMap, ...subNextMonth];

  const parsedMonth = [];
  for (let i = 0; i <= month.length; i++) {
    if (Math.floor(i % 7) === 0 && i !== 0) {
      const orderedWeek = month.slice(i - 7, i).reduce((acc, el) => {
        acc = { ...acc, [el.nDay]: el.date };
        return acc;
      }, {});
      parsedMonth.push(orderedWeek);
    }
  }

  return parsedMonth;
};
