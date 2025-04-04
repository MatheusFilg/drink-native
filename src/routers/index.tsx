import { createStackNavigator } from '@react-navigation/stack'
import { Home, Details } from '../screens'

export type AppStackParamList = {
  Home: undefined
  Details: {
    drinkId: string
  }
}

const AppStack = createStackNavigator()

export const Routes = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <AppStack.Screen name="Details" component={Details} />
  </AppStack.Navigator>
)
