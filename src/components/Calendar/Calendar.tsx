import {  useCalendarContext } from './Provider'
import { CalendarButtons } from './CalendarButtons'
import style from './Calendar.module.css'


export const Calendar = () => {

  const [state,  ] = useCalendarContext()

  const  month = state.today?.toLocaleString('default',{ month: 'long'}).split(" ")[0]
  const year = state.today?.getFullYear()



  return (
   
    <div class={style['calendar-container']}>
        <div class={style['calendar-buttons']}>
          <span><CalendarButtons iconDirection='left' /> </span>
          <span> {month} { year}</span>
          <span><CalendarButtons iconDirection='right'  /> </span>
          
        </div>
        <div>
          <table class={style['calendar-table']}  role='grid'>
            <thead class={style['calendar-t-head']}>
              <tr >
                <th class={style['calendar-days']}>Su</th>
                <th class={style['calendar-days']}>Mo</th>
                <th class={style['calendar-days']}>Tu</th>
                <th class={style['calendar-days']}>We</th>
                <th class={style['calendar-days']}>Th</th>
                <th class={style['calendar-days']}>Fr</th>
                <th class={style['calendar-days']}>Sa</th>
              </tr>
            </thead>

          </table>
         
        </div>
    </div>
   
  )
}
