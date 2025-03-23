export type Drink = {
  dateModified: string
  idDrink: string
  strAlcoholic: string
  strCategory: string
  strCreativeCommonsConfirmed: string
  strDrink: string
  strDrinkAlternate: null
  strDrinkThumb: string
  strGlass: string
  strIBA: string
  strImageAttribution: string
  strImageSource: string
  [key: `strIngredient${number}`]: string | null
  strInstructions: string
  'strInstructionsZH-HANS': null
  'strInstructionsZH-HANT': null
  [key: `strMeasure${number}`]: string | null
  strTags: string
  strVideo: null
}
