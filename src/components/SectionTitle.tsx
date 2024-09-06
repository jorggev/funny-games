interface SectionTitleProps {
    title: string;
  }
  
  export default function SectionTitle({ title }: SectionTitleProps) {
    return <h2 className="text-3xl font-bold mb-4 text-pastel-blue-800">{title}</h2>;
  }
  