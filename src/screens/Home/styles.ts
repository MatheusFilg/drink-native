import { Platform, StyleSheet, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: 'withe',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  inputContainer: {
    flexDirection: 'row',
    flex: 1,
  },

  textInput: {
    borderWidth: 0.5,
    padding: 8,
    borderRadius: 4,
    borderColor: 'gray',
    flex: 1,
  },

  clearButton: {
    position: 'absolute',
    right: 10,
  },

  drinkItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#F5F5F5',
    padding: 10,
    margin: 4,
    gap: 4,
  },
  drinkThumb: {
    width: 60,
    height: 60,
  },

  errorMessage: {
    color: 'red',
    fontWeight: 'semibold',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 32,
  },
})
