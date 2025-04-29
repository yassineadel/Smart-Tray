import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import Footer from './Components/Footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='Container'>
    <Header />
    <MainContent />
    <Footer />
    </div>
  )
}

export default App
