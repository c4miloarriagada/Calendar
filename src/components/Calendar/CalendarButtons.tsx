import { Match, Switch } from "solid-js";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "solid-icons/hi";
import style from "./Calendar.module.css";
import { useCalendarContext } from "./Provider";
type Direction = "right" | "left";

interface Props {
  iconDirection: Direction;
}

export const CalendarButtons = (props: Props) => {
  const [state, { getDaysOfMonth }] = useCalendarContext();

  const handleClick = (iconDirection: Direction) => {
    if (iconDirection === "left") {
      getDaysOfMonth(state.actualMonth?.actualMonth[0]?.getMonth()! - 1, state.today?.getFullYear());
    }
    if (iconDirection === "right") {
      getDaysOfMonth(state.actualMonth?.actualMonth[0]?.getMonth()! + 1, state.today?.getFullYear());
    }
  };

  return (
    <Switch>
      <Match when={props.iconDirection === "left"}>
        <button onclick={() => handleClick(props.iconDirection)} class={style["month-button"]}>
          <HiOutlineChevronLeft color="#858f96" size={15} />
        </button>
      </Match>
      <Match when={props.iconDirection === "right"}>
        <button onclick={() => handleClick(props.iconDirection)} class={style["month-button"]}>
          <HiOutlineChevronRight color="#858f96" size={15} />
        </button>
      </Match>
    </Switch>
  );
};
