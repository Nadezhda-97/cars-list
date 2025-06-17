import Image from "next/image";
import { Car } from "../types/car";

interface CarCardProps {
  car: Car;
}
const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="border rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition">
      <Image
        src={car.images.image[0]}
        alt={`${car.mark_id} ${car.folder_id}`}
        width={400}
        height={192}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          {car.mark_id} {car.folder_id}
        </h2>
        <p className="text-blue-600 font-bold text-xl mb-2">{car.price.toLocaleString()} ₽</p>

        <ul className="text-sm text-gray-700 space-y-1">
          <li><span className="font-medium">Мощность:</span> {car.engine_power}</li>
          <li><span className="font-medium">Цвет:</span> {car.color}</li>
          <li><span className="font-medium">Год выпуска:</span> {car.year}</li>
          <li><span className="font-medium">Топливо:</span> {car.engine_type}</li>
          <li><span className="font-medium">КПП:</span> {car.gearbox}</li>
        </ul>
      </div>
    </div>
  );
};

export default CarCard;