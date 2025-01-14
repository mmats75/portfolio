import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Portfolio language="ja" />} />
        <Route path="/portfolio/en" element={<Portfolio language="en" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
