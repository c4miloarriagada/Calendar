import { createSignal } from 'solid-js'
import { Calendar } from '.'
import type { RangeDate } from './components/Calendar/CalendarBase/interfaces/calendar.interface'

function App() {
  const [date, setDate] = createSignal<RangeDate>({
    dateTo: {},
    dateFrom: {}
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
      <Calendar date={date} setDate={setDate} type='range' />

      <button
        class=''
        onClick={() => {
          const body = document.querySelector('body')

          body?.classList.add('dark-mode')
        }}
      >
        DARKMODE
      </button>
    </main>
  )
}

export default App
