import type { NavigationProp } from '@react-navigation/native'
import {
  FlatList,
  Pressable,
  SafeAreaView,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import type { AppStackParamList } from '../../routers'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { useDrinks } from '../../hooks/useDrink'

type HomeProps = {
  navigation: NavigationProp<AppStackParamList>
}

export const Home = ({ navigation }: HomeProps) => {
  const [searchText, setSearchText] = useState('')

  const { fetchDrinks, error, drinks, clear } = useDrinks()

  const clearInput = () => {
    setSearchText('')
    clear()
  }

  const handleItemClick = (idDrink: string) => {
    navigation.navigate('Details', {
      drinkId: idDrink,
    })
  }

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={{ paddingHorizontal: 8 }}>
        <View style={styles.header}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Input your drink name"
              onChangeText={setSearchText}
              value={searchText}
            />

            {searchText.length > 0 && (
              <Pressable style={styles.clearButton} onPress={clearInput}>
                <Ionicons name="close-outline" size={32} />
              </Pressable>
            )}
          </View>
          {/* Button é p texto e Pressable pode ser qualquer coisa */}
          <Pressable onPress={() => fetchDrinks(searchText)}>
            <Ionicons name="search" size={24} />
          </Pressable>
        </View>

        {error && <Text style={styles.errorMessage}>{error}</Text>}

        <FlatList
          data={drinks}
          keyExtractor={item => item.idDrink}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.drinkItemContainer}
              onPress={() => handleItemClick(item.idDrink)}
            >
              <Image
                source={{ uri: item.strDrinkThumb }}
                style={styles.drinkThumb}
              />
              <View>
                <Text>{item.strDrink}</Text>
                <Text>
                  {item.strAlcoholic === 'Alcoholic'
                    ? 'Alcoholic'
                    : 'Non-Alcoholic'}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  )
}
