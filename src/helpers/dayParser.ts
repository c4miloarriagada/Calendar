import type { DaysOfWeek } from "../components/Calendar/interfaces/Provider";

interface Props {
  daysOfMonth: Date[];
  daysOfWeek: DaysOfWeek;
}

export const dayParser = ({ daysOfMonth, daysOfWeek }: Props) => {
  const daysOfWeekIndex = Object.keys(daysOfWeek);

  let count = 0;
  let week = 0;

  const daysOfMonthMap = daysOfMonth.reduce((acc, date) => {
    const dayOfWeekKey = daysOfWeek[date.getDay() as keyof DaysOfWeek];

    if (!acc.has(week)) {
      acc.set(week, {});
    }

    if (!acc.get(week)![dayOfWeekKey]) {
      acc.get(week)![dayOfWeekKey] = [];
    }

    acc.get(week)![dayOfWeekKey].push({ day: dayOfWeekKey, date: date.getDate() });

    count++;

    if (count === 7) {
      count = 0;
      week++;
    }

    return acc;
  }, new Map<number, Record<string, { day: string; date: number }[]>>());

  return daysOfMonthMap;
};
