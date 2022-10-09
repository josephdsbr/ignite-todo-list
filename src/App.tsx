import './App.css'
import Header from './components/Header'
import Table from './components/Table'
import Provider from './context/tasks.context'

function App() {

  return (
    <Provider>
      <main className='main'>
        <Header />
        <Table />
      </main>
    </Provider>
   
  )
}

export default App
