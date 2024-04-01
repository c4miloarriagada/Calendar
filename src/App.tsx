import { createSignal } from 'solid-js'
import { Calendar } from '.'

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
      <Calendar values={date} setValues={setDate} type='form' />
    </main>
  )
}

export default App
