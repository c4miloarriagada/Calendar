import { useCalendarContext } from '../CalendarBase/Provider'
import { TableBody } from '../CalendarBase/TableBody'
import { TableHeader } from '../CalendarBase/TableHeader'
import { HandlerRange } from './HandlerRange'
import style from '../Calendar.module.css'

export const CalendarRange = () => {
  const [state, { setActiveDate }] = useCalendarContext()
  return (
    <div class={style['calendar-container-range']}>
      <HandlerRange
        nextMonth={state.nextMonth?.nextMonth!}
        actualMonth={state?.actualMonth?.actualMonth!}
      />
      <div class={style['calendar-container-range__range_wrapper']}>
        <div class={style['calendar-container-range__container']}>
          <div class={style['calendar-container__table-container']}>
            <table class={style['calendar-container__table']} role='grid'>
              <TableHeader daysOfWeek={state?.daysOfWeek!} />
              <TableBody
                dateBegin={state.activeDate?.activeDate.dateBegin ?? null}
                currentMonth={state.actualMonth?.actualMonth!}
                setActiveDate={setActiveDate}
                activeDay={state.activeDate?.activeDate.dateEnd ?? null}
                actualMonth={state.parsedActualMonth?.parsedActualMonth!}
              />
            </table>
          </div>
        </div>
        <div class={style['calendar-container-range__container']}>
          <div class={style['calendar-container__table-container']}>
            <table class={style['calendar-container__table']} role='grid'>
              <TableHeader daysOfWeek={state?.daysOfWeek!} />
              <TableBody
                dateBegin={state.activeDate?.activeDate.dateBegin ?? null}
                currentMonth={state.nextMonth?.nextMonth!}
                setActiveDate={setActiveDate}
                activeDay={state.activeDate?.activeDate.dateEnd ?? null}
                actualMonth={state.rangeNextDays!}
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
