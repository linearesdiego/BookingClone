import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home'
import { ListHotel } from './pages/listHotel/ListHotel'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<ListHotel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
