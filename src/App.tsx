import { createSignal } from 'solid-js'
import { Calendar } from '.'
import type { SingleDate } from './components/Calendar/CalendarBase/interfaces/calendar.interface'

function App() {
  const [date, setDate] = createSignal<SingleDate>({
    date: {}
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
      <Calendar date={date} setDate={setDate} type='form' />
    </main>
  )
}

export default App
