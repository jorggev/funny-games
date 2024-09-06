import SectionTitle from '../components/SectionTitle'
import PlanCard from '../components/PlanCard'
import PriceCalculator from '../components/PriceCalculator'

const Plans = () => {
    return (
        <section id="planes" className="my-8">
            <SectionTitle title="Nuestros Planes" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <PlanCard
                    title="Plan Básico"
                    items={['1 Castillo inflable', '1 Metegol', 'Duración: 4 horas']}
                    price="$XXX"
                />
                <PlanCard
                    title="Plan Estándar"
                    items={['2 Castillos inflables', '1 Metegol', '1 Mesa de tejo', 'Duración: 6 horas']}
                    price="$XXX"
                />
                <PlanCard
                    title="Plan Premium"
                    items={['3 Castillos inflables', '2 Metegoles', '2 Mesas de tejo', 'Duración: 8 horas']}
                    price="$XXX"
                />
            </div>
            <PriceCalculator />
        </section>
    )
}

export default Plans