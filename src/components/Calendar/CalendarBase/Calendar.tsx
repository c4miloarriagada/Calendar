import { createEffect } from 'solid-js'
import { useCalendarContext } from './Provider'
import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'
import { Handler } from './Handler'
import style from './../Calendar.module.css'

export const Calendar = () => {
  const [state, { setCalendarMonth, setActiveDate }] = useCalendarContext()

  createEffect(() => {
    setCalendarMonth(state.type!)
  })

  return (
    <div class={style['calendar-container']}>
      <Handler actualMonth={state?.actualMonth?.actualMonth!} />
      <div class={style['calendar-container__table-container']}>
        <table class={style['calendar-container__table']} role='grid'>
          <TableHeader daysOfWeek={state?.daysOfWeek!} />
          <TableBody
            currentMonth={state.actualMonth?.actualMonth!}
            setActiveDate={setActiveDate}
            activeDay={state.activeDate?.activeDate.dateEnd ?? null}
            actualMonth={state.parsedActualMonth?.parsedActualMonth!}
          />
        </table>
      </div>
    </div>
  )
}
