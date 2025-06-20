import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const queryString = searchParams.toString();

  try {
    const response = await fetch(`https://plex-parser.ru-rating.ru/cars?${queryString}`);
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error(error);
    return new Response("Ошибка при получении данных", { status: 500 });
  }
}