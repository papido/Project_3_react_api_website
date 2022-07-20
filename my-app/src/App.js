import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/ui/Header'

const App = () => {
  const [items, setItems] = useState([])
  const [idLoading, setIsLoading] = useState(true)

  useEffect
  return (
    <div className="container">
      <Header />
    </div>
  )
}

export default App
