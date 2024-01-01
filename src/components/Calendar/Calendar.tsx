import { useCalendarContext } from "./Provider";
import { For } from "solid-js";
import { CalendarButtons } from "./CalendarButtons";
import style from "./Calendar.module.css";
import { dayParser } from "../../helpers/dayParser";

export const Calendar = () => {
  const [state, {  }] = useCalendarContext();
  const month = state.today?.toLocaleString("default", { month: "long" }).split(" ")[0];
  const year = state.today?.getFullYear();

  
  return (
    <div class={style["calendar-container"]}>
      <div class={style["calendar-buttons"]}>
        <span>
          <CalendarButtons iconDirection="left" />{" "}
        </span>
        <span>
          {" "}
          {month} {year}
        </span>
        <span>
          <CalendarButtons iconDirection="right" />{" "}
        </span>
      </div>
      <div>
        <table class={style["calendar-table"]} role="grid">
          <thead class={style["calendar-t-head"]}>
            <For each={Object.values(state?.daysOfWeek!)}>
              {header => <th class={style["calendar-days"]}>{header.substring(0, 2)}</th>}
            </For>
          </thead>
          <tbody>
            
            <For
              each={state.parsedActualMonth?.parsedActualMonth}
            >
              {days => (
                <tr>
                  <For each={days}>{day => <td>{day.day}</td>}</For>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
};

