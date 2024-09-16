import SectionTitle from '../components/SectionTitle'
import PlanCard from '../components/PlanCard'
/* import PriceCalculator from '../components/PriceCalculator' */
import { CircleAlert } from 'lucide-react'

const Plans = () => {
    return (
        <section id="planes" className="my-8">
            <SectionTitle title="Nuestros planes" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-1">
                <PlanCard
                    title="Plan 3x4"
                    items={['Castillo 3x4', '1 Mesa (Tejo o Metegol a elección)', 'Duración: 3 horas']}
                    price="$24000"
                />
                <PlanCard
                    title="Plan 4x6"
                    items={['Castillo 4x6', '1 Mesa (Tejo o Metegol a elección)', 'Duración: 3 horas']}
                    price="$28000"
                />
                <PlanCard
                    title="Solo 3x4"
                    items={['Castillo 3x4', 'Duración: 3 horas']}
                    price="$20000"
                />
                <PlanCard
                    title="Solo 4x6"
                    items={['Castillo 4x6', 'Duración: 3 horas']}
                    price="$25000"
                />
            </div>
            {/* <PriceCalculator /> */}
            <div className="mt-2 mb-12 flex items-center">
                <CircleAlert className="w-6 h-6 mr-2 text-pastel-blue-600 " />
                <p>En el caso de que desees un plan más personalizado, por favor comunicate con nosotros.</p>
            </div>
        </section>
    )
}

export default Plans