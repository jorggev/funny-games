  interface SectionTitleProps {
    title: React.ReactNode; // Acepta cualquier tipo de contenido JSX
  }
  
  export default function SectionTitle({ title }: SectionTitleProps) {
    return (
      <h2 className="text-3xl font-bold mb-4 text-orange-500">
        {title}
      </h2>
    );
  }
  