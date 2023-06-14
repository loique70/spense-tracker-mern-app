import Form from './components/Form';
import Graph from './components/Graph';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
 

  return (
    <div className="App">
     <div className="">
      <Header/>
      {/*Grid colums*/}
      <div className="grid md:grid-cols-2 gap-4">
         {/*Chart or grap */}
         <Graph />
         {/*form*/}
         <Form />
         <Footer/>
      </div>
     </div>
    </div>
  )
}

export default App
