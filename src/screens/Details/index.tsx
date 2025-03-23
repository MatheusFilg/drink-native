import type { RouteProp } from '@react-navigation/native'
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native'
import { useDrinkById } from '../../hooks/useDrinkById'
import { styles } from './styles'

// informando quais props serão recebidas
type DetailsScreenRouteProps = RouteProp<
  { Details: { drinkId: string } },
  'Details'
>

// tipando o que o route deve mandar pra a rota de Details
interface DetailsProp {
  route: DetailsScreenRouteProps
}

// por ser um componente que vai ser invocado, é possivel tipar o componente
export const Details: React.FC<DetailsProp> = ({ route }) => {
  const { drink, error, loading } = useDrinkById(route.params.drinkId)
  if (loading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.indicator}>
        <Text>{error}</Text>
      </View>
    )
  }

  const ingredients = Array.from({ length: 15 }, (_, i) => ({
    ingredient: drink?.[`strIngredient${i + 1}`] || '',
    measure: drink?.[`strMeasure${i + 1}`] || 'to taste',
  })).filter(item => item.ingredient)

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: drink?.strDrinkThumb }}
        style={styles.headerImage}
      />
      <Text style={styles.drinkName}>{drink?.strDrink}</Text>
      <Text style={styles.category}>
        {drink?.strCategory} - {drink?.strAlcoholic}
      </Text>
      <Text style={styles.glass}>Served In: {drink?.strGlass}</Text>

      <Text style={styles.sectionTitle}>Ingredients: </Text>
      {ingredients.map(({ ingredient, measure }, index) => (
        <Text key={index}>
          {ingredient} - {measure}
        </Text>
      ))}
      <Text style={styles.sectionTitle}>Instructions:</Text>
      <Text>{drink?.strInstructions}</Text>
    </ScrollView>
  )
}
