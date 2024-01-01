export interface Calendar {
  today?: Date;
  darkMode?: boolean;
  actualMonth?: { actualMonth: Date[] };
  daysOfWeek?: DaysOfWeek;
  prevMonth?: { prevMonth: Date[] };
  nextMonth?: { nextMonth: Date[] };
  parsedActualMonth?: { parsedActualMonth: Day[][] };
}

export type Months = {
  prev: number;
  actual: number;
  next: number;
};

export type DaysOfWeek = {
  0: "Sunday";
  1: "Monday";
  2: "Tuesday";
  3: "Wednesday";
  4: "Thursday";
  5: "Friday";
  6: "Saturday";
};
export interface Actions {
  getDaysOfMonth: (month?: number, year?: number) => void;
}

export interface Day {
  nDay: number;
  day: string | number;
  date: number;
  month: number;
  year: number;
}
