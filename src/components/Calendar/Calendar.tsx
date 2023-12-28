import { useCalendarContext } from './Provider';
import { For, createEffect } from 'solid-js';
import { CalendarButtons } from './CalendarButtons';
import { dayParser } from '../../helpers/dayParser';
import style from './Calendar.module.css';

export const Calendar = () => {
  const [state, { getDaysOfMonth }] = useCalendarContext();
  const month = state.today?.toLocaleString('default', { month: 'long' }).split(' ')[0];
  const year = state.today?.getFullYear();
  createEffect(() => {
    getDaysOfMonth && getDaysOfMonth();
  });

  return (
    <div class={style['calendar-container']}>
      <div class={style['calendar-buttons']}>
        <span>
          <CalendarButtons iconDirection="left" />{' '}
        </span>
        <span>
          {' '}
          {month} {year}
        </span>
        <span>
          <CalendarButtons iconDirection="right" />{' '}
        </span>
      </div>
      <div>
  <table class={style['calendar-table']} role="grid">
  <thead class={style['calendar-t-head']}>
   
      <For each={Object.values(state?.daysOfWeek!)}>
        {(header) => (
          <th class={style['calendar-days']}>{header.substring(0, 2)}</th>
        )}
      </For>
   
  </thead>
  <tbody>
    <For each={dayParser({ daysOfMonth: state?.daysOfMonth?.daysOfMonth!, daysOfWeek: state?.daysOfWeek! })}>
      {(days, index) => (
        <tr>
          <td>{index() >= 5 ? days.day : ''}</td>
        </tr>
      )}
    </For>
  </tbody>
</table>

      </div>
    </div>
  );
};
