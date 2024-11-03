import SectionTitle from '../components/SectionTitle'
import PlanCard from '../components/PlanCard'
/* import PriceCalculator from '../components/PriceCalculator' */
import { CircleAlert } from 'lucide-react'

const Plans = () => {
    return (
        <section id="planes" className="my-8">
            <SectionTitle title="NUESTROS PLANES" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-1">
                <PlanCard
                    title={<><u>COMBO</u> Castillo simple</>}
                    items={['Castillo simple', '1 Mesa (Tejo o Metegol a elección)', 'Duración: 3 horas']}
                    price="$24000"
                />
                <PlanCard
                    title={<><u>COMBO</u> Castillo con tobogán</>}
                    items={['Castillo 4x6', '1 Mesa (Tejo o Metegol a elección)', 'Duración: 3 horas']}
                    price="$28000"
                />
                <PlanCard
                    title="Castillo simple"
                    items={['Castillo 3x4', 'Duración: 3 horas']}
                    price="$20000"
                />
                <PlanCard
                    title="Castillo con tobogán"
                    items={['Castillo 4x6', 'Duración: 3 horas']}
                    price="$25000"
                />
            </div>
            {/* <PriceCalculator /> */}
            <div className="mt-2 mb-12 flex items-center justify-center">
                <p className="mt-4 text-gray-500 text-center flex items-center">
                    <CircleAlert className="w-6 h-6 mr-2" />
                    Precios sujetos a modificaciones. En el caso de que desees un plan más personalizado, por favor comunícate con nosotros.
                </p>
            </div>

            {/* Nota de precios sujetos a modificaciones */}

        </section>
    )
}

export default Plans