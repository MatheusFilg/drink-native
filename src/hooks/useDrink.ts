import { useState } from 'react'
import type { Drink } from '../types/drink'

export const useDrinks = () => {
  const [error, setError] = useState('')
  const [drinks, setDrinks] = useState<Drink[]>([])

  const fetchDrinks = async (searchText: string) => {
    if (searchText.length === 0) {
      return
    }
    try {
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`,
      )
      const data = await response.json()

      if (!data.drinks || data.drinks.length === 0) {
        setError('No Drinks found, try again !')
      }
      setDrinks(data.drinks)
    } catch (error) {
      setError('Error on drinking search, try again later')
    }
  }

  const clear = () => {
    setDrinks([])
    setError('')
  }

  return { fetchDrinks, clear, drinks, error }
}
