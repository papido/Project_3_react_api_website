import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'

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
      <CharacterGrid IsLoading={IsLoading} items={items} />
    </div>
  )
}

export default App
