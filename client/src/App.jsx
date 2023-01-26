import Form from './components/Form';
import Graph from './components/Graph';
import './App.css'

function App() {
 

  return (
    <div className="App">
     <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-90">
      <h1 className="bg-slate-800 text-white text-3xl py-8 mb-10 rounded">Expense Tracker</h1>
      {/*Grid colums*/}
      <div className="grid md:grid-cols-2 gap-4">
         {/*Chart or grap */}
         <Graph />
         {/*form*/}
         <Form />
      </div>
     </div>
    </div>
  )
}

export default App
