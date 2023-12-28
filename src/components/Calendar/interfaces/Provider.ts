export interface Calendar {
  today?: Date;
  darkMode?: boolean;
  daysOfMonth?: { daysOfMonth: Date[] };
  daysOfWeek?: DaysOfWeek;
}

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
  getDaysOfMonth?: (month?: number, year?: number) => void;
}
