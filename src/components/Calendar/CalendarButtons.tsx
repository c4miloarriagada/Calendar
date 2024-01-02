import { Match, Switch } from "solid-js";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "solid-icons/hi";
import style from "./Calendar.module.css"
type Direction = "right" | "left";

interface Props {
  iconDirection: Direction;
}

export const CalendarButtons = (props: Props) => {
  
  return (
    <Switch>
      <Match when={props.iconDirection === "left"}>
        <button class={style["month-button"]}>
          <HiOutlineChevronLeft  color="#858f96" size={15} />
        </button>
      </Match>
      <Match when={props.iconDirection === "right"}>
        <button class={style["month-button"]}>
          <HiOutlineChevronRight color="#858f96" size={15} />
        </button>
      </Match>
    </Switch>
  );
};
