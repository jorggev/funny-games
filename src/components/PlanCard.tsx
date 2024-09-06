
interface PlanCardProps {
  title: string;
  items: string[];
  price: string;
}

export default function PlanCard({ title, items, price }: PlanCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2 text-pastel-blue-600">{title}</h3>
      <ul className="list-disc list-inside mb-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="font-bold">Precio: {price}</p>
    </div>
  );
}