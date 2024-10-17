// src/components/PlanCard.tsx

interface PlanCardProps {
  title: string;
  items: string[];
  price: string;
}

export default function PlanCard({ title, items, price }: PlanCardProps) {
  return (
    <div className="overflow-hidden border-2 border-[#f25e02] rounded-lg shadow-md flex flex-col justify-between h-full bg-[#fff]">
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="p-4 bg-[#fff]">
        <ul className="list-none list-inside mb-4">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-xl font-bold text-orange-600">Precio: {price}</p>
      </div>
    </div>
  );
}