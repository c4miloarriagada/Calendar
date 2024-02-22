import { CalendarWrapper } from '.'

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
      <CalendarWrapper type='range' />
    </main>
  )
}

export default App
