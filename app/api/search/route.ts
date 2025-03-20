import { getWeather } from "@/app/servises/fetchFunctions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    if (!query) {
      return NextResponse.json({ message: "Query is required" }, { status: 400 });
    }
  
    const weather = await getWeather(query);
    
    return NextResponse.json(weather);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message }, { status: 500 });
  }
}
