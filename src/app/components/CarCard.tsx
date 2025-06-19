import Image from "next/image";
import { Car } from "../types/car";
import { Heart, Zap, Palette, Calendar, Fuel, Settings } from "lucide-react";

interface CarCardProps {
  car: Car;
}
const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="relative border rounded-2xl shadow-md bg-white overflow-hidden transition hover:shadow-xl hover:scale-[1.01] duration-300 w-full">
      <div className="relative">
        <Image
          src={car.images.image[0]}
          alt={`${car.mark_id} ${car.folder_id}`}
          width={400}
          height={192}
          className="w-full h-48 object-cover sm:h-52 md:h-56"
        />
        <button
          className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow transition"
          aria-label="Добавить в избранное"
        >
          <Heart className="w-5 h-5 text-red-500" />
        </button>
      </div>
      <div className="p-4 sm:p-5 space-y-2">
        <h2 className="text-base sm:text-lg font-semibold leading-tight">
          {car.mark_id} {car.folder_id}
        </h2>
        <p className="text-blue-600 font-bold text-lg sm:text-xl">{car.price.toLocaleString()} ₽</p>

        <ul className="text-sm sm:text-[15px] text-gray-700 space-y-1">
          <li className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-gray-500" />
            <span className="font-semibold">Мощность:</span> {car.engine_power}
          </li>
          <li className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-gray-500" />
            <span className="font-semibold">Цвет:</span> {car.color}
          </li>
          <li className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="font-semibold">Год выпуска:</span> {car.year}
          </li>
          <li className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-gray-500" />
            <span className="font-semibold">Топливо:</span> {car.engine_type}
          </li>
          <li className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-gray-500" />
            <span className="font-semibold">Коробка:</span> {car.gearbox}
          </li>
        </ul>
        <button className="mt-4 w-full bg-blue-600 text-white text-sm sm:text-base font-medium py-2 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition cursor-pointer">
          Купить
        </button>
      </div>
    </div>
  );
};

export default CarCard;