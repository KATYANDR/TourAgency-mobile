import axios from "axios";
// import * as dotenv from 'dotenv';

// dotenv.config();

// const strapi_url = process.env.HOST;
const strapi_url = "172.20.10.2";

// Типы для изображений
interface PictureFormat {
  url: string;
}

interface Picture {
  formats?: {
    thumbnail?: PictureFormat;
    large?: PictureFormat;
  };
  url?: string;
}

// Типы для тура
export interface TourType {
  title: string;
  description: string;
  cost: number;
  rate: number;
  startDate: Date;
  endDate: Date;
  images: { thumbnail: string; large: string }[];
}

// Функция получения туров с API
export const getTours = async (): Promise<TourType[] | null> => {
  try {
    const response = await axios.get<{ data: Array<any> }>(
      "http://" + strapi_url + ":1337/api/tours?populate=*"
    );

    const data = response.data.data;

    if (!data || data.length === 0) {
      console.warn("Ответ пустой");
      return [];
    }

    // Форматируем туры
    return data.map(post => {
      const { title, description, cost, rate, pictures, startDate, endDate } = post;

      const images = (pictures || []).map((pic: Picture) => ({
        thumbnail: `http://${strapi_url}:1337${pic.formats?.thumbnail?.url || ""}`,
        large: `http://${strapi_url}:1337${pic.formats?.large?.url || pic.url || ""}`,
      }));

      return { title, description, cost, rate, images, startDate, endDate };
    });
  } catch (error: any) {
    console.error("Ошибка при загрузке туров:", error.message);
    return null;
  }
};
