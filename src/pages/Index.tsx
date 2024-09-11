import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import Hero from '../sections/Hero'
import AboutUs from '../sections/AboutUs'
import Plans from '../sections/Plans'
import Organization from '../sections/Organization'
/* import ImportantInfo from '../sections/ImportantInfo' */
/* import Reservations from '../sections/Reservations' */
import PaymentMethods from '../components/PaymentMethods'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-pastel-blue-50 text-gray-900">
      <Header />
      <main className="container mx-auto p-4">
        <Hero />
        <AboutUs />
        <Plans />
        <Organization />
        {/* <ImportantInfo /> */}
        {/* <Reservations /> */}
        <PaymentMethods/>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default LandingPage