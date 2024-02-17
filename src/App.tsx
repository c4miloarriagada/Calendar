import { createSignal } from 'solid-js'
import { CalendarWrapper, Date } from './components/Calendar/CalendarWrapper'

function App() {
  const [date, setDate] = createSignal<Date>({})

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
      <CalendarWrapper date={date} setDate={setDate} type='range' />
    </main>
  )
}

export default App
