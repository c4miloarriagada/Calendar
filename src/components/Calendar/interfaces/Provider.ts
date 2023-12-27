export interface Calendar {
  today?: Date;
  darkMode?: boolean;
  daysOfMonth?: { daysOfMonth: Date[] };
  daysOfWeek?: string[];
}

export interface Actions {
  getDaysOfMonth?: (month?: number, year?: number) => void;
}
