import { Card } from '../../components/Card/Card'
import { Carrusel } from '../../components/Carrusel/Carrusel'
import { Footer } from '../../components/Footer/Footer'
import { Galery } from '../../components/Galery/Galery'
import { Header } from '../../components/Header/Header'
import { Nabvar } from '../../components/Nabvar/Nabvar'

export const Home = () => {
  return (
    <div>
        <Nabvar />
        <Header />
        <Card />
        <Galery />
        <Carrusel />
        <Footer />
    </div>
  )
}
