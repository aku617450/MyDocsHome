import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home/App'
import Docs from './pages/Docs/App'
import Components from './pages/Components/App'
import Blogs from './pages/Blogs/App'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/MyDocsHome/dist/" element={<Home />} />
        <Route path="/MyDocsHome/dist/docs" element={<Docs />} />
        <Route path="/MyDocsHome/dist/components" element={<Components />} />
        <Route path="/MyDocsHome/dist/blogs" element={<Blogs />} />
      </Routes>
    </div>
  )
}

export default App
