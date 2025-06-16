import Image from "next/image";
import { Car } from "../types/car";

interface CarCardProps {
  car: Car;
}
const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="border rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition">
      <Image
        src={car.image}
        alt={`${car.mark_id} ${car.folder_id}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          {car.mark_id} {car.folder_id}
        </h2>
        <p className="text-blue-600 font-bold text-xl">{car.price.toLocaleString()} ₽</p>
      </div>
    </div>
  );
};

export default CarCard;