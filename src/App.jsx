import React from 'react'
import Pricing from './pages/Pricing'
import Homepage from './pages/Homepage'
import Howitworks from './pages/Howitworks'
import Aboutus from './pages/Aboutus'
import Notfoundpage from './pages/Notfoundpage'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Home route */}
        <Route path="/howitworks" element={<Howitworks/>} /> {/* About route */}
        <Route path="/aboutus" element={<Aboutus />} /> {/* Category route */}
        <Route path='/pricing' element={<Pricing />} />
        <Route path="*" element={<Notfoundpage />} />  {/* Catch-all route */}
      </Routes>
    </Router>
  )
}

export default App