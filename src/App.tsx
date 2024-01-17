import { CalendarWrapper } from './components/Calendar/CalendarWrapper'

function App() {
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
      <CalendarWrapper type='form' />
    </main>
  )
}

export default App
