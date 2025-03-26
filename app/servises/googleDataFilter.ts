import { PlaceAutocompleteResult } from "@googlemaps/google-maps-services-js";

export const filterGoogleData = (predictions: PlaceAutocompleteResult[]): PlaceAutocompleteResult[] => {
  const filtred = JSON.parse(JSON.stringify(predictions))
  
  return filtred.filter((item: PlaceAutocompleteResult) => item.description.split(' ').length <= 4)
}