import SectionTitle from '../components/SectionTitle';
import image1 from '../assets/images/Designer.jpeg'
import image2 from '../assets/images/Designer (1).jpeg'
import image3 from '../assets/images/Designer (2).jpeg'
import image4 from '../assets/images/Designer (3).jpeg'
import { CircleAlert } from 'lucide-react';
import { useState, useRef, useEffect } from "react";


export default function Hero() {

  const [currentImage, setCurrentImage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalImages = 4;

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      setCurrentImage(newIndex);
    }
  };

  useEffect(() => {
    const carousel = scrollRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);


  
  return (
    <section id="inicio" className="my-8 text-center">
      <SectionTitle title={<span className="text-5xl">BIENVENIDOS A FUNNY GAMES</span>} />
      <p className="text-xl mb-8">
        Ofrecemos una amplia variedad de juegos inflables y de entretenimiento para hacer de tu evento una experiencia inolvidable.
      </p>
      <>
        <div ref={scrollRef} className="overflow-x-auto flex snap-x snap-mandatory md:grid md:grid-cols-4 gap-4">
          <div className="flex-shrink-0 w-full snap-start">
            <img src={image1} alt="Castillo inflable" className="rounded-lg shadow-md" />
          </div>
          <div className="flex-shrink-0 w-full snap-start">
            <img src={image2} alt="Metegol" className="rounded-lg shadow-md" />
          </div>
          <div className="flex-shrink-0 w-full snap-start">
            <img src={image3} alt="Mesa de tejo" className="rounded-lg shadow-md" />
          </div>
          <div className="flex-shrink-0 w-full snap-start">
            <img src={image4} alt="Castillo inflable" className="rounded-lg shadow-md" />
          </div>
        </div>

        {/* Puntos de navegación visibles solo en pantallas móviles */}
        <div className="flex justify-center mt-4 space-x-2 md:hidden">
          {[...Array(totalImages)].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full border-2 ${currentImage === index ? "bg-orange-600 border-2 border-orange-600" : "border-orange-600"
                }`}
            ></div>
          ))}
        </div>
      </>
      <div className="text-sm text-gray-500 mt-2 flex items-center">
        <CircleAlert className="w-6 h-6 mr-2 " />
        <p className='text-gray-500'>Por el momento, las imagenes son solo ilustrativas.</p>
      </div>
    </section>
  );
}
