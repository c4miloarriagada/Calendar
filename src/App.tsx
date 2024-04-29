import { createSignal } from 'solid-js'
import { Calendar, SingleDate } from '.'

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
      <Calendar<'single'> date={date} setDate={setDate} type='single' />
    </main>
  )
}

export default App
