import { createSignal } from 'solid-js'
import { CalendarWrapper } from '.'

function App() {
  const [date, setDate] = createSignal({})
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
