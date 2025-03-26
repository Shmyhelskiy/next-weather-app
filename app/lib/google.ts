'use server';
import { Client } from "@googlemaps/google-maps-services-js"

const client = new Client();

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_KEY;

export const autocomplite = async (input: string) => {
  if (!input) return [];
    
  try {
    const response = await client.placeAutocomplete({
      params: {
        input,
        key: apiKey!,
      },
    })

    return response.data.predictions;
  } catch (error) {
    console.log(error);
  }
}