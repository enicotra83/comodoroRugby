import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Layout from './components/Layout'
import Home from './containers/home/Home'
import Historia from './containers/historia/Historia'
import Torneos from './containers/torneos/Torneos'
import Contacto from './components/contacto/Contacto'
import Horarios from './components/horarios/Horarios'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='historia' element={<Historia />}></Route>
            <Route path='torneos' element={<Torneos />}></Route>
            <Route path='contacto' element={<Contacto />}></Route>
            <Route path='horarios' element={<Horarios />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
