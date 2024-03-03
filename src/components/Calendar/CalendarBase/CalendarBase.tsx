import { useCalendarContext } from './Provider'
import { Handler } from './Handler'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'
import style from '../Calendar.module.css'

export const CalendarBase = () => {
  const [state, { setActiveDate }] = useCalendarContext()

  return (
    <div role='application' class={style['calendar-container']}>
      <Handler actualMonth={state?.actualMonth?.actualMonth!} />
      <div class={style['calendar-container__table-container']}>
        <table class={style['calendar-container__table']} role='grid'>
          <TableHeader daysOfWeek={state?.daysOfWeek!} />
          <TableBody
            type={state.type}
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
