import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export default function InfoCard({ title, icon: Icon, items }: InfoCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-3 text-pastel-blue-600 flex items-center">
        <Icon className="w-6 h-6 mr-2" />
        {title}
      </h3>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}