import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Portfolio language="ja" />} />
        <Route path="/en" element={<Portfolio language="en" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
