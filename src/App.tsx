import { createEffect, createSignal } from 'solid-js'
import { CalendarWrapper } from './components/Calendar/CalendarWrapper'
import { Dates } from './components/Calendar/CalendarBase/interfaces/calendar.interface'

function App() {
  const [date, setDate] = createSignal<Dates>({})

  createEffect(() => {
    console.log(date())
  })
  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center'
      }}
    >
      <CalendarWrapper dates={date} setDates={setDate} type='range' />
    </main>
  )
}

export default App
