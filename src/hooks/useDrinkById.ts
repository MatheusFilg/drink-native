import { useEffect, useState } from 'react'
import type { Drink } from '../types/drink'

export const useDrinkById = (drinkId: string) => {
  const [drink, setDrink] = useState<Drink>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`,
        )
        const data = await response.json()
        setDrink(data.drinks[0])
      } catch (error) {
        setError('Error to fetch drink details !')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  return { loading, error, drink }
}
