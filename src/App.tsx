import { createEffect, createSignal } from 'solid-js'
import { Calendar, RangeDate } from '.'

function App() {
  const [date, setDate] = createSignal<RangeDate>({
    dateFrom: {},
    dateTo: {}
  })

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
      <Calendar<'range'>
        format={{
          locale: 'en-GB',
          options: {
            dateStyle: 'full',
            timeStyle: 'long',
            timeZone: 'Australia/Sydney'
          }
        }}
        date={date}
        setDate={setDate}
        type='range'
      />
    </main>
  )
}

export default App
