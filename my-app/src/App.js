import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/ui/Header'

const App = () => {
  const [items, setItems] = useState([])
  const [idLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul`
      )
      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
    </div>
  )
}

export default App
